import {Combination, Decimal, Ed, Index, Io, Name, Parameter, Step, Window} from "@sagittal/general"
import {Metric, SamplePoint, Scope, SumOfSquares} from "../../../../../src/scripts/popularityMetricLfc/bestMetric"
import {recursiveSearchScopeAndMaybeUpdateBestMetric} from "../../../../../src/scripts/popularityMetricLfc/perfecter"
import * as nextLocalMin from "../../../../../src/scripts/popularityMetricLfc/perfecter/nextLocalMin"
import {LocalMin, MetricTag} from "../../../../../src/scripts/popularityMetricLfc/perfecter/types"
import {PopularityParameterId, Submetric} from "../../../../../src/scripts/popularityMetricLfc/sumOfSquares"

describe("searchScopeAndMaybeUpdateBestMetric", (): void => {
    it("searches each local min", async (): Promise<void> => {
        const scope = [
            {},
            {
                [PopularityParameterId.SUM]: true,
                [PopularityParameterId.A_AS_COEFFICIENT]: {
                    center: 2 as Parameter,
                    window: 2 as Window<{of: Parameter}>,
                    ed: 3 as Ed<{of: Parameter}>,
                },
            },
            {
                [PopularityParameterId.COUNT]: true,
                [PopularityParameterId.W]: {
                    center: 1.5 as Parameter,
                    window: 2 as Window<{of: Parameter}>,
                    ed: 2 as Ed<{of: Parameter}>,
                },
                [PopularityParameterId.A_AS_COEFFICIENT]: 3.3 as Parameter,
            },
        ] as Scope
        const depth = 8 as Decimal<{integer: true}>
        const metricTag = "this is fun" as MetricTag
        const localMin = {
            sumOfSquares: 0.04 as SumOfSquares,
            samplePoint: [77, 54] as SamplePoint,
            submetrics: [] as unknown[] as Combination<Submetric>,
        }
        const onlyBetterThanSopfgtt = true
        const metricName = "{},{aAsCoefficient,count,w},{aAsCoefficient,sum}" as Name<Metric>

        spyOn(nextLocalMin, "searchNextLocalMin").and.callThrough()

        await recursiveSearchScopeAndMaybeUpdateBestMetric(scope, {
            depth,
            metricTag,
            localMin,
            onlyBetterThanSopfgtt,
        })

        const expectedNextLocalMinima = [
            {
                sumOfSquares: 0.03168127512830582 as SumOfSquares,
                samplePoint: [1, 0] as SamplePoint,
                submetrics: [
                    {
                        [PopularityParameterId.SUM]: true,
                        [PopularityParameterId.A_AS_COEFFICIENT]: 2 as Parameter,
                    },
                    {
                        [PopularityParameterId.COUNT]: true,
                        [PopularityParameterId.W]: 0.5 as Parameter,
                        [PopularityParameterId.A_AS_COEFFICIENT]: 3.3 as Parameter,
                    },
                ] as Combination<Submetric>,
            },
            {
                sumOfSquares: 0.03168127512830582 as SumOfSquares,
                samplePoint: [2, 1] as SamplePoint,
                submetrics: [
                    {
                        [PopularityParameterId.SUM]: true,
                        [PopularityParameterId.A_AS_COEFFICIENT]: 3 as Parameter,
                    },
                    {
                        [PopularityParameterId.COUNT]: true,
                        [PopularityParameterId.W]: 2.5 as Parameter,
                        [PopularityParameterId.A_AS_COEFFICIENT]: 3.3 as Parameter,
                    },
                ] as Combination<Submetric>,
            },
        ] as LocalMin[]
        const expectedIndentation = "                " as Io
        const expectedDynamicParameters = [
            {
                submetricIndex: 1 as Index<Submetric>,
                parameter: PopularityParameterId.A_AS_COEFFICIENT,
                values: [1, 2, 3] as Parameter[],
                unit: 1 as Step<{of: Parameter}>,
            },
            {
                submetricIndex: 2 as Index<Submetric>,
                parameter: PopularityParameterId.W,
                values: [0.5, 2.5] as Parameter[],
                unit: 2 as Step<{of: Parameter}>,
            },
        ]
        const expectedOptions = {
            dynamicParameters: expectedDynamicParameters,
            scope,
            metricTag,
            indentation: expectedIndentation,
            depth,
            nextLocalMinima: expectedNextLocalMinima,
            onlyBetterThanSopfgtt,
            metricName,
        }

        expect(nextLocalMin.searchNextLocalMin).toHaveBeenCalledWith(
            expectedNextLocalMinima[0],
            {...expectedOptions, index: 0},
        )
        expect(nextLocalMin.searchNextLocalMin).toHaveBeenCalledWith(
            expectedNextLocalMinima[1],
            {...expectedOptions, index: 1},
        )
    })
})
