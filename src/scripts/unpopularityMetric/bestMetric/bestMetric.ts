import { clearTimeout } from "timers"
import { shuffle } from "../../../general"
import { DebugTarget, debugTargets, saveDebugMessage } from "../debug"
import { killedsForChunkCount, searchedsForChunkCount } from "../globals"
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

        const topLevelScopeHasBeenKilled = { hasBeenKilled: false }
        let timeUpdater: NodeJS.Timeout | undefined
        if (debugTargets[ DebugTarget.ALL ] || debugTargets[ DebugTarget.SCOPE ]) {
            saveDebugMessage(`${JSON.stringify(scope)} - beginning search`, DebugTarget.SCOPE)

            let timeUnits = 0
            timeUpdater = setInterval(() => {
                timeUnits = timeUnits + 1
                console.log(`${JSON.stringify(scope)} - searching for ${timeUnits}s out of max ${MAXIMUM_SEARCH_TIME / 1000}s`.yellow)
            }, 1000)
        }

        let killswitch: NodeJS.Timeout | undefined
        if (timeoutEnabled) {
            killswitch = setTimeout(() => {
                topLevelScopeHasBeenKilled.hasBeenKilled = true
                timeUpdater && clearInterval(timeUpdater)
                saveDebugMessage(`${JSON.stringify(scope)} - killed search due to hitting the max; so far ${100 * ((killedsForChunkCount[ chunkCount ] || []).length + 1) / searchedsForChunkCount[ chunkCount ]}% have been killed`, DebugTarget.KILLS)
                killedsForChunkCount[ chunkCount ] = killedsForChunkCount[ chunkCount ] || []
                killedsForChunkCount[ chunkCount ].push(scope)

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
                topLevelScopeHasBeenKilled,
                onlyWinners,
            })
        })

        await Promise.all(nextLocalMinimaPromises)
        killswitch && clearTimeout(killswitch)
        timeUpdater && clearInterval(timeUpdater)
        resolve()
    })
}

export {
    searchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffect,
}
