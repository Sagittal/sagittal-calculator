import {Ed, Window} from "../../../../../../src/general"
import {Scope} from "../../../../../../src/scripts/popularityMetricLfc/bestMetric"
import {
    computeDynamicParameters,
    computeSamples,
} from "../../../../../../src/scripts/popularityMetricLfc/bestMetric/scopeToSamples"
import {Parameter} from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares"
import {ParameterValue} from "../../../../../../src/scripts/types"

describe("computeSamples", (): void => {
    it("given some submetric scopes, will return all combinations of submetrics to check", (): void => {
        const scope = [
            {},
            {
                [Parameter.A_AS_COEFFICIENT]: {
                    center: 2 as ParameterValue,
                    window: 2 as Window<ParameterValue>,
                    ed: 3 as Ed<ParameterValue>,
                },
                [Parameter.K_AS_COEFFICIENT]: {
                    center: 0 as ParameterValue,
                    window: 4 as Window<ParameterValue>,
                    ed: 2 as Ed<ParameterValue>,
                },
            },
            {
                [Parameter.COUNT]: true,
                [Parameter.A_AS_COEFFICIENT]: {
                    center: 1.5 as ParameterValue,
                    window: 2 as Window<ParameterValue>,
                    ed: 2 as Ed<ParameterValue>,
                },
                [Parameter.W]: 3.3 as ParameterValue,
            },
        ] as Scope
        const dynamicParameters = computeDynamicParameters(scope)

        const actual = computeSamples({scope, dynamicParameters})

        const expected = jasmine.arrayWithExactContents([
            {
                submetrics: [
                    {
                        [Parameter.A_AS_COEFFICIENT]: 1,
                        [Parameter.K_AS_COEFFICIENT]: -2,
                    },
                    {
                        [Parameter.COUNT]: true,
                        [Parameter.A_AS_COEFFICIENT]: 0.5,
                        [Parameter.W]: 3.3,
                    },
                ],
                samplePoint: [0, 0, 0],
            },
            {
                submetrics: [
                    {
                        [Parameter.A_AS_COEFFICIENT]: 1,
                        [Parameter.K_AS_COEFFICIENT]: -2,
                    },
                    {
                        [Parameter.COUNT]: true,
                        [Parameter.A_AS_COEFFICIENT]: 2.5,
                        [Parameter.W]: 3.3,
                    },
                ],
                samplePoint: [0, 0, 1],
            },
            {
                submetrics: [
                    {
                        [Parameter.A_AS_COEFFICIENT]: 1,
                        [Parameter.K_AS_COEFFICIENT]: 2,
                    },
                    {
                        [Parameter.COUNT]: true,
                        [Parameter.A_AS_COEFFICIENT]: 0.5,
                        [Parameter.W]: 3.3,
                    },
                ],
                samplePoint: [0, 1, 0],
            },
            {
                submetrics: [
                    {
                        [Parameter.A_AS_COEFFICIENT]: 1,
                        [Parameter.K_AS_COEFFICIENT]: 2,
                    },
                    {
                        [Parameter.COUNT]: true,
                        [Parameter.A_AS_COEFFICIENT]: 2.5,
                        [Parameter.W]: 3.3,
                    },
                ],
                samplePoint: [0, 1, 1],
            },
            {
                submetrics: [
                    {
                        [Parameter.A_AS_COEFFICIENT]: 2,
                        [Parameter.K_AS_COEFFICIENT]: -2,
                    },
                    {
                        [Parameter.COUNT]: true,
                        [Parameter.A_AS_COEFFICIENT]: 0.5,
                        [Parameter.W]: 3.3,
                    },
                ],
                samplePoint: [1, 0, 0],
            },
            {
                submetrics: [
                    {
                        [Parameter.A_AS_COEFFICIENT]: 2,
                        [Parameter.K_AS_COEFFICIENT]: -2,
                    },
                    {
                        [Parameter.COUNT]: true,
                        [Parameter.A_AS_COEFFICIENT]: 2.5,
                        [Parameter.W]: 3.3,
                    },
                ],
                samplePoint: [1, 0, 1],
            },
            {
                submetrics: [
                    {
                        [Parameter.A_AS_COEFFICIENT]: 2,
                        [Parameter.K_AS_COEFFICIENT]: 2,
                    },
                    {
                        [Parameter.COUNT]: true,
                        [Parameter.A_AS_COEFFICIENT]: 0.5,
                        [Parameter.W]: 3.3,
                    },
                ],
                samplePoint: [1, 1, 0],
            },
            {
                submetrics: [
                    {
                        [Parameter.A_AS_COEFFICIENT]: 2,
                        [Parameter.K_AS_COEFFICIENT]: 2,
                    },
                    {
                        [Parameter.COUNT]: true,
                        [Parameter.A_AS_COEFFICIENT]: 2.5,
                        [Parameter.W]: 3.3,
                    },
                ],
                samplePoint: [1, 1, 1],
            },
            {
                submetrics: [
                    {
                        [Parameter.A_AS_COEFFICIENT]: 3,
                        [Parameter.K_AS_COEFFICIENT]: -2,
                    },
                    {
                        [Parameter.COUNT]: true,
                        [Parameter.A_AS_COEFFICIENT]: 0.5,
                        [Parameter.W]: 3.3,
                    },
                ],
                samplePoint: [2, 0, 0],
            },
            {
                submetrics: [
                    {
                        [Parameter.A_AS_COEFFICIENT]: 3,
                        [Parameter.K_AS_COEFFICIENT]: -2,
                    },
                    {
                        [Parameter.COUNT]: true,
                        [Parameter.A_AS_COEFFICIENT]: 2.5,
                        [Parameter.W]: 3.3,
                    },
                ],
                samplePoint: [2, 0, 1],
            },
            {
                submetrics: [
                    {
                        [Parameter.A_AS_COEFFICIENT]: 3,
                        [Parameter.K_AS_COEFFICIENT]: 2,
                    },
                    {
                        [Parameter.COUNT]: true,
                        [Parameter.A_AS_COEFFICIENT]: 0.5,
                        [Parameter.W]: 3.3,
                    },
                ],
                samplePoint: [2, 1, 0],
            },
            {
                submetrics: [
                    {
                        [Parameter.A_AS_COEFFICIENT]: 3,
                        [Parameter.K_AS_COEFFICIENT]: 2,
                    },
                    {
                        [Parameter.COUNT]: true,
                        [Parameter.A_AS_COEFFICIENT]: 2.5,
                        [Parameter.W]: 3.3,
                    },
                ],
                samplePoint: [2, 1, 1],
            },
        ])
        expect(actual).toEqual(expected)
    })

    it("supports providing more than one submetric with the same submetric type", (): void => {
        const scope = [
            {},
            {
                [Parameter.COUNT]: true,
                [Parameter.A_AS_COEFFICIENT]: {
                    center: 1.5 as ParameterValue,
                    window: 2 as Window<ParameterValue>,
                    ed: 2 as Ed<ParameterValue>,
                },
                [Parameter.K_AS_COEFFICIENT]: 0.5 as ParameterValue,
            },
            {
                [Parameter.COUNT]: true,
                [Parameter.A_AS_COEFFICIENT]: {
                    center: 1 as ParameterValue,
                    window: 2 as Window<ParameterValue>,
                    ed: 2 as Ed<ParameterValue>,
                },
                [Parameter.K_AS_COEFFICIENT]: 0 as ParameterValue,
            },
        ] as Scope
        const dynamicParameters = computeDynamicParameters(scope)

        const actual = computeSamples({scope, dynamicParameters})

        const expected = jasmine.arrayWithExactContents([
            {
                submetrics: [
                    {
                        [Parameter.COUNT]: true,
                        [Parameter.A_AS_COEFFICIENT]: 0.5,
                        [Parameter.K_AS_COEFFICIENT]: 0.5,
                    },
                    {
                        [Parameter.COUNT]: true,
                        [Parameter.A_AS_COEFFICIENT]: 0,
                        [Parameter.K_AS_COEFFICIENT]: 0,
                    },
                ],
                samplePoint: [0, 0],
            },
            {
                submetrics: [
                    {
                        [Parameter.COUNT]: true,
                        [Parameter.A_AS_COEFFICIENT]: 0.5,
                        [Parameter.K_AS_COEFFICIENT]: 0.5,
                    },
                    {
                        [Parameter.COUNT]: true,
                        [Parameter.A_AS_COEFFICIENT]: 2,
                        [Parameter.K_AS_COEFFICIENT]: 0,
                    },
                ],
                samplePoint: [0, 1],
            },
            {
                submetrics: [
                    {
                        [Parameter.COUNT]: true,
                        [Parameter.A_AS_COEFFICIENT]: 2.5,
                        [Parameter.K_AS_COEFFICIENT]: 0.5,
                    },
                    {
                        [Parameter.COUNT]: true,
                        [Parameter.A_AS_COEFFICIENT]: 0,
                        [Parameter.K_AS_COEFFICIENT]: 0,
                    },
                ],
                samplePoint: [1, 0],
            },
            {
                submetrics: [
                    {
                        [Parameter.COUNT]: true,
                        [Parameter.A_AS_COEFFICIENT]: 2.5,
                        [Parameter.K_AS_COEFFICIENT]: 0.5,
                    },
                    {
                        [Parameter.COUNT]: true,
                        [Parameter.A_AS_COEFFICIENT]: 2,
                        [Parameter.K_AS_COEFFICIENT]: 0,
                    },
                ],
                samplePoint: [1, 1],
            },
        ])
        expect(actual).toEqual(expected)
    })
})
