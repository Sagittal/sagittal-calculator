import { concat, Id, Maybe, Row } from "../../../../general"
import { CommaAnalysis, SymbolClass } from "../../../../sagittal"
import { computeNotatingCommasRow } from "./notatingCommasRow"
import { compute23FreeClassRow } from "./twoThreeFreeClassRow"

const computeFindCommasRow = (
    commaAnalysis: CommaAnalysis,
    maybeSymbolClassId: Maybe<Id<SymbolClass>>,
): Row<{ of: CommaAnalysis }> => {

    return concat(
        computeNotatingCommasRow(commaAnalysis, maybeSymbolClassId),
        compute23FreeClassRow(
            commaAnalysis.twoThreeFreeClassAnalysis,
        ) as Row as Row<{ of: CommaAnalysis }>,
    ) as Row<{ of: CommaAnalysis }>
}

export {
    computeFindCommasRow,
}
