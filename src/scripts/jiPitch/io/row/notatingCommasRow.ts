import {BLANK, Count, Exponent, Max, Maybe, Prime, Row} from "@sagittal/general"
import {
    CommaAnalysis,
    CommaClassId,
    formatCommaClass,
    formatSizeCategory,
    PotentiallyCommaAnalysis,
} from "@sagittal/system"
import {jiPitchScriptGroupSettings} from "../../globals"
import {CommaField} from "../../types"
import {computeJiPitchRow} from "./jiPitchRow"

const computeNotatingCommasRow = (
    commaAnalysis: CommaAnalysis | PotentiallyCommaAnalysis,
    maybeCommaClassId: Maybe<CommaClassId>,
    maxMonzoLength: Max<Count<Exponent<Prime>>>,
): Row<{of: CommaAnalysis}> => {
    const row = []

    if (!jiPitchScriptGroupSettings.excludedFields.includes(CommaField.COMMA_CLASS)) {
        const formattedCommaClass = maybeCommaClassId ? formatCommaClass(maybeCommaClassId) : BLANK
        row.push(formattedCommaClass)
    }
    if (!jiPitchScriptGroupSettings.excludedFields.includes(CommaField.NAME)) {
        const {name} = commaAnalysis
        row.push(name)
    }
    if (!jiPitchScriptGroupSettings.excludedFields.includes(CommaField.SIZE_CATEGORY)) {
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
