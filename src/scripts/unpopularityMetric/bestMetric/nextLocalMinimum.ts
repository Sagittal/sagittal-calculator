import { deepEquals, doOnNextEventLoop } from "../../../general"
import { saveLog } from "../debug"
import { DebugTarget } from "../types"
import { searchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffect } from "./bestMetric"
import { computeNextScope } from "./nextScope"
import { LocalMinimum, Scope, SearchLocalMinimumOptions } from "./types"

const searchNextLocalMinimum = (nextLocalMinimum: LocalMinimum, options: SearchLocalMinimumOptions): Promise<void> => {
    const {
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
    } = options

    if (!recurse || deepEquals(localMinimum, nextLocalMinimum)) {
        return Promise.resolve()
    }

    return doOnNextEventLoop(async () => {
        if (topLevelScopeHasBeenKilled.hasBeenKilled) {
            saveLog(`Killed: ${scope}`, DebugTarget.KILLS)
            return
        }

        const nextScope: Scope = computeNextScope(nextLocalMinimum.samplePoint, dynamicParameters, scope)
        const nextProgressMessage = progressMessage + `${index + 1}/${(nextLocalMinima.length)}@depth${nextDepth} `
        saveLog(`${indentation}${nextProgressMessage}${JSON.stringify(nextLocalMinimum)}`, DebugTarget.LOCAL_MINIMUM)

        try {
            await searchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffect(nextScope, {
                depth: nextDepth,
                progressMessage: nextProgressMessage,
                localMinimum: nextLocalMinimum,
                chunkCount,
                recurse,
                onlyWinners,
            })
        } catch (e) {
            saveLog(`Error when searching: ${e.message}`, DebugTarget.ERRORS)
        }
    }, index)
}

export {
    searchNextLocalMinimum,
}
