import { concat, formatInteger, formatNumber, Id, Row } from "../../../general"
import { CommaAnalysis, JiSymbol } from "../../../sagittal"
import { computeNotatingCommaWithMaybeSagittalSymbolRow } from "./notatingCommaRow"

const computeCommaRow = (
    commaWithMaybeSagittalSymbol: CommaAnalysis & { symbolId?: Id<JiSymbol> },
): Row<{ of: CommaAnalysis & { symbolId?: Id<JiSymbol> } }> => {
    const { limit, twoThreeFreeSopfr, n2d3p9 } = commaWithMaybeSagittalSymbol

    return concat(
        computeNotatingCommaWithMaybeSagittalSymbolRow(commaWithMaybeSagittalSymbol),
        // TODO: FIND COMMA ANALYZE JI PITCH NOTATING COMMAS 2,3 FREE CLEAN UP
        //  I would like this to work out to be a hybridization of the 2,3-free-class and notating-commas tables
        [
            formatInteger(limit),
            formatInteger(twoThreeFreeSopfr),
            formatNumber(n2d3p9),
        ] as Row as Row<{ of: CommaAnalysis & { symbolId?: Id<JiSymbol> } }>,
    )
}

export {
    computeCommaRow,
}
