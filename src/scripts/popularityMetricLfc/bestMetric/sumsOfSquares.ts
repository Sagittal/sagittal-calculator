import { BLANK, Index, isUndefined, LogTarget, Maybe, Name, saveLog } from "../../../general"
import { checkSubmetricsForInvalidParameterCombinations } from "../sumOfSquares"
import { Sample } from "./scopeToSamples"
import {
    computeSumOfSquaresAndMaybeUpdateBestMetric,
    computeSumOfSquaresAndMaybeUpdateBestMetricSync,
} from "./sumOfSquares"
import {
    Metric,
    SumOfSquaresAndMaybeUpdateBestMetricOptions,
    SumsOfSquares,
    SumsOfSquaresAndMaybeUpdateBestMetricOptions,
} from "./types"

const computeNextOptions = (
    samples: Sample[],
    options: SumsOfSquaresAndMaybeUpdateBestMetricOptions = {},
    sumsOfSquares: SumsOfSquares,
): Maybe<SumOfSquaresAndMaybeUpdateBestMetricOptions> => {
    const {
        indentation = BLANK,
        onlyBetterThanSopfgtt = true,
        metricName = "" as Name<Metric>,
        spreadDynamicParameters,
    } = options

    try {
        checkSubmetricsForInvalidParameterCombinations(samples[ 0 ].submetrics)
    } catch (e) {
        saveLog(`Not searching scope due to invalid parameter combinations: ${e.message}`, LogTarget.ERROR)
        return
    }

    return {
        spreadDynamicParameters,
        indentation,
        onlyBetterThanSopfgtt,
        metricName,
        sumsOfSquares,
        index: 0 as Index<Sample>, // Will be overridden shortly
    }
}

const computeSumsOfSquaresAndMaybeUpdateBestMetric = async (
    samples: Sample[],
    options: SumsOfSquaresAndMaybeUpdateBestMetricOptions = {},
): Promise<SumsOfSquares> => {
    const sumsOfSquares: SumsOfSquares = []

    const nextOptions = computeNextOptions(samples, options, sumsOfSquares)
    if (isUndefined(nextOptions)) {
        return sumsOfSquares
    }

    return new Promise(async (resolve: (sumsOfSquares: SumsOfSquares) => void): Promise<void> => {
        const samplePromises: Array<Promise<void>> = samples.map((sample: Sample, index: number): Promise<void> => {
            return computeSumOfSquaresAndMaybeUpdateBestMetric(sample, {
                ...nextOptions,
                index: index as Index<Sample>,
            })
        })

        await Promise.all(samplePromises)
        resolve(sumsOfSquares)
    })
}

const computeSumsOfSquaresAndMaybeUpdateBestMetricSync = (
    samples: Sample[],
    options: SumsOfSquaresAndMaybeUpdateBestMetricOptions = {},
): SumsOfSquares => {
    const sumsOfSquares: SumsOfSquares = []

    const nextOptions = computeNextOptions(samples, options, sumsOfSquares)
    if (isUndefined(nextOptions)) {
        return sumsOfSquares
    }

    samples.forEach((sample: Sample, index: number): void => {
        computeSumOfSquaresAndMaybeUpdateBestMetricSync(sample, {
            ...nextOptions,
            index: index as Index<Sample>,
        })
    })

    return sumsOfSquares
}

export {
    computeSumsOfSquaresAndMaybeUpdateBestMetric,
    computeSumsOfSquaresAndMaybeUpdateBestMetricSync,
}
