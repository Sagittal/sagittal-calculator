import { computeDynamicParameters } from "../../../../../../src/scripts/unpopularityMetric/automator/samples/dynamicParameters"
import { Parameter, SubmetricConfig, SubmetricType } from "../../../../../../src/scripts/unpopularityMetric/types"
import { ParameterPoint } from "../../../../../../src/scripts/unpopularityMetric/automator/samples/types"
import { Combination } from "../../../../../../src/utilities/types"

describe("computeDynamicParameters", () => {
    it("returns a flattened array of all the parameters that are dynamic (count > 1) -- flattened across all the submetrics, that is", () => {
        const submetricConfigs: Combination<SubmetricConfig> = [
            {
                [ Parameter.Y ]: { center: 1.2, range: 1, count: 3 },
                [ Parameter.W ]: 4,
            },
            {
                [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPF,
                [ Parameter.Y ]: { center: 1.0, range: 0.2, count: 2 },
                [ Parameter.A ]: { center: 0.65, range: 0.1, count: 2 },
            },
        ] as Combination<SubmetricConfig>

        const result = computeDynamicParameters(submetricConfigs)

        expect(result).toEqual([
            { submetricIndex: 0, parameter: Parameter.Y, parameterPoints: [0.7, 1.2, 1.7] as ParameterPoint[], unit: 0.5 },
            { submetricIndex: 1, parameter: Parameter.Y, parameterPoints: [0.9, 1.1] as ParameterPoint[], unit: 0.2 },
            { submetricIndex: 1, parameter: Parameter.A, parameterPoints: [0.6, 0.7] as ParameterPoint[], unit: 0.1 },
        ])
    })
})
