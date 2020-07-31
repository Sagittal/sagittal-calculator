import { DUMMY_CHUNK_COUNT_FOR_ONE_OFF_BEST_METRIC_FROM_SCOPE } from "../../constants"
import { Sample } from "../types"
import { ComputeSumsOfSquaresAndPossiblyUpdateBestMetricForChunkCountAsSideEffectOptions, SumsOfSquares } from "./types"
import { computeSumOfSquaresAndPossiblyUpdateBestMetricForChunkCountAsSideEffect } from "./sumOfSquares"
import { MAXIMUM_SEARCH_TIME } from "./constants"
import { debug } from "../../../debug"
import { checkSubmetricsForInvalidParameterCombinations } from "../../../sumOfSquares"
import { shuffle } from "../../../../../general/code/shuffle"

const computeSumsOfSquaresAndPossiblyUpdateBestMetricForChunkCountAsSideEffect = async (samples: Sample[], options: ComputeSumsOfSquaresAndPossiblyUpdateBestMetricForChunkCountAsSideEffectOptions = {}): Promise<SumsOfSquares> => {
    const { chunkCount = DUMMY_CHUNK_COUNT_FOR_ONE_OFF_BEST_METRIC_FROM_SCOPE, indentation = "" } = options

    const sumsOfSquares: SumsOfSquares = []

    if (samples.length > MAXIMUM_SEARCH_TIME) {
        shuffle(samples)
    }

    return new Promise(async resolve => {
        try {
            checkSubmetricsForInvalidParameterCombinations(samples[ 0 ].submetrics)
        } catch(e) {
            resolve(sumsOfSquares)
            if (debug.all || debug.errors) console.log(`Not searching scope due to invalid parameter combinations: ${e.message}`.red)
            return
        }

        const samplePromises: Promise<void>[] = samples.slice(0, MAXIMUM_SEARCH_TIME).map((sample, index) => {
            return computeSumOfSquaresAndPossiblyUpdateBestMetricForChunkCountAsSideEffect(sample, chunkCount, indentation, sumsOfSquares, index, samples.length)
        })

        await Promise.all(samplePromises)
        resolve(sumsOfSquares)
    })
}

export {
    computeSumsOfSquaresAndPossiblyUpdateBestMetricForChunkCountAsSideEffect,
}
