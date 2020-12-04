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

    // These are the same set of three fields which computeNotatingCommasRow addresses.
    // They are the fields which commas have which general JI pitches don't.
    // When analyzing a bunch of JI pitches at once, we are interested in these if they're there.
    // But we can't assume each JI pitch will have them. So we have to handle them a bit differently.
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
