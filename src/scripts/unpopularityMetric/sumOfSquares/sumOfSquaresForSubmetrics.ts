import { Combination, isNumber } from "../../../general"
import { SumOfSquares } from "../bestMetric"
import { DebugTarget, debugTargets, saveDebugMessage } from "../debug"
import { unpopularityMetricSettings } from "../globals"
import { checkSubmetricsForInvalidParameterValueCombinations } from "./checkParameterValues"
import { COMMA_POPULARITIES } from "./popularities"
import { addRankToUnpopularities } from "./rank"
import { computeSumOfSquares } from "./sumOfSquares"
import { Popularity, Submetric } from "./types"
import { computeUnpopularities } from "./unpopularities"

const computeSumOfSquaresForSubmetrics = (submetrics: Combination<Submetric>): SumOfSquares => {
    checkSubmetricsForInvalidParameterValueCombinations(submetrics)

    const realPopularities: Popularity[] = COMMA_POPULARITIES.slice(0, unpopularityMetricSettings.onlyTop)

    const unpopularities = computeUnpopularities(realPopularities, submetrics)
    if (unpopularities.some(unpopularity => !isNumber(unpopularity.antivotes))) {
        throw new Error(`One way or another had some non-numeric popularities`)
    }
    const rankedUnpopularities = addRankToUnpopularities(unpopularities)

    if (debugTargets[ DebugTarget.ALL ] || debugTargets[ DebugTarget.UNPOPULARITIES ]) {
        rankedUnpopularities.map(rankedUnpopularity => {
            saveDebugMessage(JSON.stringify(rankedUnpopularity), DebugTarget.UNPOPULARITIES)
        })
    }

    const sumOfSquares = computeSumOfSquares(rankedUnpopularities, realPopularities, unpopularityMetricSettings.z)

    saveDebugMessage(`sum-of-squares ${sumOfSquares}`, DebugTarget.SUM_OF_SQUARES)

    return sumOfSquares
}

export {
    computeSumOfSquaresForSubmetrics,
}
