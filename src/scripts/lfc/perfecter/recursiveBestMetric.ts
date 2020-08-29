import { Integer, IO, LogTarget, round, saveLog } from "../../../general"
import { nonRecursiveSearchScopeAndMaybeUpdateBestMetric, Scope } from "../bestMetric"
import { LFC } from "../constants"
import { computeIndentation } from "./indentation"
import { computeLocalMinima } from "./localMinima"
import { searchNextLocalMin } from "./nextLocalMin"
import { MetricTag, RecursiveSearchScopeAndMaybeUpdateBestMetricOptions } from "./types"

const recursiveSearchScopeAndMaybeUpdateBestMetric = async (
    scope: Scope,
    options: RecursiveSearchScopeAndMaybeUpdateBestMetricOptions = {},
): Promise<void> => {
    const {
        depth = 0 as Integer,
        metricTag = "" as MetricTag,
        localMin,
        onlyWinners = true,
    }: RecursiveSearchScopeAndMaybeUpdateBestMetricOptions = options

    const indentation = computeIndentation(depth)

    const { dynamicParameters, samples, sumsOfSquares, metricName } =
        await nonRecursiveSearchScopeAndMaybeUpdateBestMetric(scope, { onlyWinners })

    const nextLocalMinima = computeLocalMinima(samples, sumsOfSquares, localMin)
    saveLog(`${indentation}id ${metricTag} - ${nextLocalMinima.length} lcl min / ${samples.length} samples (${round(100 * nextLocalMinima.length / samples.length)}%)` as IO, LogTarget.PERFECT, LFC)

    const nextLocalMinimaPromises: Promise<void>[] = nextLocalMinima.map((nextLocalMin, index) => {
        return searchNextLocalMin(nextLocalMin, {
            dynamicParameters,
            scope,
            metricTag,
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
