import { BLANK, formatMonzo, formatNumber, formatRatio, Id, ioSettings, Row } from "../../../general"
import { CommaAnalysis, formatSymbolClass, SymbolClass } from "../../../sagittal"

const computeExactlyNotatingCommaWithMaybeSagittalSymbolClassRow = (
    { name, monzo, cents, ratio, symbolClassId, apotomeSlope }: CommaAnalysis & { symbolClassId?: Id<SymbolClass> },
): Row<{ of: CommaAnalysis & { symbolClassId?: Id<SymbolClass> } }> => {
    const formattedSymbolClass = symbolClassId ? formatSymbolClass(symbolClassId, ioSettings) : BLANK

    return [
        formattedSymbolClass,
        name,
        formatRatio(ratio),
        formatMonzo(monzo),
        formatNumber(cents),
        formatNumber(apotomeSlope),
    ] as Row<{ of: CommaAnalysis & { symbolClassId?: Id<SymbolClass> } }>
}

export {
    computeExactlyNotatingCommaWithMaybeSagittalSymbolClassRow,
}
