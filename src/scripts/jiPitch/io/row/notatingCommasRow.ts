import {BLANK, Count, Exponent, Max, Maybe, Prime, Row} from "../../../../general"
import {CommaAnalysis, CommaClassId, formatCommaClass} from "../../../../sagittal"
import {jiPitchScriptGroupSettings} from "../../globals"
import {NotatingCommasField} from "../../types"
import {computeJiPitchRow} from "./jiPitchRow"

const computeNotatingCommasRow = (
    commaAnalysis: CommaAnalysis,
    maybeCommaClassId: Maybe<CommaClassId>,
    maxMonzoLength: Max<Count<Exponent<Prime>>>,
): Row<{of: CommaAnalysis}> => {
    const row = []

    if (!jiPitchScriptGroupSettings.excludedFields.includes(NotatingCommasField.COMMA_CLASS)) {
        const formattedCommaClass = maybeCommaClassId ? formatCommaClass(maybeCommaClassId) : BLANK
        row.push(formattedCommaClass)
    }
    if (!jiPitchScriptGroupSettings.excludedFields.includes(NotatingCommasField.NAME)) {
        const {name} = commaAnalysis
        row.push(name)
    }

    return [
        ...row,
        ...computeJiPitchRow(commaAnalysis, maxMonzoLength),
    ] as Row<{of: CommaAnalysis}>
}

export {
    computeNotatingCommasRow,
}
