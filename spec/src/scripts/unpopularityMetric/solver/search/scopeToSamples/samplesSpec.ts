import {
    DynamicParameterValue,
    Parameter, ParameterValue,
    SubmetricType,
} from "../../../../../../../src/scripts/unpopularityMetric/types"
import { computeDynamicParameters } from "../../../../../../../src/scripts/unpopularityMetric/solver/search/scopeToSamples/dynamicParameters"
import { computeSamples } from "../../../../../../../src/scripts/unpopularityMetric/solver/search/scopeToSamples/samples"
import { Resolution, Span } from "../../../../../../../src/utilities/types"

describe("submetricCombinations", () => {
    it("given some submetric scopes, will return all combinations of submetrics to check", () => {
        const submetricScopes = [
            {
                [ Parameter.A ]: {
                    center: 2 as DynamicParameterValue,
                    range: 2 as Span<DynamicParameterValue>,
                    resolution: 3 as Resolution<DynamicParameterValue>,
                },
                [ Parameter.K ]: {
                    center: 0 as DynamicParameterValue,
                    range: 4 as Span<DynamicParameterValue>,
                    resolution: 2 as Resolution<DynamicParameterValue>,
                },
            },
            {
                [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPF,
                [ Parameter.A ]: {
                    center: 1.5 as DynamicParameterValue,
                    range: 2 as Span<DynamicParameterValue>,
                    resolution: 2 as Resolution<DynamicParameterValue>,
                },
                [ Parameter.W ]: 3.3 as ParameterValue,
            },
        ]
        const dynamicParameters = computeDynamicParameters(submetricScopes)

        const result = computeSamples({ submetricScopes, dynamicParameters })

        const expectedResult = [
            {
                submetrics: [
                    {
                        [ Parameter.A ]: 1,
                        [ Parameter.K ]: -2,
                    },
                    {
                        [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPF,
                        [ Parameter.A ]: 0.5,
                        [ Parameter.W ]: 3.3,
                    },
                ],
                samplePoint: [0, 0, 0],
            },
            {
                submetrics: [
                    {
                        [ Parameter.A ]: 1,
                        [ Parameter.K ]: -2,
                    },
                    {
                        [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPF,
                        [ Parameter.A ]: 2.5,
                        [ Parameter.W ]: 3.3,
                    },
                ],
                samplePoint: [0, 0, 1],
            },
            {
                submetrics: [
                    {
                        [ Parameter.A ]: 1,
                        [ Parameter.K ]: 2,
                    },
                    {
                        [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPF,
                        [ Parameter.A ]: 0.5,
                        [ Parameter.W ]: 3.3,
                    },
                ],
                samplePoint: [0, 1, 0],
            },
            {
                submetrics: [
                    {
                        [ Parameter.A ]: 1,
                        [ Parameter.K ]: 2,
                    },
                    {
                        [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPF,
                        [ Parameter.A ]: 2.5,
                        [ Parameter.W ]: 3.3,
                    },
                ],
                samplePoint: [0, 1, 1],
            },
            {
                submetrics: [
                    {
                        [ Parameter.A ]: 2,
                        [ Parameter.K ]: -2,
                    },
                    {
                        [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPF,
                        [ Parameter.A ]: 0.5,
                        [ Parameter.W ]: 3.3,
                    },
                ],
                samplePoint: [1, 0, 0],
            },
            {
                submetrics: [
                    {
                        [ Parameter.A ]: 2,
                        [ Parameter.K ]: -2,
                    },
                    {
                        [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPF,
                        [ Parameter.A ]: 2.5,
                        [ Parameter.W ]: 3.3,
                    },
                ],
                samplePoint: [1, 0, 1],
            },
            {
                submetrics: [
                    {
                        [ Parameter.A ]: 2,
                        [ Parameter.K ]: 2,
                    },
                    {
                        [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPF,
                        [ Parameter.A ]: 0.5,
                        [ Parameter.W ]: 3.3,
                    },
                ],
                samplePoint: [1, 1, 0],
            },
            {
                submetrics: [
                    {
                        [ Parameter.A ]: 2,
                        [ Parameter.K ]: 2,
                    },
                    {
                        [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPF,
                        [ Parameter.A ]: 2.5,
                        [ Parameter.W ]: 3.3,
                    },
                ],
                samplePoint: [1, 1, 1],
            },
            {
                submetrics: [
                    {
                        [ Parameter.A ]: 3,
                        [ Parameter.K ]: -2,
                    },
                    {
                        [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPF,
                        [ Parameter.A ]: 0.5,
                        [ Parameter.W ]: 3.3,
                    },
                ],
                samplePoint: [2, 0, 0],
            },
            {
                submetrics: [
                    {
                        [ Parameter.A ]: 3,
                        [ Parameter.K ]: -2,
                    },
                    {
                        [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPF,
                        [ Parameter.A ]: 2.5,
                        [ Parameter.W ]: 3.3,
                    },
                ],
                samplePoint: [2, 0, 1],
            },
            {
                submetrics: [
                    {
                        [ Parameter.A ]: 3,
                        [ Parameter.K ]: 2,
                    },
                    {
                        [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPF,
                        [ Parameter.A ]: 0.5,
                        [ Parameter.W ]: 3.3,
                    },
                ],
                samplePoint: [2, 1, 0],
            },
            {
                submetrics: [
                    {
                        [ Parameter.A ]: 3,
                        [ Parameter.K ]: 2,
                    },
                    {
                        [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPF,
                        [ Parameter.A ]: 2.5,
                        [ Parameter.W ]: 3.3,
                    },
                ],
                samplePoint: [2, 1, 1],
            },
        ]
        expect(result).toEqual(jasmine.arrayWithExactContents(expectedResult))
    })

    it("supports providing more than one submetric with the same submetric type", () => {
        const submetricScopes = [
            {
                [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPF,
                [ Parameter.A ]: {
                    center: 1.5 as DynamicParameterValue,
                    range: 2 as Span<DynamicParameterValue>,
                    resolution: 2 as Resolution<DynamicParameterValue>,
                },
                [ Parameter.K ]: 0.5 as ParameterValue,
            },
            {
                [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPF,
                [ Parameter.A ]: {
                    center: 1 as DynamicParameterValue,
                    range: 2 as Span<DynamicParameterValue>,
                    resolution: 2 as Resolution<DynamicParameterValue>,
                },
                [ Parameter.K ]: 0 as ParameterValue,
            },
        ]
        const dynamicParameters = computeDynamicParameters(submetricScopes)

        const result = computeSamples({ submetricScopes, dynamicParameters })

        const expectedResult = [
            {
                submetrics: [
                    {
                        [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPF,
                        [ Parameter.A ]: 0.5,
                        [ Parameter.K ]: 0.5,
                    },
                    {
                        [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPF,
                        [ Parameter.A ]: 0,
                        [ Parameter.K ]: 0,
                    },
                ],
                samplePoint: [0, 0],
            },
            {
                submetrics: [
                    {
                        [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPF,
                        [ Parameter.A ]: 0.5,
                        [ Parameter.K ]: 0.5,
                    },
                    {
                        [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPF,
                        [ Parameter.A ]: 2,
                        [ Parameter.K ]: 0,
                    },
                ],
                samplePoint: [0, 1],
            },
            {
                submetrics: [
                    {
                        [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPF,
                        [ Parameter.A ]: 2.5,
                        [ Parameter.K ]: 0.5,
                    },
                    {
                        [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPF,
                        [ Parameter.A ]: 0,
                        [ Parameter.K ]: 0,
                    },
                ],
                samplePoint: [1, 0],
            },
            {
                submetrics: [
                    {
                        [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPF,
                        [ Parameter.A ]: 2.5,
                        [ Parameter.K ]: 0.5,
                    },
                    {
                        [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPF,
                        [ Parameter.A ]: 2,
                        [ Parameter.K ]: 0,
                    },
                ],
                samplePoint: [1, 1],
            },
        ]
        expect(result).toEqual(jasmine.arrayWithExactContents(expectedResult))
    })
})
