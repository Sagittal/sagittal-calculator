import { computeSamples } from "../../../../../../src/scripts/unpopularityMetric/automator/samples/samples"
import { computeDynamicParameters } from "../../../../../../src/scripts/unpopularityMetric/automator/samples/dynamicParameters"
import { Parameter, SubmetricConfig, SubmetricType } from "../../../../../../src/scripts/unpopularityMetric/types"
import { Combination } from "../../../../../../src/utilities/types"

describe("submetricCombinations", () => {
    it("given a metric config, will return all combinations of submetrics to check", () => {
        const submetricConfigs = [
            {
                [ Parameter.A ]: { center: 2, range: 2, resolution: 3 },
                [ Parameter.K ]: { center: 0, range: 4, resolution: 2 },
            },
            {
                [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPF,
                [ Parameter.A ]: { center: 1.5, range: 2, resolution: 2 },
                [ Parameter.W ]: 3.3,
            },
        ] as Combination<SubmetricConfig>
        const dynamicParameters = computeDynamicParameters(submetricConfigs)

        const result = computeSamples({ submetricConfigs: submetricConfigs, dynamicParameters })

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
                point: [0, 0, 0],
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
                point: [0, 0, 1],
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
                point: [0, 1, 0],
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
                point: [0, 1, 1],
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
                point: [1, 0, 0],
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
                point: [1, 0, 1],
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
                point: [1, 1, 0],
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
                point: [1, 1, 1],
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
                point: [2, 0, 0],
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
                point: [2, 0, 1],
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
                point: [2, 1, 0],
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
                point: [2, 1, 1],
            },
        ]
        expect(result).toEqual(jasmine.arrayWithExactContents(expectedResult))
    })

    it("supports providing more than one submetric with the same submetric type", () => {
        const metricConfig = [
            {
                [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPF,
                [ Parameter.A ]: { center: 1.5, range: 2, resolution: 2 },
                [ Parameter.K ]: 0.5,
            },
            {
                [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPF,
                [ Parameter.A ]: { center: 1, range: 2, resolution: 2 },
                [ Parameter.K ]: 0,
            },
        ] as Combination<SubmetricConfig>
        const dynamicParameters = computeDynamicParameters(metricConfig)

        const result = computeSamples({ submetricConfigs: metricConfig, dynamicParameters })

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
                point: [0, 0],
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
                point: [0, 1],
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
                point: [1, 0],
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
                point: [1, 1],
            },
        ]
        expect(result).toEqual(jasmine.arrayWithExactContents(expectedResult))
    })
})
