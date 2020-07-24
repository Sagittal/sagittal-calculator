import { deepEquals } from "../../../../../general"
import { doOnNextEventLoop } from "../../../../../general/code/doOnNextEventLoop"
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
    } = options

    if (!recurse || deepEquals(localMinimum, nextLocalMinimum)) {
        return Promise.resolve()
    }

    const nextScope: Scope = computeNextScope(nextLocalMinimum.samplePoint, dynamicParameters, scope)
    const nextProgressMessage = progressMessage + `${index + 1}/${(nextLocalMinima.length)}@depth${nextDepth} `
    if (debug.all || debug.localMinima) {
        console.log(`${indentation}${nextProgressMessage}${JSON.stringify(nextLocalMinimum)}`)
    }

    return doOnNextEventLoop(async () => {
        await searchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffect(nextScope, {
            depth: nextDepth,
            progressMessage: nextProgressMessage,
            localMinimum: nextLocalMinimum,
            chunkCount,
        })
    })
}

export {
    searchNextLocalMinimum,
}
