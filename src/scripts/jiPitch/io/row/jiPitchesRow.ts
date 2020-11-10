import {BLANK, Comma, Count, Exponent, Max, Maybe, Prime, Row} from "../../../../general"
import {CommaAnalysis, CommaClassId, computeCommaName, formatCommaClass, JiPitchAnalysis} from "../../../../sagittal"
import {jiPitchScriptGroupSettings} from "../../globals"
import {JiPitchesOrFindCommasField} from "../../types"
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

    return [
        ...row,
        ...computeJiPitchRow(jiPitchAnalysis, maxMonzoLength),
        ...compute23FreeClassRow(jiPitchAnalysis.two3FreeClassAnalysis) as Row as Row<{of: CommaAnalysis}>,
    ] as Row<{of: CommaAnalysis}>
}

export {
    computeJiPitchesRow,
}
