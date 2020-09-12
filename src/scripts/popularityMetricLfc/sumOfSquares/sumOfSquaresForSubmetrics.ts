import {
    Combination,
    COMMA_POPULARITIES,
    Io,
    ioSettings,
    isNumber,
    LogTarget,
    Popularity,
    Ranked,
    saveLog,
    stringify,
} from "../../../general"
import { SumOfSquares } from "../bestMetric"
import { popularityMetricLfcScriptGroupSettings } from "../globals"
import { checkSubmetricsForInvalidParameterValueCombinations } from "./checkParameterValues"
import { addRankToUnpopularities } from "./rank"
import { computeSumOfSquares } from "./sumOfSquares"
import { Submetric } from "./types"
import { computeUnpopularities } from "./unpopularities"

const computeSumOfSquaresForSubmetrics = (submetrics: Combination<Submetric>): SumOfSquares => {
    checkSubmetricsForInvalidParameterValueCombinations(submetrics)

    const realPopularities: Array<Ranked<Popularity>> =
        COMMA_POPULARITIES.slice(0, popularityMetricLfcScriptGroupSettings.onlyTop)

    const unpopularities = computeUnpopularities(realPopularities, submetrics)
    if (unpopularities.some(unpopularity => !isNumber(unpopularity.antivotes))) {
        throw new Error(`One way or another had some non-numeric popularities`)
    }
    const rankedUnpopularities = addRankToUnpopularities(unpopularities)

    if (ioSettings.logTargets[ LogTarget.ALL ] || ioSettings.logTargets[ LogTarget.UNPOPULARITIES ]) {
        rankedUnpopularities.map(rankedUnpopularity => {
            saveLog(stringify(rankedUnpopularity) as Io, LogTarget.UNPOPULARITIES)
        })
    }

    const sumOfSquares =
        computeSumOfSquares(rankedUnpopularities, realPopularities, popularityMetricLfcScriptGroupSettings.z)

    saveLog(`sum-of-squares ${sumOfSquares}` as Io, LogTarget.SUM_OF_SQUARES)

    return sumOfSquares
}

export {
    computeSumOfSquaresForSubmetrics,
}
