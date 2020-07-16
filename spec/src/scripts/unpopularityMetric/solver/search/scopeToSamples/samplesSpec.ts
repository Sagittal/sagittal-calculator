import { Resolution, Span } from "../../../../../../../src/general"
import { Scope } from "../../../../../../../src/scripts/unpopularityMetric/solver"
import {
    computeDynamicParameters,
    computeSamples,
} from "../../../../../../../src/scripts/unpopularityMetric/solver/search/scopeToSamples"
import { Parameter, ParameterValue } from "../../../../../../../src/scripts/unpopularityMetric/types"

describe("submetricCombinations", () => {
    it("given some submetric scopes, will return all combinations of submetrics to check", () => {
        const scope = [
            {
                [ Parameter.A ]: {
                    center: 2 as ParameterValue,
                    span: 2 as Span<ParameterValue>,
                    resolution: 3 as Resolution<ParameterValue>,
                },
                [ Parameter.K ]: {
                    center: 0 as ParameterValue,
                    span: 4 as Span<ParameterValue>,
                    resolution: 2 as Resolution<ParameterValue>,
                },
            },
            {
                [ Parameter.COUNT ]: true,
                [ Parameter.A ]: {
                    center: 1.5 as ParameterValue,
                    span: 2 as Span<ParameterValue>,
                    resolution: 2 as Resolution<ParameterValue>,
                },
                [ Parameter.W ]: 3.3 as ParameterValue,
            },
        ] as Scope
        const dynamicParameters = computeDynamicParameters(scope)

        const result = computeSamples({ scope, dynamicParameters })

        const expectedResult = [
            {
                submetrics: [
                    {
                        [ Parameter.A ]: 1,
                        [ Parameter.K ]: -2,
                    },
                    {
                        [ Parameter.COUNT ]: true,
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
                        [ Parameter.COUNT ]: true,
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
                        [ Parameter.COUNT ]: true,
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
                        [ Parameter.COUNT ]: true,
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
                        [ Parameter.COUNT ]: true,
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
                        [ Parameter.COUNT ]: true,
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
                        [ Parameter.COUNT ]: true,
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
                        [ Parameter.COUNT ]: true,
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
                        [ Parameter.COUNT ]: true,
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
                        [ Parameter.COUNT ]: true,
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
                        [ Parameter.COUNT ]: true,
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
                        [ Parameter.COUNT ]: true,
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
        const scope = [
            {
                [ Parameter.COUNT ]: true,
                [ Parameter.A ]: {
                    center: 1.5 as ParameterValue,
                    span: 2 as Span<ParameterValue>,
                    resolution: 2 as Resolution<ParameterValue>,
                },
                [ Parameter.K ]: 0.5 as ParameterValue,
            },
            {
                [ Parameter.COUNT ]: true,
                [ Parameter.A ]: {
                    center: 1 as ParameterValue,
                    span: 2 as Span<ParameterValue>,
                    resolution: 2 as Resolution<ParameterValue>,
                },
                [ Parameter.K ]: 0 as ParameterValue,
            },
        ] as Scope
        const dynamicParameters = computeDynamicParameters(scope)

        const result = computeSamples({ scope, dynamicParameters })

        const expectedResult = [
            {
                submetrics: [
                    {
                        [ Parameter.COUNT ]: true,
                        [ Parameter.A ]: 0.5,
                        [ Parameter.K ]: 0.5,
                    },
                    {
                        [ Parameter.COUNT ]: true,
                        [ Parameter.A ]: 0,
                        [ Parameter.K ]: 0,
                    },
                ],
                samplePoint: [0, 0],
            },
            {
                submetrics: [
                    {
                        [ Parameter.COUNT ]: true,
                        [ Parameter.A ]: 0.5,
                        [ Parameter.K ]: 0.5,
                    },
                    {
                        [ Parameter.COUNT ]: true,
                        [ Parameter.A ]: 2,
                        [ Parameter.K ]: 0,
                    },
                ],
                samplePoint: [0, 1],
            },
            {
                submetrics: [
                    {
                        [ Parameter.COUNT ]: true,
                        [ Parameter.A ]: 2.5,
                        [ Parameter.K ]: 0.5,
                    },
                    {
                        [ Parameter.COUNT ]: true,
                        [ Parameter.A ]: 0,
                        [ Parameter.K ]: 0,
                    },
                ],
                samplePoint: [1, 0],
            },
            {
                submetrics: [
                    {
                        [ Parameter.COUNT ]: true,
                        [ Parameter.A ]: 2.5,
                        [ Parameter.K ]: 0.5,
                    },
                    {
                        [ Parameter.COUNT ]: true,
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
