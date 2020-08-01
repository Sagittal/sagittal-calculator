import { Index, Resolution, Span, Unit } from "../../../../../../src/general"
import { Scope } from "../../../../../../src/scripts/unpopularityMetric/bestMetric"
import { computeDynamicParameters } from "../../../../../../src/scripts/unpopularityMetric/bestMetric/scopeToSamples"
import {
    Parameter,
    ParameterValue,
    Submetric,
} from "../../../../../../src/scripts/unpopularityMetric/sumOfSquares"

describe("computeDynamicParameters", () => {
    it("returns a flattened array of all the parameters that are dynamic -- flattened across all the submetrics, that is", () => {
        const scope: Scope = [
            {
                [ Parameter.Y ]: {
                    center: 1.2 as ParameterValue,
                    span: 1 as Span<ParameterValue>,
                    resolution: 3 as Resolution<ParameterValue>,
                },
                [ Parameter.W ]: 4 as ParameterValue,
            },
            {
                [ Parameter.COUNT ]: true,
                [ Parameter.Y ]: {
                    center: 1.0 as ParameterValue,
                    span: 0.2 as Span<ParameterValue>,
                    resolution: 2 as Resolution<ParameterValue>,
                },
                [ Parameter.A_AS_COEFFICIENT ]: {
                    center: 0.65 as ParameterValue,
                    span: 0.1 as Span<ParameterValue>,
                    resolution: 2 as Resolution<ParameterValue>,
                },
            },
        ] as Scope

        const result = computeDynamicParameters(scope)

        expect(result).toEqual([
            {
                submetricIndex: 0 as Index<Submetric>,
                parameter: Parameter.Y,
                values: [0.7, 1.2, 1.7] as ParameterValue[],
                unit: 0.5 as Unit<ParameterValue>,
            },
            {
                submetricIndex: 1 as Index<Submetric>,
                parameter: Parameter.Y,
                values: [0.9, 1.1] as ParameterValue[],
                unit: 0.2 as Unit<ParameterValue>,
            },
            {
                submetricIndex: 1 as Index<Submetric>,
                parameter: Parameter.A_AS_COEFFICIENT,
                values: [0.6, 0.7] as ParameterValue[],
                unit: 0.1 as Unit<ParameterValue>,
            },
        ])
    })
})
