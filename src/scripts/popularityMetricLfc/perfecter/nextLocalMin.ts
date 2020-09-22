import { doOnNextEventLoop, Integer, Io, LogTarget, Ms, saveLog } from "../../../general"
import { Scope } from "../bestMetric"
import { computeNextScope } from "./nextScope"
import {
    recursiveSearchScopeAndMaybeUpdateBestMetric,
    recursiveSearchScopeAndMaybeUpdateBestMetricSync,
} from "./perfectMetric"
import {
    LocalMin,
    MetricTag,
    RecursiveSearchScopeAndMaybeUpdateBestMetricOptions,
    SearchLocalMinOptions,
} from "./types"

const computeRecursiveSearchScopeAndMaybeUpdateBestMetricArguments = (
    nextLocalMin: LocalMin,
    options: SearchLocalMinOptions,
): {
    nextScope: Scope,
    recursiveSearchScopeAndMaybeUpdateBestMetricOptions: RecursiveSearchScopeAndMaybeUpdateBestMetricOptions
} => {
    const {
        dynamicParameters,
        scope,
        metricTag,
        index,
        indentation,
        depth,
        nextLocalMinima,
        onlyBetterThanSopfgtt,
    } = options

    const nextDepth = depth + 1 as Integer
    const nextScope: Scope = computeNextScope(nextLocalMin.samplePoint, dynamicParameters, scope)
    const nextMetricTag = metricTag + `.${index + 1}/${(nextLocalMinima.length)}` as MetricTag
    saveLog(`  ${indentation}${nextMetricTag} - depth ${nextDepth}` as Io, LogTarget.PROGRESS)
    const recursiveSearchScopeAndMaybeUpdateBestMetricOptions = {
        depth: nextDepth,
        metricTag: nextMetricTag,
        localMin: nextLocalMin,
        onlyBetterThanSopfgtt,
    }

    return { nextScope, recursiveSearchScopeAndMaybeUpdateBestMetricOptions }
}

const searchNextLocalMin = async (nextLocalMin: LocalMin, options: SearchLocalMinOptions): Promise<void> => {
    const { nextScope, recursiveSearchScopeAndMaybeUpdateBestMetricOptions } =
        computeRecursiveSearchScopeAndMaybeUpdateBestMetricArguments(nextLocalMin, options)

    return doOnNextEventLoop(async (): Promise<void> => {
        try {
            await recursiveSearchScopeAndMaybeUpdateBestMetric(
                nextScope,
                recursiveSearchScopeAndMaybeUpdateBestMetricOptions,
            )
        } catch (e) {
            saveLog(`error when searching: ${e.message}` as Io, LogTarget.ERROR)
        }
    }, options.index as Ms)
}

const searchNextLocalMinSync = (nextLocalMin: LocalMin, options: SearchLocalMinOptions): void => {
    const { nextScope, recursiveSearchScopeAndMaybeUpdateBestMetricOptions } =
        computeRecursiveSearchScopeAndMaybeUpdateBestMetricArguments(nextLocalMin, options)

    try {
        recursiveSearchScopeAndMaybeUpdateBestMetricSync(
            nextScope,
            recursiveSearchScopeAndMaybeUpdateBestMetricOptions,
        )
    } catch (e) {
        saveLog(`error when searching: ${e.message}` as Io, LogTarget.ERROR)
    }
}

export {
    searchNextLocalMin,
    searchNextLocalMinSync,
}
