import { shuffle } from "../../../general"
import { DebugTarget, saveDebugMessage } from "../debug"
import { checkSubmetricsForInvalidParameterCombinations } from "../sumOfSquares"
import { DUMMY_CHUNK_COUNT_FOR_ONE_OFF_BEST_METRIC_FROM_SCOPE, MAXIMUM_SEARCH_TIME } from "./constants"
import { Sample } from "./scopeToSamples"
import { computeSumOfSquaresAndPossiblyUpdateBestMetricForChunkCountAsSideEffect } from "./sumOfSquares"
import { ComputeSumsOfSquaresAndPossiblyUpdateBestMetricForChunkCountAsSideEffectOptions, SumsOfSquares } from "./types"

const computeSumsOfSquaresAndPossiblyUpdateBestMetricForChunkCountAsSideEffect = async (samples: Sample[], options: ComputeSumsOfSquaresAndPossiblyUpdateBestMetricForChunkCountAsSideEffectOptions = {}): Promise<SumsOfSquares> => {
    const { chunkCount = DUMMY_CHUNK_COUNT_FOR_ONE_OFF_BEST_METRIC_FROM_SCOPE, indentation = "", onlyWinners = false } = options

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
            return computeSumOfSquaresAndPossiblyUpdateBestMetricForChunkCountAsSideEffect(sample, chunkCount, indentation, sumsOfSquares, index, onlyWinners)
        })

        await Promise.all(samplePromises)
        resolve(sumsOfSquares)
    })
}

export {
    computeSumsOfSquaresAndPossiblyUpdateBestMetricForChunkCountAsSideEffect,
}
