import {
    DynamicParameterValue,
    Parameter, Submetric,
    SubmetricScope, SubmetricType,
} from "../../../../../../../src/scripts/unpopularityMetric/types"
import { computeDynamicParameters } from "../../../../../../../src/scripts/unpopularityMetric/solver/search/scopeToSamples/dynamicParameters"
import { Index, Resolution, Span, Unit } from "../../../../../../../src/utilities/types"

describe("computeDynamicParameters", () => {
    it("returns a flattened array of all the parameters that are dynamic -- flattened across all the submetrics, that is", () => {
        const submetricScopes: SubmetricScope[] = [
            {
                [ Parameter.Y ]: {
                    center: 1.2 as DynamicParameterValue,
                    range: 1 as Span<DynamicParameterValue>,
                    resolution: 3 as Resolution<DynamicParameterValue>,
                },
                [ Parameter.W ]: 4 as DynamicParameterValue,
            },
            {
                [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPF,
                [ Parameter.Y ]: {
                    center: 1.0 as DynamicParameterValue,
                    range: 0.2 as Span<DynamicParameterValue>,
                    resolution: 2 as Resolution<DynamicParameterValue>,
                },
                [ Parameter.A ]: {
                    center: 0.65 as DynamicParameterValue,
                    range: 0.1 as Span<DynamicParameterValue>,
                    resolution: 2 as Resolution<DynamicParameterValue>,
                },
            },
        ]

        const result = computeDynamicParameters(submetricScopes)

        expect(result).toEqual([
            {
                submetricIndex: 0 as Index<Submetric>,
                parameter: Parameter.Y,
                values: [0.7, 1.2, 1.7] as DynamicParameterValue[],
                unit: 0.5 as Unit<DynamicParameterValue>,
            },
            {
                submetricIndex: 1 as Index<Submetric>,
                parameter: Parameter.Y,
                values: [0.9, 1.1] as DynamicParameterValue[],
                unit: 0.2 as Unit<DynamicParameterValue>,
            },
            {
                submetricIndex: 1 as Index<Submetric>,
                parameter: Parameter.A,
                values: [0.6, 0.7] as DynamicParameterValue[],
                unit: 0.1 as Unit<DynamicParameterValue>,
            },
        ])
    })
})
