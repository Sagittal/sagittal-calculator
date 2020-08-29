import {
    Combination,
    COMMA_POPULARITIES,
    IO,
    isNumber,
    LogTarget,
    logTargets,
    Popularity,
    Ranked,
    saveLog,
} from "../../../general"
import { SumOfSquares } from "../bestMetric"
import { LFC } from "../constants"
import { lfcSettings } from "../globals"
import { checkSubmetricsForInvalidParameterValueCombinations } from "./checkParameterValues"
import { addRankToUnpopularities } from "./rank"
import { computeSumOfSquares } from "./sumOfSquares"
import { Submetric } from "./types"
import { computeUnpopularities } from "./unpopularities"

const computeSumOfSquaresForSubmetrics = (submetrics: Combination<Submetric>): SumOfSquares => {
    checkSubmetricsForInvalidParameterValueCombinations(submetrics)

    const realPopularities: Array<Ranked<Popularity>> = COMMA_POPULARITIES.slice(0, lfcSettings.onlyTop)

    const unpopularities = computeUnpopularities(realPopularities, submetrics)
    if (unpopularities.some(unpopularity => !isNumber(unpopularity.antivotes))) {
        throw new Error(`One way or another had some non-numeric popularities`)
    }
    const rankedUnpopularities = addRankToUnpopularities(unpopularities)

    if (logTargets[ LogTarget.ALL ] || logTargets[ LogTarget.UNPOPULARITIES ]) {
        rankedUnpopularities.map(rankedUnpopularity => {
            saveLog(JSON.stringify(rankedUnpopularity) as IO, LogTarget.UNPOPULARITIES, LFC)
        })
    }

    const sumOfSquares = computeSumOfSquares(rankedUnpopularities, realPopularities, lfcSettings.z)

    saveLog(`sum-of-squares ${sumOfSquares}` as IO, LogTarget.SUM_OF_SQUARES, LFC)

    return sumOfSquares
}

export {
    computeSumOfSquaresForSubmetrics,
}
