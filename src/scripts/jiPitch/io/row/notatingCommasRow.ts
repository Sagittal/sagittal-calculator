import { BLANK, Count, Exponent, Id, Max, Maybe, Prime, Row } from "../../../../general"
import { CommaAnalysis, formatSymbolClass, SymbolClass } from "../../../../sagittal"
import { jiPitchScriptGroupSettings } from "../../globals"
import { NotatingCommasField } from "../../types"
import { computeJiPitchRow } from "./jiPitchRow"

const computeNotatingCommasRow = (
    commaAnalysis: CommaAnalysis,
    maybeSymbolClassId: Maybe<Id<SymbolClass>>,
    maxMonzoLength: Max<Count<Exponent<Prime>>>,
): Row<{ of: CommaAnalysis }> => {
    const row = []

    if (!jiPitchScriptGroupSettings.excludedFields.includes(NotatingCommasField.SYMBOL_CLASS)) {
        const formattedSymbolClass = maybeSymbolClassId ? formatSymbolClass(maybeSymbolClassId) : BLANK
        row.push(formattedSymbolClass)
    }
    if (!jiPitchScriptGroupSettings.excludedFields.includes(NotatingCommasField.NAME)) {
        const { name } = commaAnalysis
        row.push(name)
    }

    return [
        ...row,
        ...computeJiPitchRow(commaAnalysis, maxMonzoLength),
    ] as Row<{ of: CommaAnalysis }>
}

export {
    computeNotatingCommasRow,
}
