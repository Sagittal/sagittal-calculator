import { BLANK, formatMonzo, formatNumber, formatRatio, Id, ioSettings, Row } from "../../../general"
import { CommaAnalysis, formatSymbol, JiSymbol } from "../../../sagittal"

const computeNotatingCommaWithMaybeSagittalSymbolRow = (
    notatingCommaWithMaybeSagittalSymbol: CommaAnalysis & { symbolId?: Id<JiSymbol> },
): Row<{ of: CommaAnalysis & { symbolId?: Id<JiSymbol> } }> => {
    const { name, monzo, cents, ratio, symbolId, apotomeSlope } = notatingCommaWithMaybeSagittalSymbol

    const formattedSymbol = symbolId ? formatSymbol(symbolId, ioSettings) : BLANK

    return [
        formattedSymbol,
        name,
        formatRatio(ratio),
        formatMonzo(monzo),
        formatNumber(cents),
        formatNumber(apotomeSlope),
    ] as Row<{ of: CommaAnalysis & { symbolId?: Id<JiSymbol> } }>
}

export {
    computeNotatingCommaWithMaybeSagittalSymbolRow,
}
