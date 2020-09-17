import { BLANK, Id, ioSettings, Row } from "../../../../general"
import { CommaAnalysis, formatSymbolClass, SymbolClass } from "../../../../sagittal"
import { computeJiPitchRow } from "./jiPitchRow"

const computeNotatingCommasRow = (
    commaAnalysisWithMaybeSagittalSymbolClassId: CommaAnalysis & { symbolClassId?: Id<SymbolClass> },
): Row<{ of: CommaAnalysis & { symbolClassId?: Id<SymbolClass> } }> => {
    const { name, symbolClassId } = commaAnalysisWithMaybeSagittalSymbolClassId
    const formattedSymbolClass = symbolClassId ? formatSymbolClass(symbolClassId, ioSettings) : BLANK

    return [
        formattedSymbolClass,
        name,
        ...computeJiPitchRow(commaAnalysisWithMaybeSagittalSymbolClassId),
    ] as Row<{ of: CommaAnalysis & { symbolClassId?: Id<SymbolClass> } }>
}

export {
    computeNotatingCommasRow,
}
