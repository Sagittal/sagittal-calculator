import { nonRecursiveSearchScopeAndMaybeUpdateBestMetric, Scope } from "../bestMetric"
import { DebugTarget, saveDebugMessage } from "../debug"
import { computeIndentation } from "./indentation"
import { computeLocalMinima } from "./localMinima"
import { searchNextLocalMinimum } from "./nextLocalMinimum"
import { RecursiveSearchScopeAndMaybeUpdateBestMetricOptions } from "./types"

const recursiveSearchScopeAndMaybeUpdateBestMetric = async (scope: Scope, options: RecursiveSearchScopeAndMaybeUpdateBestMetricOptions = {}): Promise<void> => {
    const {
        depth = 0,
        metricId = "",
        localMinimum,
        onlyWinners = true,
    }: RecursiveSearchScopeAndMaybeUpdateBestMetricOptions = options

    const indentation = computeIndentation(depth)

    const { dynamicParameters, samples, sumsOfSquares, metricName } = await nonRecursiveSearchScopeAndMaybeUpdateBestMetric(scope, { onlyWinners })

    const nextLocalMinima = computeLocalMinima(samples, sumsOfSquares, localMinimum)
    saveDebugMessage(`${indentation}id ${metricId} - ${nextLocalMinima.length} lcl min / ${samples.length} samples (${Math.round(100 * nextLocalMinima.length / samples.length)}%)`, DebugTarget.PERFECT)

    const nextLocalMinimaPromises: Promise<void>[] = nextLocalMinima.map((nextLocalMinimum, index) => {
        return searchNextLocalMinimum(nextLocalMinimum, {
            dynamicParameters,
            scope,
            metricId,
            index,
            indentation,
            depth,
            nextLocalMinima,
            onlyWinners,
            metricName,
        })
    })

    await Promise.all(nextLocalMinimaPromises)
}

export {
    recursiveSearchScopeAndMaybeUpdateBestMetric,
}
