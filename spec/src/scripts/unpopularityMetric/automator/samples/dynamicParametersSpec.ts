import { computeDynamicParameters } from "../../../../../../src/scripts/unpopularityMetric/automator/samples/dynamicParameters"
import { Parameter, SubmetricConfig, SubmetricType } from "../../../../../../src/scripts/unpopularityMetric/types"
import {
    DynamicParameterValue,
    ParameterUnit,
} from "../../../../../../src/scripts/unpopularityMetric/automator/samples/types"
import { Combination, Index } from "../../../../../../src/utilities/types"

describe("computeDynamicParameters", () => {
    it("returns a flattened array of all the parameters that are dynamic -- flattened across all the submetrics, that is", () => {
        const submetricConfigs: Combination<SubmetricConfig> = [
            {
                [ Parameter.Y ]: { center: 1.2, range: 1, resolution: 3 },
                [ Parameter.W ]: 4,
            },
            {
                [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPF,
                [ Parameter.Y ]: { center: 1.0, range: 0.2, resolution: 2 },
                [ Parameter.A ]: { center: 0.65, range: 0.1, resolution: 2 },
            },
        ] as Combination<SubmetricConfig>

        const result = computeDynamicParameters(submetricConfigs)

        expect(result).toEqual([
            {
                submetricIndex: 0 as Index,
                parameter: Parameter.Y,
                values: [0.7, 1.2, 1.7] as DynamicParameterValue[],
                unit: 0.5 as ParameterUnit,
            },
            {
                submetricIndex: 1 as Index,
                parameter: Parameter.Y,
                values: [0.9, 1.1] as DynamicParameterValue[],
                unit: 0.2 as ParameterUnit,
            },
            {
                submetricIndex: 1 as Index,
                parameter: Parameter.A,
                values: [0.6, 0.7] as DynamicParameterValue[],
                unit: 0.1 as ParameterUnit,
            },
        ])
    })
})
