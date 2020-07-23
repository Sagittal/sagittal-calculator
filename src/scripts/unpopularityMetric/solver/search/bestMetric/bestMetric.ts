import { debug } from "../../../debug"
import { DUMMY_CHUNK_COUNT_FOR_ONE_OFF_BEST_METRIC_FROM_SCOPE } from "../../constants"
import { Scope } from "../../types"
import { computeDynamicParameters, computeSamples } from "../scopeToSamples"
import { computeIndentation } from "./indentation"
import { computeLocalMinima } from "./localMinima"
import { searchNextLocalMinimum } from "./nextLocalMinimum"
import { computeSumsOfSquaresAndPossiblyUpdateBestMetricForChunkCountAsSideEffect } from "./sumsOfSquares"
import { SearchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffectOptions, SumsOfSquares } from "./types"

const searchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffect = async (scope: Scope, options: SearchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffectOptions = {}) => {
    const {
        depth = 0,
        progressMessage = "",
        localMinimum,
        recurse = true,
        chunkCount = DUMMY_CHUNK_COUNT_FOR_ONE_OFF_BEST_METRIC_FROM_SCOPE,
    }: SearchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffectOptions = options

    const nextDepth = depth + 1

    const indentation = computeIndentation(depth)

    const dynamicParameters = computeDynamicParameters(scope)
    const samples = computeSamples({ scope, dynamicParameters })

    const sumsOfSquares: SumsOfSquares = computeSumsOfSquaresAndPossiblyUpdateBestMetricForChunkCountAsSideEffect(samples, {
        chunkCount,
        indentation,
    })

    if (debug.all || debug.localMinima) {
        console.log(`\n${indentation}local minima:`)
    }
    const nextLocalMinima = computeLocalMinima(samples, sumsOfSquares)

    const nextLocalMinimaPromises: Promise<void>[] = nextLocalMinima.map((nextLocalMinimum, index) => {
        return searchNextLocalMinimum(nextLocalMinimum, {
            dynamicParameters,
            scope,
            progressMessage,
            index,
            indentation,
            nextDepth,
            recurse,
            localMinimum,
            chunkCount,
            nextLocalMinima,
        })
    })

    await Promise.all(nextLocalMinimaPromises)
}

export {
    searchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffect,
}
