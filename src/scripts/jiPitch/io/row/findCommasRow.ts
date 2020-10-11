import { Count, Exponent, Id, Max, Maybe, Prime, Row } from "../../../../general"
import { CommaAnalysis, SymbolClass } from "../../../../sagittal"
import { computeNotatingCommasRow } from "./notatingCommasRow"
import { compute23FreeClassRow } from "./two3FreeClassRow"

const computeFindCommasRow = (
    commaAnalysis: CommaAnalysis,
    maybeSymbolClassId: Maybe<Id<SymbolClass>>,
    maxMonzoLength: Max<Count<Exponent<Prime>>>,
): Row<{ of: CommaAnalysis }> => {

    return [
        ...computeNotatingCommasRow(commaAnalysis, maybeSymbolClassId, maxMonzoLength),
        ...compute23FreeClassRow(commaAnalysis.two3FreeClassAnalysis) as Row as Row<{ of: CommaAnalysis }>,
    ] as Row<{ of: CommaAnalysis }>
}

export {
    computeFindCommasRow,
}
