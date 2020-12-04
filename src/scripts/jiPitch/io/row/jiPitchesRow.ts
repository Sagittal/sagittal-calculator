import {Count, Exponent, Max, Maybe, Prime, Row} from "../../../../general"
import {CommaAnalysis, CommaClassId, PotentiallyCommaAnalysis} from "../../../../sagittal"
import {computeNotatingCommasRow} from "./notatingCommasRow"
import {compute23FreeClassRow} from "./two3FreeClassRow"

const computeJiPitchesRow = (
    potentiallyCommaAnalysis: PotentiallyCommaAnalysis,
    maybeCommaClassId: Maybe<CommaClassId>,
    maxMonzoLength: Max<Count<Exponent<Prime>>>,
): Row<{of: CommaAnalysis}> => {
    return [
        ...computeNotatingCommasRow(potentiallyCommaAnalysis, maybeCommaClassId, maxMonzoLength),
        ...compute23FreeClassRow(potentiallyCommaAnalysis.two3FreeClassAnalysis) as Row as Row<{of: CommaAnalysis}>,
    ] as Row<{of: CommaAnalysis}>
}

export {
    computeJiPitchesRow,
}
