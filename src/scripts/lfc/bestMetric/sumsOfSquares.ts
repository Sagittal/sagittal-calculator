import { Index, IO, LogTarget, saveLog } from "../../../general"
import { LFC } from "../constants"
import { checkSubmetricsForInvalidParameterCombinations } from "../sumOfSquares"
import { Sample } from "./scopeToSamples"
import { computeSumOfSquaresAndMaybeUpdateBestMetric } from "./sumOfSquares"
import { ComputeSumsOfSquaresAndMaybeUpdateBestMetricOptions, MetricName, SumsOfSquares } from "./types"

const computeSumsOfSquaresAndMaybeUpdateBestMetric = async (
    samples: Sample[],
    options: ComputeSumsOfSquaresAndMaybeUpdateBestMetricOptions = {},
): Promise<SumsOfSquares> => {
    const { indentation = "" as IO, onlyWinners = true, metricName = "" as MetricName } = options

    const sumsOfSquares: SumsOfSquares = []

    return new Promise(async resolve => {
        try {
            checkSubmetricsForInvalidParameterCombinations(samples[ 0 ].submetrics)
        } catch (e) {
            resolve(sumsOfSquares)
            saveLog(
                `Not searching scope due to invalid parameter combinations: ${e.message}` as IO,
                LogTarget.ERRORS,
                LFC,
            )

            return
        }

        const samplePromises: Promise<void>[] = samples.map((sample, index) => {
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
