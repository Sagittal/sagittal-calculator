import { computeNextConfigs } from "../../../../../src/scripts/unpopularityMetric/automator/nextConfigs"
import {
    DynamicParameterConfig,
    Parameter,
    SubmetricConfig,
    SubmetricType,
} from "../../../../../src/scripts/unpopularityMetric/types"
import {
    DynamicParameter,
    DynamicParameterValue,
    ParameterUnit,
    ParameterValue,
    SamplePoint,
} from "../../../../../src/scripts/unpopularityMetric/automator/samples/types"
import { Combination, Index } from "../../../../../src/utilities/types"

describe("computeNextConfigs", () => {
    it("given a point (which has been identified as a local minimum) and the dynamic parameters, is able to tell you what the next configs should be to delve deeper in that vicinity", () => {
        const point = [1, 0, 3] as SamplePoint
        const dynamicParameters: DynamicParameter[] = [
            {
                submetricIndex: 0 as Index,
                parameter: Parameter.J,
                values: [0, 0.1, 0.2, 0.3, 0.4, 0.5] as DynamicParameterValue[],
                unit: 0.1 as ParameterUnit,
            },
            {
                submetricIndex: 0 as Index,
                parameter: Parameter.W,
                values: [0, 0.5, 1] as DynamicParameterValue[],
                unit: 0.5 as ParameterUnit,
            },
            {
                submetricIndex: 1 as Index,
                parameter: Parameter.Y,
                values: [2, 2.02, 2.04, 2.06, 2.08, 2.1] as DynamicParameterValue[],
                unit: 0.02 as ParameterUnit,
            },
        ]
        const submetricConfigs: Combination<SubmetricConfig> = [
            {
                [ Parameter.J ]: { center: 0.1, range: 0.05, resolution: 5 } as DynamicParameterConfig, // haha... it just doesn't care what your previous resolution was. well, that's why I had the top-level script point to the same constant that this module uses, to generally prevent that.
                [ Parameter.W ]: { center: 0, range: 0.25, resolution: 5 } as DynamicParameterConfig,
                [ Parameter.A ]: 2 as ParameterValue,
            },
            {
                [ Parameter.Y ]: { center: 2.06, range: 0.01, resolution: 5 },
                [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPFAR,
            },
        ] as Combination<SubmetricConfig>

        const result = computeNextConfigs(point, dynamicParameters, submetricConfigs)

        expect(result).toEqual([
            {
                [ Parameter.J ]: { center: 0.1, range: 0.06666666666666667, resolution: 2 },
                [ Parameter.W ]: { center: 0, range: 0.3333333333333333, resolution: 2 },
                [ Parameter.A ]: 2,
            },
            {
                [ Parameter.Y ]: { center: 2.06, range: 0.013333333333333332, resolution: 2 },
                [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPFAR,
            },
        ])
    })
})
