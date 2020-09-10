import { concat, formatInteger, formatNumber, Id, Row } from "../../../general"
import { AnalyzedComma, JiSymbol } from "../../../sagittal"
import { computeNotatingCommaWithMaybeSagittalSymbolRow } from "./notatingCommaRow"

const computeCommaRow = (
    commaWithMaybeSagittalSymbol: AnalyzedComma & { symbolId?: Id<JiSymbol> },
): Row<AnalyzedComma & { symbolId?: Id<JiSymbol> }> => {
    const { limit, twoThreeFreeSopfr, n2d3p9 } = commaWithMaybeSagittalSymbol

    return concat(
        computeNotatingCommaWithMaybeSagittalSymbolRow(commaWithMaybeSagittalSymbol),
        [
            formatInteger(limit),
            formatInteger(twoThreeFreeSopfr),
            formatNumber(n2d3p9),
        ] as Row<AnalyzedComma & { symbolId?: Id<JiSymbol> }>,
    )
}

export {
    computeCommaRow,
}
