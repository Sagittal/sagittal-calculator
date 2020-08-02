import { Combination, Sum } from "../../../general"
import { DebugTarget, debugTargets, saveDebugMessage } from "../debug"
import { checkSubmetricsForInvalidParameterValueCombinations } from "./checkParameterValues"
import { CUT_OFF_POPULARITY, ZIPF_EXPONENT } from "./constants"
import { COMMA_POPULARITIES } from "./popularities"
import { addRankToUnpopularities } from "./rank"
import { computeSumOfSquares } from "./sumOfSquares"
import { Popularity, Submetric } from "./types"
import { computeUnpopularities } from "./unpopularities"

const computeSumOfSquaresForSubmetrics = (submetrics: Combination<Submetric>): Sum<"SquaredWeightedRankDifferences"> => {
    checkSubmetricsForInvalidParameterValueCombinations(submetrics)

    const realPopularities: Popularity[] = COMMA_POPULARITIES.slice(0, CUT_OFF_POPULARITY)

    const unpopularities = computeUnpopularities(realPopularities, submetrics)
    const rankedUnpopularities = addRankToUnpopularities(unpopularities)

    if (debugTargets[ DebugTarget.ALL ] || debugTargets[ DebugTarget.RANKED_UNPOPULARITIES ]) {
        rankedUnpopularities.map(rankedUnpopularity => {
            saveDebugMessage(JSON.stringify(rankedUnpopularity), DebugTarget.RANKED_UNPOPULARITIES)
        })
    }

    const sumOfSquares = computeSumOfSquares(rankedUnpopularities, realPopularities, ZIPF_EXPONENT)

    saveDebugMessage(`sum-of-squares ${sumOfSquares}`, DebugTarget.SUM_OF_SQUARES)

    return sumOfSquares
}

export {
    computeSumOfSquaresForSubmetrics,
}
