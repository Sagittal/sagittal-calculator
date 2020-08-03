import { doOnNextEventLoop, isUndefined } from "../../../general"
import { DebugTarget, saveDebugMessage } from "../debug"
import { bestMetrics } from "../globals"
import { computeSumOfSquaresForSubmetrics } from "../sumOfSquares"
import { SUM_OF_SQUARES_TO_BEAT } from "./constants"
import { computeMetricName } from "./metricName"
import { Sample } from "./scopeToSamples"
import { setSumOfSquaresAtSamplePoint } from "./setSumOfSquaresAtSamplePoint"
import { ComputeSumOfSquaresAndMaybeUpdateBestMetricOptions, SumOfSquares } from "./types"

const computeSumOfSquaresAndMaybeUpdateBestMetric = (sample: Sample, options: ComputeSumOfSquaresAndMaybeUpdateBestMetricOptions): Promise<void> => {
    const { indentation, sumsOfSquares, index, onlyWinners } = options

    return doOnNextEventLoop(() => {
        const { submetrics, samplePoint } = sample

        let sumOfSquares
        try {
            sumOfSquares = computeSumOfSquaresForSubmetrics(submetrics)
        } catch (e) {
            saveDebugMessage(`error when computing sum of squares: ${e.message}`, DebugTarget.ERRORS)
        }

        setSumOfSquaresAtSamplePoint(sumOfSquares, sumsOfSquares, samplePoint)

        const metricName = computeMetricName(submetrics)
        if (
            !isUndefined(sumOfSquares) &&
            (
                !onlyWinners ||
                sumOfSquares <= SUM_OF_SQUARES_TO_BEAT
            ) &&
            (
                isUndefined(bestMetrics[ metricName ]) ||
                isUndefined(bestMetrics[ metricName ].sumOfSquares) ||
                sumOfSquares < (bestMetrics[ metricName ].sumOfSquares as SumOfSquares)
            )
        ) {
            bestMetrics[ metricName ] = { sumOfSquares, submetrics }
            if (sumOfSquares === 0) {
                computeSumOfSquaresForSubmetrics(submetrics)
                throw new Error("This sum-of-squares was 0. That's extremely unlikely and probably means there's a bug in the code and that to continue searching now would be a waste of time.")
            }

            saveDebugMessage(`${indentation}new best metric: ${JSON.stringify(bestMetrics[ metricName ])}`, DebugTarget.NEW_BEST_METRIC)
        }
    }, index)
}

export {
    computeSumOfSquaresAndMaybeUpdateBestMetric,
}
