import { doOnNextEventLoop, Io, LogTarget, Ms, saveLog, stringify } from "../../../general"
import { bestMetrics } from "../globals"
import { computeSumOfSquaresForSubmetrics } from "../sumOfSquares"
import { Sample } from "./scopeToSamples"
import { setSumOfSquaresAtSamplePoint } from "./setSumOfSquaresAtSamplePoint"
import { shouldUpdateBestMetric } from "./shouldUpdate"
import { Metric, SumOfSquaresAndMaybeUpdateBestMetricOptions } from "./types"

const computeSumOfSquaresAndMaybeUpdateBestMetricSync = (
    sample: Sample,
    options: SumOfSquaresAndMaybeUpdateBestMetricOptions,
): void => {
    const { submetrics, samplePoint } = sample
    const { indentation, sumsOfSquares, onlyBetterThanSopfgtt, spreadDynamicParameters, metricName } = options

    let sumOfSquares
    try {
        sumOfSquares = computeSumOfSquaresForSubmetrics(submetrics)
    } catch (e) {
        saveLog(`error when computing sum of squares: ${e.message}`, LogTarget.ERROR)
    }
    setSumOfSquaresAtSamplePoint(sumOfSquares, sumsOfSquares, samplePoint)

    const bestMetric = bestMetrics.get(metricName)
    if (
        shouldUpdateBestMetric({ sumOfSquares, bestMetric, onlyBetterThanSopfgtt })
    ) {
        const metric: Metric = spreadDynamicParameters ?
            { sumOfSquares, submetrics, name: metricName, spreadDynamicParameters } :
            { sumOfSquares, submetrics, name: metricName }

        bestMetrics.set(metricName, metric)

        saveLog(
            `${indentation}new best metric: ${stringify(bestMetric)}` as Io,
            LogTarget.RESULT,
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
