import { BLANK, Index, Io, LogTarget, saveLog } from "../../../general"
import { LFC_SCRIPT_GROUP } from "../constants"
import { checkSubmetricsForInvalidParameterCombinations } from "../sumOfSquares"
import { Sample } from "./scopeToSamples"
import { computeSumOfSquaresAndMaybeUpdateBestMetric } from "./sumOfSquares"
import { ComputeSumsOfSquaresAndMaybeUpdateBestMetricOptions, MetricName, SumsOfSquares } from "./types"

const computeSumsOfSquaresAndMaybeUpdateBestMetric = async (
    samples: Sample[],
    options: ComputeSumsOfSquaresAndMaybeUpdateBestMetricOptions = {},
): Promise<SumsOfSquares> => {
    const { indentation = BLANK, onlyWinners = true, metricName = "" as MetricName } = options

    const sumsOfSquares: SumsOfSquares = []

    return new Promise(async resolve => {
        try {
            checkSubmetricsForInvalidParameterCombinations(samples[ 0 ].submetrics)
        } catch (e) {
            resolve(sumsOfSquares)
            saveLog(
                `Not searching scope due to invalid parameter combinations: ${e.message}` as Io,
                LogTarget.ERRORS,
                LFC_SCRIPT_GROUP,
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
