import { Integer, Io, LogTarget, round, saveLog } from "../../../general"
import {
    nonRecursiveSearchScopeAndMaybeUpdateBestMetric,
    nonRecursiveSearchScopeAndMaybeUpdateBestMetricSync,
    Scope,
    SearchScopeResults,
} from "../bestMetric"
import { computeIndentation } from "./indentation"
import { computeLocalMinima } from "./localMinima"
import { searchNextLocalMin, searchNextLocalMinSync } from "./nextLocalMin"
import {
    LocalMin,
    MetricTag,
    RecursiveSearchScopeAndMaybeUpdateBestMetricOptions,
    SearchLocalMinOptions,
} from "./types"

const computeSearchNextLocalMinArguments = (
    scope: Scope,
    options: RecursiveSearchScopeAndMaybeUpdateBestMetricOptions = {},
    { dynamicParameters, samples, sumsOfSquares, metricName }: SearchScopeResults,
): { nextLocalMinima: LocalMin[], searchNextLocalMinOptions: SearchLocalMinOptions } => {
    const {
        depth = 0 as Integer,
        metricTag = "" as MetricTag,
        localMin,
        onlyWinners = true,
    }: RecursiveSearchScopeAndMaybeUpdateBestMetricOptions = options

    const indentation = computeIndentation(depth)

    const nextLocalMinima = computeLocalMinima(samples, sumsOfSquares, localMin)
    saveLog(`${indentation}${metricTag} - ${nextLocalMinima.length} lcl min / ${samples.length} samples (${round(100 * nextLocalMinima.length / samples.length)}%)` as Io, LogTarget.PERFECT)

    const searchNextLocalMinOptions = {
        dynamicParameters,
        scope,
        metricTag,
        indentation,
        index: 0, // will be overridden shortly
        depth,
        nextLocalMinima,
        onlyWinners,
        metricName,
    }

    return { nextLocalMinima, searchNextLocalMinOptions }
}

const recursiveSearchScopeAndMaybeUpdateBestMetric = async (
    scope: Scope,
    options: RecursiveSearchScopeAndMaybeUpdateBestMetricOptions = {},
): Promise<void> => {
    const searchScopeResults =
        await nonRecursiveSearchScopeAndMaybeUpdateBestMetric(scope, { onlyWinners: options.onlyWinners })

    const { nextLocalMinima, searchNextLocalMinOptions } =
        computeSearchNextLocalMinArguments(scope, options, searchScopeResults)

    const nextLocalMinimaPromises: Promise<void>[] =
        nextLocalMinima.map((nextLocalMin: LocalMin, index: number): Promise<void> => {
            return searchNextLocalMin(nextLocalMin, { ...searchNextLocalMinOptions, index })
        })
    await Promise.all(nextLocalMinimaPromises)
}

const recursiveSearchScopeAndMaybeUpdateBestMetricSync = (
    scope: Scope,
    options: RecursiveSearchScopeAndMaybeUpdateBestMetricOptions = {},
): void => {
    const searchScopeResults =
        nonRecursiveSearchScopeAndMaybeUpdateBestMetricSync(scope, { onlyWinners: options.onlyWinners })

    const { nextLocalMinima, searchNextLocalMinOptions } =
        computeSearchNextLocalMinArguments(scope, options, searchScopeResults)

    nextLocalMinima.forEach((nextLocalMin: LocalMin, index: number): void => {
        searchNextLocalMinSync(nextLocalMin, { ...searchNextLocalMinOptions, index })
    })
}

export {
    recursiveSearchScopeAndMaybeUpdateBestMetric,
    recursiveSearchScopeAndMaybeUpdateBestMetricSync,
}
