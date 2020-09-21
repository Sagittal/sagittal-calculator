import { BLANK, Id, ioSettings, Maybe, Row } from "../../../../general"
import { CommaAnalysis, formatSymbolClass, SymbolClass } from "../../../../sagittal"
import { jiPitchScriptGroupSettings } from "../../globals"
import { NotatingCommasField } from "../../types"
import { computeJiPitchRow } from "./jiPitchRow"

const computeNotatingCommasRow = (
    commaAnalysis: CommaAnalysis,
    maybeSymbolClassId: Maybe<Id<SymbolClass>>,
): Row<{ of: CommaAnalysis }> => {

    const rows = []
    
    if (!jiPitchScriptGroupSettings.excludedFields.includes(NotatingCommasField.SYMBOL_CLASS)) {
        const formattedSymbolClass = maybeSymbolClassId ? formatSymbolClass(maybeSymbolClassId, ioSettings) : BLANK
        rows.push(formattedSymbolClass)
    }
    if (!jiPitchScriptGroupSettings.excludedFields.includes(NotatingCommasField.NAME)) {
        const { name } = commaAnalysis
        rows.push(name)
    }
    
    return [
        ...rows,
        ...computeJiPitchRow(commaAnalysis),
    ] as Row<{ of: CommaAnalysis }>
}

export {
    computeNotatingCommasRow,
}
