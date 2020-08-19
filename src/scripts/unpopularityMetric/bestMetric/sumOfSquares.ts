import { doOnNextEventLoop, isUndefined } from "../../../general"
import { DebugTarget, saveDebugMessage } from "../debug"
import { bestMetrics } from "../globals"
import { computeSumOfSquaresForSubmetrics } from "../sumOfSquares"
import { SUM_OF_SQUARES_TO_BEAT } from "./constants"
import { Sample } from "./scopeToSamples"
import { setSumOfSquaresAtSamplePoint } from "./setSumOfSquaresAtSamplePoint"
import { ComputeSumOfSquaresAndMaybeUpdateBestMetricOptions, Metric, SumOfSquares } from "./types"

const computeSumOfSquaresAndMaybeUpdateBestMetric = (sample: Sample, options: ComputeSumOfSquaresAndMaybeUpdateBestMetricOptions): Promise<void> => {
    const { indentation, sumsOfSquares, index, onlyWinners, spreadDynamicParameters, metricName } = options

    return doOnNextEventLoop(() => {
        const { submetrics, samplePoint } = sample

        let sumOfSquares
        try {
            sumOfSquares = computeSumOfSquaresForSubmetrics(submetrics)
        } catch (e) {
            saveDebugMessage(`error when computing sum of squares: ${e.message}`, DebugTarget.ERRORS)
        }

        setSumOfSquaresAtSamplePoint(sumOfSquares, sumsOfSquares, samplePoint)

        if (
            !isUndefined(sumOfSquares) &&
            (
                !onlyWinners ||
                sumOfSquares <= SUM_OF_SQUARES_TO_BEAT
            ) &&
            (
                isUndefined(bestMetrics.get(metricName)) ||
                isUndefined((bestMetrics.get(metricName) as Metric).sumOfSquares) ||
                sumOfSquares < ((bestMetrics.get(metricName) as Metric).sumOfSquares as SumOfSquares)
            )
        ) {
            const metric: Metric = spreadDynamicParameters ?
                { sumOfSquares, submetrics, name: metricName, spreadDynamicParameters } :
                { sumOfSquares, submetrics, name: metricName }

            bestMetrics.set(metricName, metric)

            saveDebugMessage(`${indentation}new best metric: ${JSON.stringify(bestMetrics.get(metricName))}`, DebugTarget.NEW_BEST_METRIC)
        }
    }, index)
}

export {
    computeSumOfSquaresAndMaybeUpdateBestMetric,
}
