import { BLANK, Index, Io, LogTarget, saveLog } from "../../../general"
import { checkSubmetricsForInvalidParameterCombinations } from "../sumOfSquares"
import { Sample } from "./scopeToSamples"
import { computeSumOfSquaresAndMaybeUpdateBestMetric } from "./sumOfSquares"
import { MetricName, SumsOfSquares, SumsOfSquaresAndMaybeUpdateBestMetricOptions } from "./types"

const computeSumsOfSquaresAndMaybeUpdateBestMetric = async (
    samples: Sample[],
    options: SumsOfSquaresAndMaybeUpdateBestMetricOptions = {},
): Promise<SumsOfSquares> => {
    const { indentation = BLANK, onlyWinners = true, metricName = "" as MetricName } = options

    const sumsOfSquares: SumsOfSquares = []

    return new Promise(async (resolve: (sumsOfSquares: SumsOfSquares) => void): Promise<void> => {
        try {
            checkSubmetricsForInvalidParameterCombinations(samples[ 0 ].submetrics)
        } catch (e) {
            resolve(sumsOfSquares)
            saveLog(`Not searching scope due to invalid parameter combinations: ${e.message}` as Io, LogTarget.ERRORS)

            return
        }

        const samplePromises: Promise<void>[] = samples.map((sample: Sample, index: number): Promise<void> => {
            return computeSumOfSquaresAndMaybeUpdateBestMetric(sample, {
                indentation,
                sumsOfSquares,
                index: index as Index<Sample>,
                onlyWinners,
                metricName,
            })
        })

        await Promise.all(samplePromises)
        resolve(sumsOfSquares)
    })
}

export {
    computeSumsOfSquaresAndMaybeUpdateBestMetric,
}
