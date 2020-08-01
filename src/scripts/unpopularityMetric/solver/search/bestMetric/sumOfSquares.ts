import { Count, doOnNextEventLoop, isUndefined, Sum } from "../../../../../general"
import { debug } from "../../../debug"
import { computeSumOfSquaresForSubmetrics } from "../../../sumOfSquares"
import { bestMetricsForChunkCount } from "../../globals"
import { Chunk } from "../../types"
import { Sample } from "../types"
import { setSumOfSquaresAtSamplePoint } from "./setSumOfSquaresAtSamplePoint"
import { SumsOfSquares } from "./types"
import { computeMetricName } from "./metricName"
import { SUM_OF_SQUARES_TO_BEAT } from "./constants"

const computeSumOfSquaresAndPossiblyUpdateBestMetricForChunkCountAsSideEffect = (sample: Sample, chunkCount: Count<Chunk>, indentation: string, sumsOfSquares: SumsOfSquares, index: number, onlyWinners: boolean): Promise<void> => {
    return doOnNextEventLoop(() => {
        const { submetrics, samplePoint } = sample

        let sumOfSquares
        try {
            sumOfSquares = computeSumOfSquaresForSubmetrics(submetrics)
        } catch (e) {
            if (debug.all || debug.errors) console.log(`Err: ${e.message}`.red)
        }

        setSumOfSquaresAtSamplePoint(sumOfSquares, sumsOfSquares, samplePoint)

        const metricName = computeMetricName(submetrics)
        if (
            !isUndefined(sumOfSquares) &&
            (
                !onlyWinners ||
                sumOfSquares <= SUM_OF_SQUARES_TO_BEAT
            ) &&
            (
                isUndefined(bestMetricsForChunkCount[ chunkCount ]) ||
                isUndefined(bestMetricsForChunkCount[ chunkCount ][ metricName ]) ||
                isUndefined(bestMetricsForChunkCount[ chunkCount ][ metricName ].sumOfSquares) ||
                sumOfSquares < (bestMetricsForChunkCount[ chunkCount ][ metricName ].sumOfSquares as Sum<"SquaredWeightedRankDifferences">)
            )
        ) {
            bestMetricsForChunkCount[ chunkCount ] = bestMetricsForChunkCount[ chunkCount ] || {}
            bestMetricsForChunkCount[ chunkCount ][ metricName ] = { sumOfSquares, submetrics }
            if (sumOfSquares === 0) {
                computeSumOfSquaresForSubmetrics(submetrics)
                throw new Error("This sum-of-squares was 0. That's extremely unlikely and probably means there's a bug in the code and that to continue searching now would be a waste of time.")
            }

            if (debug.all || debug.newBestMetric) {
                console.log(`${indentation}new best metric for chunk count ${chunkCount}: ${JSON.stringify(bestMetricsForChunkCount[ chunkCount ])}`.green)
            }
        }
    }, index)
}

export {
    computeSumOfSquaresAndPossiblyUpdateBestMetricForChunkCountAsSideEffect,
}
