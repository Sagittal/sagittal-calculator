import { Combination, Count, Sum } from "../../../../../../../src/general"
import {
    bestMetricsForChunkCount,
    Chunk,
    DUMMY_CHUNK_COUNT_FOR_ONE_OFF_BEST_METRIC_FROM_SCOPE,
} from "../../../../../../../src/scripts/unpopularityMetric/solver"
import { computeSumsOfSquaresAndPossiblyUpdateBestMetricForChunkCountAsSideEffect } from "../../../../../../../src/scripts/unpopularityMetric/solver/search/bestMetric/sumsOfSquares"
import { SumsOfSquares } from "../../../../../../../src/scripts/unpopularityMetric/solver/search/bestMetric/types"
import { SamplePoint } from "../../../../../../../src/scripts/unpopularityMetric/solver/search/types"
import { Parameter, ParameterValue, Submetric } from "../../../../../../../src/scripts/unpopularityMetric/types"

describe("computeSumsOfSquaresAndPossiblyUpdateBestMetricForChunkCountAsSideEffect", () => {
    const chunkCount = 3 as Count<Chunk>
    const samples = [
        {
            samplePoint: [0, 0] as SamplePoint,
            submetrics: [{
                [ Parameter.SUM ]: true,
                [ Parameter.A_AS_COEFFICIENT ]: 1 as ParameterValue,
                [ Parameter.W ]: 0.5 as ParameterValue,
            }] as Combination<Submetric>,
        },
        {
            samplePoint: [0, 1] as SamplePoint,
            submetrics: [{
                [ Parameter.SUM ]: true,
                [ Parameter.A_AS_COEFFICIENT ]: 2 as ParameterValue,
                [ Parameter.W ]: 0.5 as ParameterValue,
            }] as Combination<Submetric>,
        },
        {
            samplePoint: [1, 0] as SamplePoint,
            submetrics: [{
                [ Parameter.SUM ]: true,
                [ Parameter.A_AS_COEFFICIENT ]: 1 as ParameterValue,
                [ Parameter.W ]: 1.5 as ParameterValue,
            }] as Combination<Submetric>,
        },
        {
            samplePoint: [1, 1] as SamplePoint,
            submetrics: [{
                [ Parameter.SUM ]: true,
                [ Parameter.A_AS_COEFFICIENT ]: 2 as ParameterValue,
                [ Parameter.W ]: 1.5 as ParameterValue,
            }] as Combination<Submetric>,
        },
    ]

    it("runs without error", async () => {
        const result = await computeSumsOfSquaresAndPossiblyUpdateBestMetricForChunkCountAsSideEffect(samples)

        expect(result).toEqual([
            [
                0.013989168754342854 as Sum<"SquaredWeightedRankDifferences">,
                0.014131740093722655 as Sum<"SquaredWeightedRankDifferences">,
            ],
            [
                0.031710642770840390 as Sum<"SquaredWeightedRankDifferences">,
                0.013983040590027893 as Sum<"SquaredWeightedRankDifferences">, // best!
            ],
        ] as SumsOfSquares)
    })

    it("works when the best metric for the chunk count has not yet been set", async () => {
        delete bestMetricsForChunkCount[ chunkCount ]

        await computeSumsOfSquaresAndPossiblyUpdateBestMetricForChunkCountAsSideEffect(samples, { chunkCount })

        expect(bestMetricsForChunkCount[ chunkCount ]).toEqual({
            sumOfSquares: 0.013983040590027893 as Sum<"SquaredWeightedRankDifferences">,
            submetrics: [{
                [ Parameter.SUM ]: true,
                [ Parameter.A_AS_COEFFICIENT ]: 2 as ParameterValue,
                [ Parameter.W ]: 1.5 as ParameterValue,
            }] as Combination<Submetric>,
        })
    })

    it("sets the best metric when it beats it", async () => {
        bestMetricsForChunkCount[ chunkCount ] = {
            sumOfSquares: 0.01400000000000 as Sum<"SquaredWeightedRankDifferences">,
            submetrics: [{}] as Combination<Submetric>,
        }

        await computeSumsOfSquaresAndPossiblyUpdateBestMetricForChunkCountAsSideEffect(samples, { chunkCount })

        expect(bestMetricsForChunkCount[ chunkCount ]).toEqual({
            sumOfSquares: 0.013983040590027893 as Sum<"SquaredWeightedRankDifferences">,
            submetrics: [{
                [ Parameter.SUM ]: true,
                [ Parameter.A_AS_COEFFICIENT ]: 2 as ParameterValue,
                [ Parameter.W ]: 1.5 as ParameterValue,
            }] as Combination<Submetric>,
        })
    })

    it("does not set the best metric when it does not beat it", async () => {
        bestMetricsForChunkCount[ chunkCount ] = {
            sumOfSquares: 0.01200000000000 as Sum<"SquaredWeightedRankDifferences">,
            submetrics: [{}] as Combination<Submetric>,
        }

        await computeSumsOfSquaresAndPossiblyUpdateBestMetricForChunkCountAsSideEffect(samples, { chunkCount })

        expect(bestMetricsForChunkCount[ chunkCount ]).toEqual({
            sumOfSquares: 0.01200000000000 as Sum<"SquaredWeightedRankDifferences">,
            submetrics: [{}] as Combination<Submetric>,
        })
    })

    it("falls back to a chunk count of zero", async () => {
        delete bestMetricsForChunkCount[ DUMMY_CHUNK_COUNT_FOR_ONE_OFF_BEST_METRIC_FROM_SCOPE ]

        await computeSumsOfSquaresAndPossiblyUpdateBestMetricForChunkCountAsSideEffect(samples)

        expect(bestMetricsForChunkCount[ DUMMY_CHUNK_COUNT_FOR_ONE_OFF_BEST_METRIC_FROM_SCOPE ]).toEqual({
            sumOfSquares: 0.013983040590027893 as Sum<"SquaredWeightedRankDifferences">,
            submetrics: [{
                [ Parameter.SUM ]: true,
                [ Parameter.A_AS_COEFFICIENT ]: 2 as ParameterValue,
                [ Parameter.W ]: 1.5 as ParameterValue,
            }] as Combination<Submetric>,
        })
    })

    // TODO: test shuffling

    // TODO: test rejecting if example one's parameter combinations are invalid
})
