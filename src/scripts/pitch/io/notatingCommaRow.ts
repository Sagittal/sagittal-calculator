import { BLANK, formatMonzo, formatNumber, formatRatio, ioSettings, Row } from "../../../general"
import { computeSmileyFromAscii, formatSymbolAscii } from "../../../sagittal"
import { AnalyzedRationalPitchWithMaybeSagittalSymbol } from "../types"

const computeNotatingCommaWithMaybeSagittalSymbolRow = (
    notatingCommaWithMaybeSagittalSymbol: AnalyzedRationalPitchWithMaybeSagittalSymbol,
): Row<AnalyzedRationalPitchWithMaybeSagittalSymbol> => {
    const { name, monzo, cents, ratio, symbol, apotomeSlope } = notatingCommaWithMaybeSagittalSymbol

    return [
        symbol ?
            ioSettings.forForum ?
                computeSmileyFromAscii(symbol) :
                formatSymbolAscii(symbol) :
            BLANK,
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
