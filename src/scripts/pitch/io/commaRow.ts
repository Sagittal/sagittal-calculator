import { concat, formatInteger, Io, Row } from "../../../general"
import { formatN2D3P9 } from "../../../sagittal"
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
            formatN2D3P9(n2d3p9),
        ] as Row<AnalyzedRationalPitchWithMaybeSagittalSymbol>,
    )
}

export {
    computeCommaRow,
}
