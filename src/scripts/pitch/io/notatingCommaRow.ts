import { BLANK, formatMonzo, formatNumber, formatRatio, ioSettings, Row } from "../../../general"
import { computeSmileyFromAscii, formatSymbolAscii } from "../../../sagittal"
import { AnalyzedRationalPitchWithMaybeSagittalSymbol } from "../types"

const computeNotatingCommaWithMaybeSagittalSymbolRow = (
    notatingCommaWithMaybeSagittalSymbol: AnalyzedRationalPitchWithMaybeSagittalSymbol,
): Row<AnalyzedRationalPitchWithMaybeSagittalSymbol> => {
    const { name, monzo, cents, ratio, symbol, apotomeSlope } = notatingCommaWithMaybeSagittalSymbol

    return [
        symbol ?
            // TODO: this happens in two places, here and in popularRatios
            //  maybe there should be a formatSymbol method which lives in sagittal/io
            //  and which has a second argument which is required and which is an ioSettings object
            //  so it just pulls whatever it needs and then decides which one to render
            //  - probably we should change addMaybeSagittalSymbol so it just gets the symbol by id
            //  and wait to resolve it until the last moment
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
