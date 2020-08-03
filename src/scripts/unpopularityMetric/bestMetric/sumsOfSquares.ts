import { shuffle } from "../../../general"
import { DebugTarget, saveDebugMessage } from "../debug"
import { checkSubmetricsForInvalidParameterCombinations } from "../sumOfSquares"
import { MAXIMUM_SEARCH_TIME } from "./constants"
import { Sample } from "./scopeToSamples"
import { computeSumOfSquaresAndMaybeUpdateBestMetric } from "./sumOfSquares"
import { ComputeSumsOfSquaresAndMaybeUpdateBestMetricOptions, SumsOfSquares } from "./types"

const computeSumsOfSquaresAndMaybeUpdateBestMetric = async (samples: Sample[], options: ComputeSumsOfSquaresAndMaybeUpdateBestMetricOptions = {}): Promise<SumsOfSquares> => {
    const { indentation = "", onlyWinners = false } = options

    const sumsOfSquares: SumsOfSquares = []

    if (samples.length > MAXIMUM_SEARCH_TIME) {
        shuffle(samples)
    }

    return new Promise(async resolve => {
        try {
            checkSubmetricsForInvalidParameterCombinations(samples[ 0 ].submetrics)
        } catch (e) {
            resolve(sumsOfSquares)
            saveDebugMessage(`Not searching scope due to invalid parameter combinations: ${e.message}`, DebugTarget.ERRORS)
            return
        }

        const samplePromises: Promise<void>[] = samples.slice(0, MAXIMUM_SEARCH_TIME).map((sample, index) => {
            return computeSumOfSquaresAndMaybeUpdateBestMetric(sample, {
                indentation,
                sumsOfSquares,
                index,
                onlyWinners,
            })
        })

        await Promise.all(samplePromises)
        resolve(sumsOfSquares)
    })
}

export {
    computeSumsOfSquaresAndMaybeUpdateBestMetric,
}
