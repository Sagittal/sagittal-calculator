import { Combination, Count, Index, Resolution, Span, Sum, Unit } from "../../../../../src/general"
import { searchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffect } from "../../../../../src/scripts/unpopularityMetric/bestMetric"
import * as nextLocalMinimum
    from "../../../../../src/scripts/unpopularityMetric/bestMetric/nextLocalMinimum"
import { SamplePoint } from "../../../../../src/scripts/unpopularityMetric/bestMetric/scopeToSamples"
import {
    LocalMinimum, Scope,
} from "../../../../../src/scripts/unpopularityMetric/bestMetric/types"
import {
    Chunk,
} from "../../../../../src/scripts/unpopularityMetric/solver"
import { Parameter, ParameterValue, Submetric } from "../../../../../src/scripts/unpopularityMetric/sumOfSquares"

describe("searchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffect", () => {
    it("searches each local minimum", async () => {
        const scope = [
            {},
            {
                [ Parameter.SUM ]: true,
                [ Parameter.A_AS_COEFFICIENT ]: {
                    center: 2 as ParameterValue,
                    span: 2 as Span<ParameterValue>,
                    resolution: 3 as Resolution<ParameterValue>,
                },
            },
            {
                [ Parameter.COUNT ]: true,
                [ Parameter.W ]: {
                    center: 1.5 as ParameterValue,
                    span: 2 as Span<ParameterValue>,
                    resolution: 2 as Resolution<ParameterValue>,
                },
                [ Parameter.A_AS_COEFFICIENT ]: 3.3 as ParameterValue,
            },
        ] as Scope
        const depth = 8
        const progressMessage = "this is fun"
        const localMinimum = {
            sumOfSquares: 0.04 as Sum<"SquaredWeightedRankDifferences">,
            samplePoint: [77, 54] as SamplePoint,
            submetrics: [] as unknown as Combination<Submetric>,
        }
        const recurse = false
        const deterministic = true
        const onlyWinners = false
        const chunkCount = 5 as Count<Chunk>

        spyOn(nextLocalMinimum, "searchNextLocalMinimum").and.callThrough()

        await searchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffect(scope, {
            depth,
            progressMessage,
            localMinimum,
            recurse,
            chunkCount,
            deterministic,
        })

        const expectedNextLocalMinima = [
            {
                sumOfSquares: 0.03168127512830582 as Sum<"SquaredWeightedRankDifferences">,
                samplePoint: [1, 0] as SamplePoint,
                submetrics: [
                    {
                        [ Parameter.SUM ]: true,
                        [ Parameter.A_AS_COEFFICIENT ]: 2 as ParameterValue,
                    },
                    {
                        [ Parameter.COUNT ]: true,
                        [ Parameter.W ]: 0.5 as ParameterValue,
                        [ Parameter.A_AS_COEFFICIENT ]: 3.3 as ParameterValue,
                    },
                ] as Combination<Submetric>,
            },
            {
                sumOfSquares: 0.03168127512830582 as Sum<"SquaredWeightedRankDifferences">,
                samplePoint: [2, 1] as SamplePoint,
                submetrics: [
                    {
                        [ Parameter.SUM ]: true,
                        [ Parameter.A_AS_COEFFICIENT ]: 3 as ParameterValue,
                    },
                    {
                        [ Parameter.COUNT ]: true,
                        [ Parameter.W ]: 2.5 as ParameterValue,
                        [ Parameter.A_AS_COEFFICIENT ]: 3.3 as ParameterValue,
                    },
                ] as Combination<Submetric>,
            },
        ] as LocalMinimum[]
        const expectedIndentation = "                "
        const expectedNextDepth = 9
        const expectedDynamicParameters = [
            {
                submetricIndex: 1 as Index<Submetric>,
                parameter: Parameter.A_AS_COEFFICIENT,
                values: [1, 2, 3] as ParameterValue[],
                unit: 1 as Unit<ParameterValue>,
            },
            {
                submetricIndex: 2 as Index<Submetric>,
                parameter: Parameter.W,
                values: [0.5, 2.5] as ParameterValue[],
                unit: 2 as Unit<ParameterValue>,
            },
        ]
        const expectedOptions = {
            dynamicParameters: expectedDynamicParameters,
            scope,
            progressMessage,
            indentation: expectedIndentation,
            nextDepth: expectedNextDepth,
            recurse,
            localMinimum,
            chunkCount,
            nextLocalMinima: expectedNextLocalMinima,
            topLevelScopeHasBeenKilled: { hasBeenKilled: false },
            onlyWinners,
        }

        expect(nextLocalMinimum.searchNextLocalMinimum).toHaveBeenCalledWith(
            expectedNextLocalMinima[ 0 ],
            { ...expectedOptions, index: 0 },
        )
        expect(nextLocalMinimum.searchNextLocalMinimum).toHaveBeenCalledWith(
            expectedNextLocalMinima[ 1 ],
            { ...expectedOptions, index: 1 },
        )
    })

    // TODO: test killswitch

    // TODO: test timeupdater

    // TODO: test shuffling
})
