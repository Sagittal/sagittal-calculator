import {Combination, Decimal, Ed, Index, Io, Name, Step, Window} from "../../../../../src/general"
import {Metric, Scope, SumOfSquares} from "../../../../../src/scripts/popularityMetricLfc/bestMetric"
import {SamplePoint} from "../../../../../src/scripts/popularityMetricLfc/bestMetric/scopeToSamples"
import {recursiveSearchScopeAndMaybeUpdateBestMetric} from "../../../../../src/scripts/popularityMetricLfc/perfecter"
import * as nextLocalMin from "../../../../../src/scripts/popularityMetricLfc/perfecter/nextLocalMin"
import {LocalMin, MetricTag} from "../../../../../src/scripts/popularityMetricLfc/perfecter/types"
import {Parameter, Submetric} from "../../../../../src/scripts/popularityMetricLfc/sumOfSquares"
import {ParameterValue} from "../../../../../src/scripts/types"

describe("searchScopeAndMaybeUpdateBestMetric", (): void => {
    it("searches each local min", async (): Promise<void> => {
        const scope = [
            {},
            {
                [Parameter.SUM]: true,
                [Parameter.A_AS_COEFFICIENT]: {
                    center: 2 as ParameterValue,
                    window: 2 as Window<ParameterValue>,
                    ed: 3 as Ed<ParameterValue>,
                },
            },
            {
                [Parameter.COUNT]: true,
                [Parameter.W]: {
                    center: 1.5 as ParameterValue,
                    window: 2 as Window<ParameterValue>,
                    ed: 2 as Ed<ParameterValue>,
                },
                [Parameter.A_AS_COEFFICIENT]: 3.3 as ParameterValue,
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
                        [Parameter.SUM]: true,
                        [Parameter.A_AS_COEFFICIENT]: 2 as ParameterValue,
                    },
                    {
                        [Parameter.COUNT]: true,
                        [Parameter.W]: 0.5 as ParameterValue,
                        [Parameter.A_AS_COEFFICIENT]: 3.3 as ParameterValue,
                    },
                ] as Combination<Submetric>,
            },
            {
                sumOfSquares: 0.03168127512830582 as SumOfSquares,
                samplePoint: [2, 1] as SamplePoint,
                submetrics: [
                    {
                        [Parameter.SUM]: true,
                        [Parameter.A_AS_COEFFICIENT]: 3 as ParameterValue,
                    },
                    {
                        [Parameter.COUNT]: true,
                        [Parameter.W]: 2.5 as ParameterValue,
                        [Parameter.A_AS_COEFFICIENT]: 3.3 as ParameterValue,
                    },
                ] as Combination<Submetric>,
            },
        ] as LocalMin[]
        const expectedIndentation = "                " as Io
        const expectedDynamicParameters = [
            {
                submetricIndex: 1 as Index<Submetric>,
                parameter: Parameter.A_AS_COEFFICIENT,
                values: [1, 2, 3] as ParameterValue[],
                unit: 1 as Step<ParameterValue>,
            },
            {
                submetricIndex: 2 as Index<Submetric>,
                parameter: Parameter.W,
                values: [0.5, 2.5] as ParameterValue[],
                unit: 2 as Step<ParameterValue>,
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
