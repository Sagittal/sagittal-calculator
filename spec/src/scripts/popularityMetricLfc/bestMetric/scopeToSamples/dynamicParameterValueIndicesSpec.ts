import { Index, Step } from "../../../../../../src/general"
import { DynamicParameter } from "../../../../../../src/scripts/popularityMetricLfc/bestMetric/scopeToSamples"
import { computeDynamicParameterValueIndices } from "../../../../../../src/scripts/popularityMetricLfc/bestMetric/scopeToSamples/dynamicParameterValueIndices"
import { Parameter, ParameterValue, Submetric } from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares"

describe("computeDynamicParameterValueIndices", (): void => {
    it("given the dynamic parameters and a submetric, returns an array of, in order, for each of the dynamic parameters, its index in the parameter points", (): void => {
        const dynamicParameters: DynamicParameter[] = [
            // Don't pick me at all, since I'm submetric index 0 --
            // I should have already been handled by a previous call to computeDynamicParameterValueIndices
            // I.e. already be in the array which this call's returned array will be spread onto the end of
            {
                submetricIndex: 0 as Index<Submetric>,
                parameter: Parameter.Y,
                values: [1.5, 1.2, 0.9] as ParameterValue[],
                unit: 0 as Step<ParameterValue>,
            },

            // Pick from me for the first index of the returned array
            {
                submetricIndex: 1 as Index<Submetric>,
                parameter: Parameter.Y,
                values: [0.9, 0.95, 1.0, 1.05, 1.1 /* pick my index as the value */] as ParameterValue[],
                unit: 0 as Step<ParameterValue>,
            },

            // Pick from me for the second index of the returned array
            {
                submetricIndex: 1 as Index<Submetric>,
                parameter: Parameter.A_AS_COEFFICIENT,
                values: [0.6, 0.63, 0.66, 0.69 /*pick my index as the value*/, 0.72] as ParameterValue[],
                unit: 0 as Step<ParameterValue>,
            },
        ]
        const submetric: Submetric = {
            [ Parameter.A_AS_COEFFICIENT ]: 0.69 as ParameterValue,
            [ Parameter.Y ]: 1.1 as ParameterValue,
        }
        const submetricIndex = 1 as Index<Submetric>

        const actual = computeDynamicParameterValueIndices({
            dynamicParameters,
            submetric,
            submetricIndex,
        })

        const expected = [4, 3] as Array<Index<ParameterValue>>
        expect(actual).toEqual(expected)
    })
})
