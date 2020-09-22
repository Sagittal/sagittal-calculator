import { doOnNextEventLoop, Io, isUndefined, LogTarget, Ms, saveLog, stringify } from "../../../general"
import { bestMetrics } from "../globals"
import { computeSumOfSquaresForSubmetrics } from "../sumOfSquares"
import { SUM_OF_SQUARES_TO_BEAT } from "./constants"
import { Sample } from "./scopeToSamples"
import { setSumOfSquaresAtSamplePoint } from "./setSumOfSquaresAtSamplePoint"
import { Metric, SumOfSquares, SumOfSquaresAndMaybeUpdateBestMetricOptions } from "./types"

const computeSumOfSquaresAndMaybeUpdateBestMetricSync = (
    sample: Sample,
    options: SumOfSquaresAndMaybeUpdateBestMetricOptions,
): void => {
    const { indentation, sumsOfSquares, onlyWinners, spreadDynamicParameters, metricName } = options

    const { submetrics, samplePoint } = sample

    let sumOfSquares
    try {
        sumOfSquares = computeSumOfSquaresForSubmetrics(submetrics)
    } catch (e) {
        saveLog(`error when computing sum of squares: ${e.message}` as Io, LogTarget.ERRORS)
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

        saveLog(
            `${indentation}new best metric: ${stringify(bestMetrics.get(metricName))}` as Io,
            LogTarget.NEW_BEST_METRIC,
        )
    }
}
const computeSumOfSquaresAndMaybeUpdateBestMetric = async (
    sample: Sample,
    options: SumOfSquaresAndMaybeUpdateBestMetricOptions,
): Promise<void> => {
    return doOnNextEventLoop((): void => {
        computeSumOfSquaresAndMaybeUpdateBestMetricSync(sample, options)
    }, options.index as number as Ms)
}

export {
    computeSumOfSquaresAndMaybeUpdateBestMetric,
    computeSumOfSquaresAndMaybeUpdateBestMetricSync,
}
