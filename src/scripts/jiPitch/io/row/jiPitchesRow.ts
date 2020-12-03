import {BLANK, Comma, Count, Exponent, Max, Maybe, Prime, Row} from "../../../../general"
import {
    CommaAnalysis,
    CommaClassId,
    computeCommaName,
    computeSizeCategory,
    formatCommaClass,
    JiPitchAnalysis,
} from "../../../../sagittal"
import {jiPitchScriptGroupSettings} from "../../globals"
import {JiPitchesOrFindCommasField, NotatingCommasField} from "../../types"
import {computeJiPitchRow} from "./jiPitchRow"
import {compute23FreeClassRow} from "./two3FreeClassRow"

const computeJiPitchesRow = (
    jiPitchAnalysis: JiPitchAnalysis,
    maybeCommaClassId: Maybe<CommaClassId>,
    maxMonzoLength: Max<Count<Exponent<Prime>>>,
): Row<{of: CommaAnalysis}> => {
    const row = []

    if (!jiPitchScriptGroupSettings.excludedFields.includes(JiPitchesOrFindCommasField.COMMA_CLASS)) {
        const formattedCommaClass = maybeCommaClassId ? formatCommaClass(maybeCommaClassId) : BLANK
        row.push(formattedCommaClass)
    }
    if (!jiPitchScriptGroupSettings.excludedFields.includes(JiPitchesOrFindCommasField.NAME)) {
        let commaName = BLANK
        try {
            commaName = computeCommaName(jiPitchAnalysis.pitch as Comma)
        } catch (e) {
        }
        row.push(commaName)
    }
    // TODO: GETTING COMPLEX 3-LIMIT COMMA REFERENCE: MAYBE COMMA FIELDS
    //  I tried to DRY this up with computeNotatingCommasRow before and failed, but it bit me in the butt today
    //  Okay hm I see now though... is this cluster of 3 fields like, "maybe comma" stuff?
    if (!jiPitchScriptGroupSettings.excludedFields.includes(NotatingCommasField.SIZE_CATEGORY)) {
        let sizeCategory = BLANK
        try {
            sizeCategory = computeSizeCategory(jiPitchAnalysis.pitch as Comma)
        } catch (e) {
        }
        row.push(sizeCategory)
    }

    return [
        ...row,
        ...computeJiPitchRow(jiPitchAnalysis, maxMonzoLength),
        ...compute23FreeClassRow(jiPitchAnalysis.two3FreeClassAnalysis) as Row as Row<{of: CommaAnalysis}>,
    ] as Row<{of: CommaAnalysis}>
}

export {
    computeJiPitchesRow,
}
