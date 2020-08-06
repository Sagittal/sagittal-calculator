import { deepEquals, doOnNextEventLoop } from "../../../general"
import { DebugTarget, saveDebugMessage } from "../debug"
import { searchScopeAndMaybeUpdateBestMetric } from "./bestMetric"
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
        nextLocalMinima,
        topLevelScopeTimer,
        onlyWinners,
        timer, // todo wait a second... what's the diff between this and the topLevelScopeTimer ??? oh right, the latter is the thing which holds the boolean whether it timed out... this is the actual setTimeout thing
    } = options

    if (!recurse || deepEquals(localMinimum, nextLocalMinimum)) {
        return Promise.resolve()
    }

    return doOnNextEventLoop(async () => {
        if (topLevelScopeTimer.timedOut) {
            saveDebugMessage(`timed out: ${scope}`, DebugTarget.TIMEOUTS)
            return
        }

        const nextScope: Scope = computeNextScope(nextLocalMinimum.samplePoint, dynamicParameters, scope)
        const nextProgressMessage = progressMessage + `${index + 1}/${(nextLocalMinima.length)}@depth${nextDepth} `
        saveDebugMessage(`${indentation}${nextProgressMessage}${JSON.stringify(nextLocalMinimum)}`, DebugTarget.LOCAL_MINIMUM)

        try {
            await searchScopeAndMaybeUpdateBestMetric(nextScope, {
                depth: nextDepth,
                progressMessage: nextProgressMessage,
                localMinimum: nextLocalMinimum,
                recurse,
                onlyWinners,
                topLevelScopeTimer,
                timer,
            })
        } catch (e) {
            saveDebugMessage(`error when searching: ${e.message}`, DebugTarget.ERRORS)
        }
    }, index)
}

export {
    searchNextLocalMinimum,
}
