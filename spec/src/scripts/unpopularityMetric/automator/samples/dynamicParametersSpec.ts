import { computeDynamicParameters } from "../../../../../../src/scripts/unpopularityMetric/automator/samples/dynamicParameters"
import {
    Parameter,
    Submetric,
    SubmetricSampleConfig,
    SubmetricType,
} from "../../../../../../src/scripts/unpopularityMetric/types"
import {
    DynamicParameterValue,
    ParameterUnit,
    SampleRange,
    SampleResolution,
} from "../../../../../../src/scripts/unpopularityMetric/automator/samples/types"
import { Index } from "../../../../../../src/utilities/types"

describe("computeDynamicParameters", () => {
    it("returns a flattened array of all the parameters that are dynamic -- flattened across all the submetrics, that is", () => {
        const submetricSampleConfigs: SubmetricSampleConfig[] = [
            {
                [ Parameter.Y ]: {
                    center: 1.2 as DynamicParameterValue,
                    range: 1 as SampleRange,
                    resolution: 3 as SampleResolution,
                },
                [ Parameter.W ]: 4 as DynamicParameterValue,
            },
            {
                [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPF,
                [ Parameter.Y ]: {
                    center: 1.0 as DynamicParameterValue,
                    range: 0.2 as SampleRange,
                    resolution: 2 as SampleResolution,
                },
                [ Parameter.A ]: {
                    center: 0.65 as DynamicParameterValue,
                    range: 0.1 as SampleRange,
                    resolution: 2 as SampleResolution,
                },
            },
        ]

        const result = computeDynamicParameters(submetricSampleConfigs)

        expect(result).toEqual([
            {
                submetricIndex: 0 as Index<Submetric>,
                parameter: Parameter.Y,
                values: [0.7, 1.2, 1.7] as DynamicParameterValue[],
                unit: 0.5 as ParameterUnit,
            },
            {
                submetricIndex: 1 as Index<Submetric>,
                parameter: Parameter.Y,
                values: [0.9, 1.1] as DynamicParameterValue[],
                unit: 0.2 as ParameterUnit,
            },
            {
                submetricIndex: 1 as Index<Submetric>,
                parameter: Parameter.A,
                values: [0.6, 0.7] as DynamicParameterValue[],
                unit: 0.1 as ParameterUnit,
            },
        ])
    })
})
