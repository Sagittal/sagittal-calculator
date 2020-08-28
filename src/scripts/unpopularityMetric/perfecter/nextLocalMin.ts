import { doOnNextEventLoop, Integer, IO, Ms } from "../../../general"
import { Scope } from "../bestMetric"
import { DebugTarget, saveDebugMessage } from "../debug"
import { computeNextScope } from "./nextScope"
import { recursiveSearchScopeAndMaybeUpdateBestMetric } from "./recursiveBestMetric"
import { LocalMin, MetricTag, SearchLocalMinOptions } from "./types"

const searchNextLocalMin = (nextLocalMin: LocalMin, options: SearchLocalMinOptions): Promise<void> => {
    const {
        dynamicParameters,
        scope,
        metricTag,
        index,
        indentation,
        depth,
        nextLocalMinima,
        onlyWinners,
    } = options

    const nextDepth = depth + 1 as Integer
    const nextScope: Scope = computeNextScope(nextLocalMin.samplePoint, dynamicParameters, scope)
    const nextMetricTag = metricTag + `.${index + 1}/${(nextLocalMinima.length)}` as MetricTag
    saveDebugMessage(`  ${indentation}id ${nextMetricTag} - depth ${nextDepth}` as IO, DebugTarget.PERFECT)

    return doOnNextEventLoop(async () => {
        try {
            await recursiveSearchScopeAndMaybeUpdateBestMetric(nextScope, {
                depth: nextDepth,
                metricTag: nextMetricTag,
                localMin: nextLocalMin,
                onlyWinners,
            })
        } catch (e) {
            saveDebugMessage(`error when searching: ${e.message}` as IO, DebugTarget.ERRORS)
        }
    }, index as Ms)
}

export {
    searchNextLocalMin,
}
