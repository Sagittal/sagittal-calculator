import {BLANK, Count, Exponent, Max, Maybe, Prime, Row} from "../../../../general"
import {
    CommaAnalysis,
    CommaClassId,
    formatCommaClass,
    formatSizeCategory, PotentiallyCommaAnalysis,
} from "../../../../sagittal"
import {jiPitchScriptGroupSettings} from "../../globals"
import {NotatingCommasField} from "../../types"
import {computeJiPitchRow} from "./jiPitchRow"

const computeNotatingCommasRow = (
    commaAnalysis: CommaAnalysis | PotentiallyCommaAnalysis,
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
    if (!jiPitchScriptGroupSettings.excludedFields.includes(NotatingCommasField.SIZE_CATEGORY)) {
        const {sizeCategory} = commaAnalysis
        row.push(formatSizeCategory(sizeCategory))
    }

    return [
        ...row,
        ...computeJiPitchRow(commaAnalysis, maxMonzoLength),
    ] as Row<{of: CommaAnalysis}>
}

export {
    computeNotatingCommasRow,
}
