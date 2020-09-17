import { concat, Id, Row } from "../../../../general"
import { CommaAnalysis, SymbolClass } from "../../../../sagittal"
import { computeNotatingCommasRow } from "./notatingCommasRow"
import { compute23FreeClassRow } from "./twoThreeFreeClassRow"

const computeFindCommasRow = (
    commaAnalysisWithMaybeSagittalSymbolClassId: CommaAnalysis & { symbolClassId?: Id<SymbolClass> },
): Row<{ of: CommaAnalysis & { symbolClassId?: Id<SymbolClass> } }> => {

    return concat(
        computeNotatingCommasRow(commaAnalysisWithMaybeSagittalSymbolClassId),
        compute23FreeClassRow(
            commaAnalysisWithMaybeSagittalSymbolClassId,
        ) as Row as Row<{ of: CommaAnalysis & { symbolClassId?: Id<SymbolClass> } }>,
    ) as Row<{ of: CommaAnalysis & { symbolClassId?: Id<SymbolClass> } }>
}

export {
    computeFindCommasRow,
}
