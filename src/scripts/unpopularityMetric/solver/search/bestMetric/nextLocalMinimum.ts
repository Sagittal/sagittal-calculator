import { deepEquals, doOnNextEventLoop } from "../../../../../general"
import { debug } from "../../../debug"
import { Scope } from "../../types"
import { searchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffect } from "./bestMetric"
import { computeNextScope } from "./nextScope"
import { LocalMinimum, SearchLocalMinimumOptions } from "./types"

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
    } = options

    if (!recurse || deepEquals(localMinimum, nextLocalMinimum)) {
        return Promise.resolve()
    }

    return doOnNextEventLoop(async () => {
        if (topLevelScopeHasBeenKilled.hasBeenKilled) {
            if (debug.all || debug.kills) console.log(`Killed: ${scope}`.red)
            return
        }

        const nextScope: Scope = computeNextScope(nextLocalMinimum.samplePoint, dynamicParameters, scope)
        const nextProgressMessage = progressMessage + `${index + 1}/${(nextLocalMinima.length)}@depth${nextDepth} `
        if (debug.all || debug.localMinima) {
            console.log(`${indentation}${nextProgressMessage}${JSON.stringify(nextLocalMinimum)}`)
        }

        try {
            await searchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffect(nextScope, {
                depth: nextDepth,
                progressMessage: nextProgressMessage,
                localMinimum: nextLocalMinimum,
                chunkCount,
                recurse,
            })
        } catch (e) {
            if (debug.all || debug.errors) console.log(`Error when searching: ${e.message}`.red)
        }
    }, index)
}

export {
    searchNextLocalMinimum,
}
