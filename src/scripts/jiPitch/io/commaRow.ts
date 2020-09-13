import { concat, formatInteger, formatNumber, Id, Row } from "../../../general"
import { CommaAnalysis, JiSymbol } from "../../../sagittal"
import { computeNotatingCommaWithMaybeSagittalSymbolRow } from "./notatingCommaRow"

const computeCommaRow = (
    commaWithMaybeSagittalSymbol: CommaAnalysis & { symbolId?: Id<JiSymbol> },
): Row<{ of: CommaAnalysis & { symbolId?: Id<JiSymbol> } }> => {
    const { limit, twoThreeFreeSopfr, n2d3p9 } = commaWithMaybeSagittalSymbol

    return concat(
        computeNotatingCommaWithMaybeSagittalSymbolRow(commaWithMaybeSagittalSymbol),
        [
            formatInteger(limit),
            formatInteger(twoThreeFreeSopfr),
            formatNumber(n2d3p9),
        ] as Row<{ of: CommaAnalysis & { symbolId?: Id<JiSymbol> } }>,
    )
}

export {
    computeCommaRow,
}
