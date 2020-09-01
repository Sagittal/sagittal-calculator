import { concat, formatInteger, formatNumber, Row } from "../../../general"
import { AnalyzedRationalPitchWithMaybeSagittalSymbol } from "../types"
import { computeNotatingCommaWithMaybeSagittalSymbolRow } from "./notatingCommaRow"

const computeCommaRow = (
    commaWithMaybeSagittalSymbol: AnalyzedRationalPitchWithMaybeSagittalSymbol,
): Row<AnalyzedRationalPitchWithMaybeSagittalSymbol> => {
    const { limit, fiveRoughSopfr, n2d3p9 } = commaWithMaybeSagittalSymbol

    return concat(
        computeNotatingCommaWithMaybeSagittalSymbolRow(commaWithMaybeSagittalSymbol),
        [
            formatInteger(limit),
            formatInteger(fiveRoughSopfr),
            formatNumber(n2d3p9),
        ] as Row<AnalyzedRationalPitchWithMaybeSagittalSymbol>,
    )
}

export {
    computeCommaRow,
}
