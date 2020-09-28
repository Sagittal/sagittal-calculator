import { Id, Maybe, Row } from "../../../../general"
import { CommaAnalysis, SymbolClass } from "../../../../sagittal"
import { computeNotatingCommasRow } from "./notatingCommasRow"
import { compute23FreeClassRow } from "./two3FreeClassRow"

const computeFindCommasRow = (
    commaAnalysis: CommaAnalysis,
    maybeSymbolClassId: Maybe<Id<SymbolClass>>,
): Row<{ of: CommaAnalysis }> => {

    return [
        ...computeNotatingCommasRow(commaAnalysis, maybeSymbolClassId),
        ...compute23FreeClassRow(commaAnalysis.two3FreeClassAnalysis) as Row as Row<{ of: CommaAnalysis }>,
    ] as Row<{ of: CommaAnalysis }>
}

export {
    computeFindCommasRow,
}
