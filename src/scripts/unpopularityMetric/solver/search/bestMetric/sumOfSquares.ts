import { Sample } from "../types"
import { Count, isUndefined, Sum } from "../../../../../general"
import { Chunk } from "../../types"
import { SumsOfSquares } from "./types"
import { doOnNextEventLoop } from "../../../../../general/code/doOnNextEventLoop"
import { computeSumOfSquaresForSubmetrics } from "../../../sumOfSquares"
import { setSumOfSquaresAtSamplePoint } from "./setSumOfSquaresAtSamplePoint"
import { bestMetricsForChunkCount } from "../../globals"
import { debug } from "../../../debug"

const computeSumOfSquaresAndPossiblyUpdateBestMetricForChunkCountAsSideEffect = (sample: Sample, chunkCount: Count<Chunk>, indentation: string, sumsOfSquares: SumsOfSquares, index: number): Promise<void> => {
    return doOnNextEventLoop(() => {
        const { submetrics, samplePoint } = sample

        let sumOfSquares
        try {
            sumOfSquares = computeSumOfSquaresForSubmetrics(submetrics)
        } catch (e) {
            if (debug.all || debug.errors) console.log(`Err: ${e.message}`.red)
        }

        setSumOfSquaresAtSamplePoint(sumOfSquares, sumsOfSquares, samplePoint)

        if (!bestMetricsForChunkCount[ chunkCount ] || (!isUndefined(sumOfSquares) && !isUndefined(bestMetricsForChunkCount[ chunkCount ].sumOfSquares) && sumOfSquares < (bestMetricsForChunkCount[ chunkCount ].sumOfSquares as Sum<"SquaredWeightedRankDifferences">))) {
            bestMetricsForChunkCount[ chunkCount ] = { sumOfSquares, submetrics }
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
