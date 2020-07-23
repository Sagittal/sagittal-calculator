import { Combination, Count, Index, Resolution, Span, Sum, Unit } from "../../../../../../../src/general"
import { Chunk, Scope } from "../../../../../../../src/scripts/unpopularityMetric/solver"
import { searchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffect } from "../../../../../../../src/scripts/unpopularityMetric/solver/search/bestMetric"
import * as nextLocalMinimum
    from "../../../../../../../src/scripts/unpopularityMetric/solver/search/bestMetric/nextLocalMinimum"
import { LocalMinimum } from "../../../../../../../src/scripts/unpopularityMetric/solver/search/bestMetric/types"
import { SamplePoint } from "../../../../../../../src/scripts/unpopularityMetric/solver/search/types"
import { Parameter, ParameterValue, Submetric } from "../../../../../../../src/scripts/unpopularityMetric/types"

describe("searchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffect", () => {
    it("searches each local minimum", () => {
        const scope = [
            {
                [ Parameter.SUM ]: true,
                [ Parameter.A ]: {
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
                [ Parameter.A ]: 3.3 as ParameterValue,
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
        const chunkCount = 5 as Count<Chunk>

        spyOn(nextLocalMinimum, "searchNextLocalMinimum").and.callThrough()

        searchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffect(scope, {
            depth,
            progressMessage,
            localMinimum,
            recurse,
            chunkCount,
        })

        const expectedNextLocalMinima = [
            {
                sumOfSquares: 0.03168127512830582 as Sum<"SquaredWeightedRankDifferences">,
                samplePoint: [1, 0] as SamplePoint,
                submetrics: [
                    {
                        [ Parameter.SUM ]: true,
                        [ Parameter.A ]: 2 as ParameterValue,
                    },
                    {
                        [ Parameter.COUNT ]: true,
                        [ Parameter.W ]: 0.5 as ParameterValue,
                        [ Parameter.A ]: 3.3 as ParameterValue,
                    },
                ] as Combination<Submetric>,
            },
            {
                sumOfSquares: 0.03168127512830582 as Sum<"SquaredWeightedRankDifferences">,
                samplePoint: [2, 1] as SamplePoint,
                submetrics: [
                    {
                        [ Parameter.SUM ]: true,
                        [ Parameter.A ]: 3 as ParameterValue,
                    },
                    {
                        [ Parameter.COUNT ]: true,
                        [ Parameter.W ]: 2.5 as ParameterValue,
                        [ Parameter.A ]: 3.3 as ParameterValue,
                    },
                ] as Combination<Submetric>,
            },
        ] as LocalMinimum[]
        const expectedIndentation = "                "
        const expectedNextDepth = 9
        const expectedDynamicParameters = [
            {
                submetricIndex: 0 as Index<Submetric>,
                parameter: Parameter.A,
                values: [1, 2, 3] as ParameterValue[],
                unit: 1 as Unit<ParameterValue>,
            },
            {
                submetricIndex: 1 as Index<Submetric>,
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
})
