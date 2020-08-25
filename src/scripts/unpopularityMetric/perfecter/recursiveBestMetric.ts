import { nonRecursiveSearchScopeAndMaybeUpdateBestMetric, Scope } from "../bestMetric"
import { DebugTarget, saveDebugMessage } from "../debug"
import { computeIndentation } from "./indentation"
import { computeLocalMinima } from "./localMinima"
import { searchNextLocalMin } from "./nextLocalMin"
import { RecursiveSearchScopeAndMaybeUpdateBestMetricOptions } from "./types"

const recursiveSearchScopeAndMaybeUpdateBestMetric = async (scope: Scope, options: RecursiveSearchScopeAndMaybeUpdateBestMetricOptions = {}): Promise<void> => {
    const {
        depth = 0,
        metricId = "",
        localMin,
        onlyWinners = true,
    }: RecursiveSearchScopeAndMaybeUpdateBestMetricOptions = options

    const indentation = computeIndentation(depth)

    const { dynamicParameters, samples, sumsOfSquares, metricName } = await nonRecursiveSearchScopeAndMaybeUpdateBestMetric(scope, { onlyWinners })

    const nextLocalMinima = computeLocalMinima(samples, sumsOfSquares, localMin)
    saveDebugMessage(`${indentation}id ${metricId} - ${nextLocalMinima.length} lcl min / ${samples.length} samples (${Math.round(100 * nextLocalMinima.length / samples.length)}%)`, DebugTarget.PERFECT)

    const nextLocalMinimaPromises: Promise<void>[] = nextLocalMinima.map((nextLocalMin, index) => {
        return searchNextLocalMin(nextLocalMin, {
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
