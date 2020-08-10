import { nonRecursiveSearchScopeAndMaybeUpdateBestMetric, Scope } from "../bestMetric"
import { DebugTarget, saveDebugMessage } from "../debug"
import { computeIndentation } from "./indentation"
import { computeLocalMinima } from "./localMinima"
import { searchNextLocalMinimum } from "./nextLocalMinimum"
import { RecursiveSearchScopeAndMaybeUpdateBestMetricOptions } from "./types"

const recursiveSearchScopeAndMaybeUpdateBestMetric = (scope: Scope, options: RecursiveSearchScopeAndMaybeUpdateBestMetricOptions = {}) => {
    const {
        depth = 0,
        metricId = "",
        localMinimum,
        onlyWinners = true,
    }: RecursiveSearchScopeAndMaybeUpdateBestMetricOptions = options

    const indentation = computeIndentation(depth)

    const { dynamicParameters, samples, sumsOfSquares } = nonRecursiveSearchScopeAndMaybeUpdateBestMetric(scope, { onlyWinners })

    const nextLocalMinima = computeLocalMinima(samples, sumsOfSquares, localMinimum)
    saveDebugMessage(`${indentation}id ${metricId} - ${nextLocalMinima.length} lcl min / ${samples.length} samples (${Math.round(100 * nextLocalMinima.length / samples.length)}%)`, DebugTarget.PERFECT)

    nextLocalMinima.forEach((nextLocalMinimum, index) => {
        searchNextLocalMinimum(nextLocalMinimum, {
            dynamicParameters,
            scope,
            metricId,
            index,
            indentation,
            depth,
            nextLocalMinima,
            onlyWinners,
        })
    })
}

export {
    recursiveSearchScopeAndMaybeUpdateBestMetric,
}
