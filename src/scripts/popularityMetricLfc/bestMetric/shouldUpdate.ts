import { isUndefined } from "../../../general"
import { SUM_OF_SQUARES_TO_BEAT } from "./constants"
import { Metric, ShouldUpdateBestMetricOptions, SumOfSquares } from "./types"

const shouldUpdateBestMetric = (
    { bestMetric, sumOfSquares, onlyBetterThanSopfgtt }: ShouldUpdateBestMetricOptions,
): boolean => {
    return !isUndefined(sumOfSquares) &&
        (
            !onlyBetterThanSopfgtt ||
            sumOfSquares <= SUM_OF_SQUARES_TO_BEAT
        ) &&
        (
            isUndefined(bestMetric) ||
            isUndefined((bestMetric as Metric).sumOfSquares) ||
            sumOfSquares < ((bestMetric as Metric).sumOfSquares as SumOfSquares)
        )
}

export {
    shouldUpdateBestMetric,
}
