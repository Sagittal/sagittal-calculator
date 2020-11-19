import {BLANK, Decimal, LogTarget, round, saveLog} from "../../../general"
import {
    nonRecursiveSearchScopeAndMaybeUpdateBestMetric,
    nonRecursiveSearchScopeAndMaybeUpdateBestMetricSync,
    Scope,
    SearchScopeResults,
} from "../bestMetric"
import {computeIndentation} from "./indentation"
import {computeLocalMinima} from "./localMinima"
import {searchNextLocalMin, searchNextLocalMinSync} from "./nextLocalMin"
import {LocalMin, MetricTag, RecursiveSearchScopeAndMaybeUpdateBestMetricOptions, SearchLocalMinOptions} from "./types"

const computeSearchNextLocalMinArguments = (
    scope: Scope,
    options: RecursiveSearchScopeAndMaybeUpdateBestMetricOptions = {},
    {dynamicParameters, samples, sumsOfSquares, metricName}: SearchScopeResults,
): {nextLocalMinima: LocalMin[], searchNextLocalMinOptions: SearchLocalMinOptions} => {
    const {
        depth = 0 as Decimal<{integer: true}>,
        metricTag = BLANK as MetricTag,
        localMin,
        onlyBetterThanSopfgtt = true,
    }: RecursiveSearchScopeAndMaybeUpdateBestMetricOptions = options

    const indentation = computeIndentation(depth)

    const nextLocalMinima = computeLocalMinima(samples, sumsOfSquares, localMin)
    saveLog(`${indentation}${metricTag} - ${nextLocalMinima.length} lcl min / ${samples.length} samples (${round(100 * nextLocalMinima.length / samples.length)}%)`, LogTarget.PROGRESS)

    const searchNextLocalMinOptions = {
        dynamicParameters,
        scope,
        metricTag,
        indentation,
        index: 0, // Will be overridden shortly
        depth,
        nextLocalMinima,
        onlyBetterThanSopfgtt,
        metricName,
    }

    return {nextLocalMinima, searchNextLocalMinOptions}
}

const recursiveSearchScopeAndMaybeUpdateBestMetric = async (
    scope: Scope,
    options: RecursiveSearchScopeAndMaybeUpdateBestMetricOptions = {},
): Promise<void> => {
    const searchScopeResults = await nonRecursiveSearchScopeAndMaybeUpdateBestMetric(
        scope,
        {onlyBetterThanSopfgtt: options.onlyBetterThanSopfgtt},
    )

    const {nextLocalMinima, searchNextLocalMinOptions} =
        computeSearchNextLocalMinArguments(scope, options, searchScopeResults)

    const nextLocalMinimaPromises: Array<Promise<void>> =
        nextLocalMinima.map((nextLocalMin: LocalMin, index: number): Promise<void> => {
            return searchNextLocalMin(nextLocalMin, {...searchNextLocalMinOptions, index})
        })
    await Promise.all(nextLocalMinimaPromises)
}

const recursiveSearchScopeAndMaybeUpdateBestMetricSync = (
    scope: Scope,
    options: RecursiveSearchScopeAndMaybeUpdateBestMetricOptions = {},
): void => {
    const searchScopeResults = nonRecursiveSearchScopeAndMaybeUpdateBestMetricSync(
        scope,
        {onlyBetterThanSopfgtt: options.onlyBetterThanSopfgtt},
    )

    const {nextLocalMinima, searchNextLocalMinOptions} =
        computeSearchNextLocalMinArguments(scope, options, searchScopeResults)

    nextLocalMinima.forEach((nextLocalMin: LocalMin, index: number): void => {
        searchNextLocalMinSync(nextLocalMin, {...searchNextLocalMinOptions, index})
    })
}

export {
    recursiveSearchScopeAndMaybeUpdateBestMetric,
    recursiveSearchScopeAndMaybeUpdateBestMetricSync,
}
