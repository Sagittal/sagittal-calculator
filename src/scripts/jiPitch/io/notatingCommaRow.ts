import { BLANK, formatMonzo, formatNumber, formatRatio, Id, ioSettings, Row } from "../../../general"
import { AnalyzedComma, formatSymbol, JiSymbol } from "../../../sagittal"

const computeNotatingCommaWithMaybeSagittalSymbolRow = (
    notatingCommaWithMaybeSagittalSymbol: AnalyzedComma & { symbolId?: Id<JiSymbol> },
): Row<{ of: AnalyzedComma & { symbolId?: Id<JiSymbol> } }> => {
    const { name, monzo, cents, ratio, symbolId, apotomeSlope } = notatingCommaWithMaybeSagittalSymbol

    const formattedSymbol = symbolId ? formatSymbol(symbolId, ioSettings) : BLANK

    return [
        formattedSymbol,
        name,
        formatRatio(ratio),
        formatMonzo(monzo),
        formatNumber(cents),
        formatNumber(apotomeSlope),
    ] as Row<{ of: AnalyzedComma & { symbolId?: Id<JiSymbol> } }>
}

export {
    computeNotatingCommaWithMaybeSagittalSymbolRow,
}
