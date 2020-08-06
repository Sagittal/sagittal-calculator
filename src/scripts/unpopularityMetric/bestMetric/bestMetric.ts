import { clearTimeout } from "timers"
import { shuffle } from "../../../general"
import { DebugTarget, debugTargets, saveDebugMessage } from "../debug"
import { scopesTimedOut, solverStatus } from "../globals"
import { MAXIMUM_SEARCH_TIME } from "./constants"
import { computeIndentation } from "./indentation"
import { computeLocalMinima } from "./localMinima"
import { searchNextLocalMinimum } from "./nextLocalMinimum"
import { computeDynamicParameters, computeSamples } from "./scopeToSamples"
import { computeSumsOfSquaresAndMaybeUpdateBestMetric } from "./sumsOfSquares"
import { Scope, SearchScopeAndMaybeUpdateBestMetricOptions, SumsOfSquares } from "./types"

const searchScopeAndMaybeUpdateBestMetric = async (scope: Scope, options: SearchScopeAndMaybeUpdateBestMetricOptions = {}): Promise<void | Error> => {
    return new Promise(async (resolve, reject) => {
        const {
            depth = 0,
            progressMessage = "",
            localMinimum,
            recurse = false,
            deterministic = false,
            timeoutEnabled = false,
            onlyWinners = false,
            topLevelScopeTimer = { timedOut: false }, // todo really should find a way to test that this thing can now be used in recursive mode but still abort itself
            timer: topLevelTimer,
        }: SearchScopeAndMaybeUpdateBestMetricOptions = options

        let timeDebugger: NodeJS.Timeout | undefined
        if (debugTargets[ DebugTarget.ALL ] || debugTargets[ DebugTarget.SCOPE ]) {
            saveDebugMessage(`${JSON.stringify(scope)} - beginning search`, DebugTarget.SCOPE)

            let timeUnits = 0
            timeDebugger = setInterval(() => {
                timeUnits = timeUnits + 1
                saveDebugMessage(`${JSON.stringify(scope)} - searching for ${timeUnits}s out of max ${MAXIMUM_SEARCH_TIME / 1000}s`, DebugTarget.SCOPE)
            }, 1000)
        }

        let timer: NodeJS.Timeout | undefined = topLevelTimer
        if (timeoutEnabled && !timer) {
            timer = setTimeout(() => {
                topLevelScopeTimer.timedOut = true
                timeDebugger && clearInterval(timeDebugger)
                saveDebugMessage(`${JSON.stringify(scope)} - timed out; so far ${100 * (scopesTimedOut.length + 1) / solverStatus.searchedScopeCount}% have timed out`, DebugTarget.TIMEOUTS)
                scopesTimedOut.push(scope)

                reject()
            }, MAXIMUM_SEARCH_TIME)
        }

        const nextDepth = depth + 1

        const indentation = computeIndentation(depth)

        const dynamicParameters = computeDynamicParameters(scope)
        const samples = computeSamples({ scope, dynamicParameters })

        const sumsOfSquares: SumsOfSquares = await computeSumsOfSquaresAndMaybeUpdateBestMetric(samples, {
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
                nextLocalMinima,
                topLevelScopeTimer,
                onlyWinners,
                timer: timer as NodeJS.Timeout,
            })
        })

        await Promise.all(nextLocalMinimaPromises)
        timer && clearTimeout(timer)
        timeDebugger && clearInterval(timeDebugger)
        resolve()
    })
}

export {
    searchScopeAndMaybeUpdateBestMetric,
}
