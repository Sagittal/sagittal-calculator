import { BLANK, formatMonzo, formatNumber, formatRatio, Io, Row } from "../../../general"
import { formatSymbolAscii } from "../../../sagittal"
import { AnalyzedRationalPitchWithMaybeSagittalSymbol } from "../types"

const computeNotatingCommaWithMaybeSagittalSymbolRow = (
    notatingCommaWithMaybeSagittalSymbol: AnalyzedRationalPitchWithMaybeSagittalSymbol,
): Row<AnalyzedRationalPitchWithMaybeSagittalSymbol> => {
    const { name, monzo, cents, ratio, symbol, apotomeSlope } = notatingCommaWithMaybeSagittalSymbol

    return [
        symbol ? formatSymbolAscii(symbol) : BLANK,
        name,
        formatRatio(ratio),
        formatMonzo(monzo),
        formatNumber(cents),
        formatNumber(apotomeSlope),
    ] as Row<AnalyzedRationalPitchWithMaybeSagittalSymbol>
}

export {
    computeNotatingCommaWithMaybeSagittalSymbolRow,
}
