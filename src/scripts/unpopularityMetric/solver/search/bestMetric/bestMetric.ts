import { debug } from "../../../debug"
import { DUMMY_CHUNK_COUNT_FOR_ONE_OFF_BEST_METRIC_FROM_SCOPE } from "../../constants"
import { Scope } from "../../types"
import { computeDynamicParameters, computeSamples } from "../scopeToSamples"
import { computeIndentation } from "./indentation"
import { computeLocalMinima } from "./localMinima"
import { searchNextLocalMinimum } from "./nextLocalMinimum"
import { computeSumsOfSquaresAndPossiblyUpdateBestMetricForChunkCountAsSideEffect } from "./sumsOfSquares"
import { ComputeBestMetricOptions, Metric, SumsOfSquares } from "./types"

const possiblyUpdateBestMetricAsSideEffect = async (scope: Scope, options: ComputeBestMetricOptions = {}) => {
    const {
        depth = 0,
        progressMessage = "",
        localMinimum,
        recurse = true,
        chunkCount = DUMMY_CHUNK_COUNT_FOR_ONE_OFF_BEST_METRIC_FROM_SCOPE,
    }: ComputeBestMetricOptions = options

    const nextDepth = depth + 1

    const indentation = computeIndentation(depth)

    const dynamicParameters = computeDynamicParameters(scope)
    const samples = computeSamples({ scope, dynamicParameters })

    const sumsOfSquares: SumsOfSquares = computeSumsOfSquaresAndPossiblyUpdateBestMetricForChunkCountAsSideEffect(samples, chunkCount, indentation)

    if (debug.all || debug.solver) {
        console.log(`\n${indentation}local minima:`)
    }
    const nextLocalMinima = computeLocalMinima(samples, sumsOfSquares)

    const nextLocalMinimaPromises: Promise<Metric>[] = nextLocalMinima.map((nextLocalMinimum, index) => {
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
            nextLocalMinima
        })
    })

    await Promise.all(nextLocalMinimaPromises)
}

export {
    possiblyUpdateBestMetricAsSideEffect,
}
