import {
    Combination,
    COMMA_POPULARITIES,
    ioSettings,
    isNumber,
    LogTarget,
    Ranked,
    saveLog,
    ScalaPopularityStat,
    stringify,
} from "../../../general"
import {SumOfSquares} from "../bestMetric"
import {popularityMetricLfcScriptGroupSettings} from "../globals"
import {checkSubmetricsForInvalidParameterValueCombinations} from "./checkParameterValues"
import {addRankToUnpopularities} from "./rank"
import {computeSumOfSquares} from "./sumOfSquares"
import {LfcUnpopularityEstimate, Submetric} from "./types"
import {computeUnpopularities} from "./unpopularities"

const computeSumOfSquaresForSubmetrics = (submetrics: Combination<Submetric>): SumOfSquares => {
    checkSubmetricsForInvalidParameterValueCombinations(submetrics)

    const popularities: Array<Ranked<ScalaPopularityStat>> = COMMA_POPULARITIES
        .slice(0, popularityMetricLfcScriptGroupSettings.onlyTop)

    const unpopularities = computeUnpopularities(popularities, submetrics)
    if (unpopularities.some((unpopularity: LfcUnpopularityEstimate): boolean => !isNumber(unpopularity.antivotes))) {
        throw new Error(`One way or another had some non-numeric popularities`)
    }
    const rankedUnpopularities = addRankToUnpopularities(unpopularities)

    if (ioSettings.logTargets[LogTarget.ALL] || ioSettings.logTargets[LogTarget.DETAILS]) {
        rankedUnpopularities.forEach((rankedUnpopularity: Ranked<LfcUnpopularityEstimate>): void => {
            saveLog(stringify(rankedUnpopularity), LogTarget.DETAILS)
        })
    }

    const sumOfSquares =
        computeSumOfSquares(rankedUnpopularities, popularities, popularityMetricLfcScriptGroupSettings.z)

    saveLog(`sum-of-squares ${sumOfSquares}`, LogTarget.DETAILS)

    return sumOfSquares
}

export {
    computeSumOfSquaresForSubmetrics,
}
