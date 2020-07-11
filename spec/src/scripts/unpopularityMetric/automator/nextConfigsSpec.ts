import { computeNextConfigs } from "../../../../../src/scripts/unpopularityMetric/automator/nextConfigs"
import {
    DynamicParameter,
    Parameter, SubmetricConfig,
    SubmetricType,
} from "../../../../../src/scripts/unpopularityMetric/types"
import { Point } from "../../../../../src/scripts/unpopularityMetric/automator/types"
import { ParameterPoint } from "../../../../../src/scripts/unpopularityMetric/submetricCombinations/types"
import { Combination } from "../../../../../src/utilities/types"

describe("computeNextConfigs", () => {
    it("given a point (which has been identified as a local minimum) and the dynamic parameters, is able to tell you what the next configs should be to delve deeper in that vicinity", () => {
        const point = [1, 0, 3] as Point
        const dynamicParameters: DynamicParameter[] = [
            {
                submetricIndex: 0,
                parameter: Parameter.J,
                parameterPoints: [0, 0.1, 0.2, 0.3, 0.4, 0.5] as ParameterPoint[],
                unit: 0.1,
            },
            { submetricIndex: 0, parameter: Parameter.W, parameterPoints: [0, 0.5, 1] as ParameterPoint[], unit: 0.5 },
            {
                submetricIndex: 1,
                parameter: Parameter.Y,
                parameterPoints: [2, 2.02, 2.04, 2.06, 2.08, 2.1] as ParameterPoint[],
                unit: 0.02,
            },
        ]
        const submetricConfigs: Combination<SubmetricConfig> = [
            {
                [ Parameter.J ]: { center: 0.1, range: 0.05, count: 5 }, // haha... it just doesn't care what your previous count was. well, that's why I had the top-level script point to the same constant that this module uses, to generally prevent that.
                [ Parameter.W ]: { center: 0, range: 0.25, count: 5 },
                [ Parameter.A ]: 2,
            },
            {
                [ Parameter.Y ]: { center: 2.06, range: 0.01, count: 5 },
                [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPFAR,
            },
        ] as Combination<SubmetricConfig>

        const result = computeNextConfigs(point, dynamicParameters, submetricConfigs)

        expect(result).toEqual([
            {
                [ Parameter.J ]: { center: 0.1, range: 0.06666666666666667, count: 2 },
                [ Parameter.W ]: { center: 0, range: 0.3333333333333333, count: 2 },
                [ Parameter.A ]: 2,
            },
            {
                [ Parameter.Y ]: { center: 2.06, range: 0.013333333333333332, count: 2 },
                [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPFAR,
            },
        ])
    })
})
