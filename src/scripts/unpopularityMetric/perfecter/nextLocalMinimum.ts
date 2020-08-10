import { doOnNextEventLoop } from "../../../general"
import { Scope } from "../bestMetric"
import { DebugTarget, saveDebugMessage } from "../debug"
import { computeNextScope } from "./nextScope"
import { recursiveSearchScopeAndMaybeUpdateBestMetric } from "./recursiveBestMetric"
import { LocalMinimum, SearchLocalMinimumOptions } from "./types"

const searchNextLocalMinimum = (nextLocalMinimum: LocalMinimum, options: SearchLocalMinimumOptions): Promise<void> => {
    const {
        dynamicParameters,
        scope,
        metricId,
        index,
        indentation,
        depth,
        nextLocalMinima,
        onlyWinners,
    } = options

    const nextDepth = depth + 1
    const nextScope: Scope = computeNextScope(nextLocalMinimum.samplePoint, dynamicParameters, scope)
    const nextMetricId = metricId + `.${index + 1}/${(nextLocalMinima.length)}`
    saveDebugMessage(`  ${indentation}id ${nextMetricId} - depth ${nextDepth}`, DebugTarget.PERFECT)

    return doOnNextEventLoop(async () => {
        try {
            await recursiveSearchScopeAndMaybeUpdateBestMetric(nextScope, {
                depth: nextDepth,
                metricId: nextMetricId,
                localMinimum: nextLocalMinimum,
                onlyWinners,
            })
        } catch (e) {
            saveDebugMessage(`error when searching: ${e.message}`, DebugTarget.ERRORS)
        }
    }, index)
}

export {
    searchNextLocalMinimum,
}
