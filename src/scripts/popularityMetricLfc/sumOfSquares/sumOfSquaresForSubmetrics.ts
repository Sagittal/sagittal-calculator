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
import { Submetric, Unpopularity } from "./types"
import { computeUnpopularities } from "./unpopularities"

const computeSumOfSquaresForSubmetrics = (submetrics: Combination<Submetric>): SumOfSquares => {
    checkSubmetricsForInvalidParameterValueCombinations(submetrics)

    const popularities: Array<Ranked<Popularity>> = COMMA_POPULARITIES
        .slice(0, popularityMetricLfcScriptGroupSettings.onlyTop)

    const unpopularities = computeUnpopularities(popularities, submetrics)
    if (unpopularities.some((unpopularity: Unpopularity): boolean => !isNumber(unpopularity.antivotes))) {
        throw new Error(`One way or another had some non-numeric popularities`)
    }
    const rankedUnpopularities = addRankToUnpopularities(unpopularities)

    if (ioSettings.logTargets[ LogTarget.ALL ] || ioSettings.logTargets[ LogTarget.DETAILS ]) {
        rankedUnpopularities.forEach((rankedUnpopularity: Ranked<Unpopularity>): void => {
            saveLog(stringify(rankedUnpopularity) as Io, LogTarget.DETAILS)
        })
    }

    const sumOfSquares =
        computeSumOfSquares(rankedUnpopularities, popularities, popularityMetricLfcScriptGroupSettings.z)

    saveLog(`sum-of-squares ${sumOfSquares}` as Io, LogTarget.DETAILS)

    return sumOfSquares
}

export {
    computeSumOfSquaresForSubmetrics,
}
