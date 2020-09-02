import { BLANK, formatMonzo, formatNumber, formatRatio, Id, ioSettings, Row } from "../../../general"
import { AnalyzedRationalPitch, formatSymbol, JiSymbol } from "../../../sagittal"

const computeNotatingCommaWithMaybeSagittalSymbolRow = (
    notatingCommaWithMaybeSagittalSymbol: AnalyzedRationalPitch & { symbolId?: Id<JiSymbol> },
): Row<AnalyzedRationalPitch & { symbolId?: Id<JiSymbol> }> => {
    const { name, monzo, cents, ratio, symbolId, apotomeSlope } = notatingCommaWithMaybeSagittalSymbol

    const formattedSymbol = symbolId ? formatSymbol(symbolId, ioSettings) : BLANK

    return [
        formattedSymbol,
        name,
        formatRatio(ratio),
        formatMonzo(monzo),
        formatNumber(cents),
        formatNumber(apotomeSlope),
    ] as Row<AnalyzedRationalPitch & { symbolId?: Id<JiSymbol> }>
}

export {
    computeNotatingCommaWithMaybeSagittalSymbolRow,
}
