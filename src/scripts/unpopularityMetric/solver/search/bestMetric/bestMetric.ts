import { debug } from "../../../debug"
import { DUMMY_CHUNK_COUNT_FOR_ONE_OFF_BEST_METRIC_FROM_SCOPE } from "../../constants"
import { Scope } from "../../types"
import { computeDynamicParameters, computeSamples } from "../scopeToSamples"
import { computeIndentation } from "./indentation"
import { computeLocalMinima } from "./localMinima"
import { searchNextLocalMinimum } from "./nextLocalMinimum"
import { computeSumsOfSquaresAndPossiblyUpdateBestMetricForChunkCountAsSideEffect } from "./sumsOfSquares"
import { SearchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffectOptions, SumsOfSquares } from "./types"
import { MAXIMUM_SEARCH_TIME } from "./constants"
import { clearTimeout } from "timers"
import { killedsForChunkCount, searchedsForChunkCount } from "../../globals"
import { shuffle } from "../../../../../general/code/shuffle"

const searchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffect = async (scope: Scope, options: SearchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffectOptions = {}): Promise<void | Error> => {
    return new Promise(async (resolve, reject) => {
        const {
            depth = 0,
            progressMessage = "",
            localMinimum,
            recurse = true,
            chunkCount = DUMMY_CHUNK_COUNT_FOR_ONE_OFF_BEST_METRIC_FROM_SCOPE,
            deterministic = false,
            timeoutEnabled,
        }: SearchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffectOptions = options

        const topLevelScopeHasBeenKilled = { hasBeenKilled: false }
        let timeUpdater: NodeJS.Timeout | undefined
        if (debug.all || debug.scope) {
            console.log(`${JSON.stringify(scope)} - beginning search`.yellow)

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
                if ((debug.all || debug.scope) && depth === 0) {
                    console.log(`${JSON.stringify(scope)} - killed search due to hitting the max; so far ${100 * ((killedsForChunkCount[chunkCount] || []).length + 1) / searchedsForChunkCount[chunkCount]}% have been killed`.red)
                }
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
