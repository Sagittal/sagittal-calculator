import { Combination, Index, Resolution, Span, Unit } from "../../../../../src/general"
import { MetricName, Scope, SumOfSquares } from "../../../../../src/scripts/unpopularityMetric/bestMetric"
import { SamplePoint } from "../../../../../src/scripts/unpopularityMetric/bestMetric/scopeToSamples"
import { recursiveSearchScopeAndMaybeUpdateBestMetric } from "../../../../../src/scripts/unpopularityMetric/perfecter"
import * as nextLocalMin from "../../../../../src/scripts/unpopularityMetric/perfecter/nextLocalMin"
import { LocalMin } from "../../../../../src/scripts/unpopularityMetric/perfecter/types"
import { Parameter, ParameterValue, Submetric } from "../../../../../src/scripts/unpopularityMetric/sumOfSquares"

describe("searchScopeAndMaybeUpdateBestMetric", () => {
    it("searches each local min", async () => {
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
        const metricId = "this is fun"
        const localMin = {
            sumOfSquares: 0.04 as SumOfSquares,
            samplePoint: [77, 54] as SamplePoint,
            submetrics: [] as unknown[] as Combination<Submetric>,
        }
        const onlyWinners = true
        const metricName = "{},{aAsCoefficient,count,w},{aAsCoefficient,sum}" as MetricName

        spyOn(nextLocalMin, "searchNextLocalMin").and.callThrough()

        await recursiveSearchScopeAndMaybeUpdateBestMetric(scope, {
            depth,
            metricId,
            localMin,
            onlyWinners,
        })

        const expectedNextLocalMinima = [
            {
                sumOfSquares: 0.03168127512830582 as SumOfSquares,
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
                sumOfSquares: 0.03168127512830582 as SumOfSquares,
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
        ] as LocalMin[]
        const expectedIndentation = "                "
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
            metricId,
            indentation: expectedIndentation,
            depth,
            nextLocalMinima: expectedNextLocalMinima,
            onlyWinners,
            metricName,
        }

        expect(nextLocalMin.searchNextLocalMin).toHaveBeenCalledWith(
            expectedNextLocalMinima[ 0 ],
            { ...expectedOptions, index: 0 },
        )
        expect(nextLocalMin.searchNextLocalMin).toHaveBeenCalledWith(
            expectedNextLocalMinima[ 1 ],
            { ...expectedOptions, index: 1 },
        )
    })
})
