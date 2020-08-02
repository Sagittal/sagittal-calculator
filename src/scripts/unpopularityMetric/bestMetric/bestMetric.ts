import { clearTimeout } from "timers"
import { shuffle } from "../../../general"
import { DebugTarget, debugTargets, saveDebugMessage } from "../debug"
import { searchedsForChunkCount, timeoutsForChunkCount } from "../globals"
import { DUMMY_CHUNK_COUNT_FOR_ONE_OFF_BEST_METRIC_FROM_SCOPE, MAXIMUM_SEARCH_TIME } from "./constants"
import { computeIndentation } from "./indentation"
import { computeLocalMinima } from "./localMinima"
import { searchNextLocalMinimum } from "./nextLocalMinimum"
import { computeDynamicParameters, computeSamples } from "./scopeToSamples"
import { computeSumsOfSquaresAndPossiblyUpdateBestMetricForChunkCountAsSideEffect } from "./sumsOfSquares"
import { Scope, SearchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffectOptions, SumsOfSquares } from "./types"

const searchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffect = async (scope: Scope, options: SearchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffectOptions = {}): Promise<void | Error> => {
    return new Promise(async (resolve, reject) => {
        const {
            depth = 0,
            progressMessage = "",
            localMinimum,
            chunkCount = DUMMY_CHUNK_COUNT_FOR_ONE_OFF_BEST_METRIC_FROM_SCOPE,
            recurse = false,
            deterministic = false,
            timeoutEnabled = false,
            onlyWinners = false,
        }: SearchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffectOptions = options

        const topLevelScopeTimer = { timedOut: false }
        let timeDebugger: NodeJS.Timeout | undefined
        if (debugTargets[ DebugTarget.ALL ] || debugTargets[ DebugTarget.SCOPE ]) {
            saveDebugMessage(`${JSON.stringify(scope)} - beginning search`, DebugTarget.SCOPE)

            let timeUnits = 0
            timeDebugger = setInterval(() => {
                timeUnits = timeUnits + 1
                saveDebugMessage(`${JSON.stringify(scope)} - searching for ${timeUnits}s out of max ${MAXIMUM_SEARCH_TIME / 1000}s`, DebugTarget.SCOPE)
            }, 1000)
        }

        let timer: NodeJS.Timeout | undefined
        if (timeoutEnabled) {
            timer = setTimeout(() => {
                topLevelScopeTimer.timedOut = true
                timeDebugger && clearInterval(timeDebugger)
                saveDebugMessage(`${JSON.stringify(scope)} - timed out; so far ${100 * ((timeoutsForChunkCount[ chunkCount ] || []).length + 1) / searchedsForChunkCount[ chunkCount ]}% have timed out`, DebugTarget.TIMEOUTS)
                timeoutsForChunkCount[ chunkCount ] = timeoutsForChunkCount[ chunkCount ] || []
                timeoutsForChunkCount[ chunkCount ].push(scope)

                reject()
            }, MAXIMUM_SEARCH_TIME)
        }

        const nextDepth = depth + 1

        const indentation = computeIndentation(depth)

        const dynamicParameters = computeDynamicParameters(scope)
        const samples = computeSamples({ scope, dynamicParameters })

        const sumsOfSquares: SumsOfSquares = await computeSumsOfSquaresAndPossiblyUpdateBestMetricForChunkCountAsSideEffect(samples, {
            chunkCount,
            indentation,
            onlyWinners,
        })

        const nextLocalMinima = computeLocalMinima(samples, sumsOfSquares)

        if (!deterministic) shuffle(nextLocalMinima)

        let nextLocalMinimaPromises: Promise<void>[] = nextLocalMinima.slice(0, MAXIMUM_SEARCH_TIME).map((nextLocalMinimum, index) => {
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
                topLevelScopeTimer,
                onlyWinners,
            })
        })

        await Promise.all(nextLocalMinimaPromises)
        timer && clearTimeout(timer)
        timeDebugger && clearInterval(timeDebugger)
        resolve()
    })
}

export {
    searchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffect,
}
