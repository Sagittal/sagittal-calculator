import { deepEquals } from "../../../../../general"
import { debug } from "../../../debug"
import { Scope } from "../../types"
import { possiblyUpdateBestMetricAsSideEffect } from "./bestMetric"
import { computeNextScope } from "./nextScope"
import { LocalMinimum, Metric, SearchLocalMinimumOptions } from "./types"

const searchNextLocalMinimum = (nextLocalMinimum: LocalMinimum, options: SearchLocalMinimumOptions): Promise<Metric> => {
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

    const nextScope: Scope = computeNextScope(nextLocalMinimum.samplePoint, dynamicParameters, scope)
    const nextProgressMessage = progressMessage + `${index}/${(nextLocalMinima.length)}@depth${nextDepth} `
    if (debug.all || debug.solver) {
        console.log(`${indentation}${nextProgressMessage}${JSON.stringify(nextLocalMinimum)}`)
    }

    return new Promise(async resolve => {
        if (recurse && !deepEquals(localMinimum, nextLocalMinimum)) {
            setTimeout(async () => {
                await possiblyUpdateBestMetricAsSideEffect(nextScope, {
                    depth: nextDepth,
                    progressMessage: nextProgressMessage,
                    localMinimum: nextLocalMinimum,
                    chunkCount,
                })
                resolve()
            }, 0)
        } else {
            resolve()
        }
    })
}

export {
    searchNextLocalMinimum,
}
