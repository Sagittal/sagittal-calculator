import { concat, formatInteger, formatNumber, Id, Row } from "../../../general"
import { CommaAnalysis, SymbolClass } from "../../../sagittal"
import { computeExactlyNotatingCommaWithMaybeSagittalSymbolClassRow } from "./exactlyNotatingCommaRow"

const computeCommaRow = (
    commaWithMaybeSagittalSymbolClassId: CommaAnalysis & { symbolClassId?: Id<SymbolClass> },
): Row<{ of: CommaAnalysis & { symbolClassId?: Id<SymbolClass> } }> => {
    const { limit, twoThreeFreeSopfr, n2d3p9 } = commaWithMaybeSagittalSymbolClassId

    return concat(
        computeExactlyNotatingCommaWithMaybeSagittalSymbolClassRow(commaWithMaybeSagittalSymbolClassId),
        // TODO: FIND COMMA ANALYZE JI PITCH NOTATING COMMAS 2,3 FREE CLEAN UP
        //  I would like this to work out to be a hybridization of the 2,3-free-class and notating-commas tables
        [
            formatInteger(limit),
            formatInteger(twoThreeFreeSopfr),
            formatNumber(n2d3p9),
        ] as Row as Row<{ of: CommaAnalysis & { symbolClassId?: Id<SymbolClass> } }>,
    )
}

export {
    computeCommaRow,
}
