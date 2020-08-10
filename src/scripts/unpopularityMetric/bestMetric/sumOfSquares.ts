import { isUndefined } from "../../../general"
import { DebugTarget, saveDebugMessage } from "../debug"
import { bestMetrics } from "../globals"
import { computeSumOfSquaresForSubmetrics } from "../sumOfSquares"
import { SUM_OF_SQUARES_TO_BEAT } from "./constants"
import { computeMetricName } from "./metricName"
import { Sample } from "./scopeToSamples"
import { setSumOfSquaresAtSamplePoint } from "./setSumOfSquaresAtSamplePoint"
import { ComputeSumOfSquaresAndMaybeUpdateBestMetricOptions, Metric, SumOfSquares } from "./types"

const computeSumOfSquaresAndMaybeUpdateBestMetric = (sample: Sample, options: ComputeSumOfSquaresAndMaybeUpdateBestMetricOptions) => {
    const { indentation, sumsOfSquares, index, onlyWinners, spreadDynamicParameters } = options

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
        const metric: Metric = spreadDynamicParameters ?
            { sumOfSquares, submetrics, spreadDynamicParameters } :
            { sumOfSquares, submetrics }

        bestMetrics[ metricName ] = metric

        saveDebugMessage(`${indentation}new best metric: ${JSON.stringify(bestMetrics[ metricName ])}`, DebugTarget.NEW_BEST_METRIC)
    }
}

export {
    computeSumOfSquaresAndMaybeUpdateBestMetric,
}
