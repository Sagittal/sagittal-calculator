import { debug } from "../../../debug"
import { computeSumOfSquaresForSubmetrics } from "../../../sumOfSquares"
import { DUMMY_CHUNK_COUNT_FOR_ONE_OFF_BEST_METRIC_FROM_SCOPE } from "../../constants"
import { bestMetricsForChunkCount } from "../../globals"
import { Sample } from "../types"
import { setSumOfSquaresAtSamplePoint } from "./setSumOfSquaresAtSamplePoint"
import { ComputeSumsOfSquaresAndPossiblyUpdateBestMetricForChunkCountAsSideEffectOptions, SumsOfSquares } from "./types"

const computeSumsOfSquaresAndPossiblyUpdateBestMetricForChunkCountAsSideEffect = (samples: Sample[], options: ComputeSumsOfSquaresAndPossiblyUpdateBestMetricForChunkCountAsSideEffectOptions = {}) => {
    const { chunkCount = DUMMY_CHUNK_COUNT_FOR_ONE_OFF_BEST_METRIC_FROM_SCOPE, indentation = "" } = options

    const sumsOfSquares: SumsOfSquares = []

    samples.forEach(sample => {
        const { submetrics, samplePoint } = sample

        const sumOfSquares = computeSumOfSquaresForSubmetrics(submetrics)

        setSumOfSquaresAtSamplePoint(sumOfSquares, sumsOfSquares, samplePoint)

        if (!bestMetricsForChunkCount[ chunkCount ] || sumOfSquares < bestMetricsForChunkCount[ chunkCount ].sumOfSquares) {
            bestMetricsForChunkCount[ chunkCount ] = { sumOfSquares, submetrics }
            if (sumOfSquares === 0) {
                computeSumOfSquaresForSubmetrics(submetrics)
                throw new Error("This sum-of-squares was 0. That's extremely unlikely and probably means there's a bug in the code and that to continue searching now would be a waste of time.")
            }

            if (debug.all || debug.newBestMetric) {
                console.log(`${indentation}new best metric for chunk count ${chunkCount}: ${JSON.stringify(bestMetricsForChunkCount[ chunkCount ])}`.green)
            }
        }
    })

    return sumsOfSquares
}

export {
    computeSumsOfSquaresAndPossiblyUpdateBestMetricForChunkCountAsSideEffect,
}
