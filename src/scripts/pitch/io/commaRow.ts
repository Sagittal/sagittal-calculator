import { concat, formatInteger, formatNumber, Id, Row } from "../../../general"
import { AnalyzedRationalPitch, JiSymbol } from "../../../sagittal"
import { computeNotatingCommaWithMaybeSagittalSymbolRow } from "./notatingCommaRow"

const computeCommaRow = (
    commaWithMaybeSagittalSymbol: AnalyzedRationalPitch & { symbolId?: Id<JiSymbol> },
): Row<AnalyzedRationalPitch & { symbolId?: Id<JiSymbol> }> => {
    const { limit, fiveRoughSopfr, n2d3p9 } = commaWithMaybeSagittalSymbol

    return concat(
        computeNotatingCommaWithMaybeSagittalSymbolRow(commaWithMaybeSagittalSymbol),
        [
            formatInteger(limit),
            formatInteger(fiveRoughSopfr),
            formatNumber(n2d3p9),
        ] as Row<AnalyzedRationalPitch & { symbolId?: Id<JiSymbol> }>,
    )
}

export {
    computeCommaRow,
}
