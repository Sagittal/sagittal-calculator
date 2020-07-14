import { Index, Unit } from "../../../../../../../src/general"
import { DynamicParameter } from "../../../../../../../src/scripts/unpopularityMetric/solver/search/scopeToSamples"
import { computeDynamicParameterValueIndices } from "../../../../../../../src/scripts/unpopularityMetric/solver/search/scopeToSamples/dynamicParameterValueIndices"
import { Parameter, ParameterValue, Submetric } from "../../../../../../../src/scripts/unpopularityMetric/types"

describe("computeDynamicParameterValueIndices", () => {
    it("given the dynamic parameters and a submetric, returns an array of, in order, for each of the dynamic parameters, its index in the parameter points", () => {
        const dynamicParameters: DynamicParameter[] = [
            // don't pick me at all, since I'm submetric index 0 --
            // I should have already been handled by a previous call to computeDynamicParameterValueIndices
            // i.e. already be in the array which this call's returned array will be spread onto the end of
            {
                submetricIndex: 0 as Index<Submetric>,
                parameter: Parameter.Y,
                values: [1.5, 1.2, 0.9] as ParameterValue[],
                unit: 0 as Unit<ParameterValue>,
            },

            // pick from me for the first index of the returned array
            {
                submetricIndex: 1 as Index<Submetric>,
                parameter: Parameter.Y,
                values: [0.9, 0.95, 1.0, 1.05, 1.1 /* pick my index as the value */] as ParameterValue[],
                unit: 0 as Unit<ParameterValue>,
            },

            // pick from me for the second index of the returned array
            {
                submetricIndex: 1 as Index<Submetric>,
                parameter: Parameter.A,
                values: [0.6, 0.63, 0.66, 0.69 /*pick my index as the value*/, 0.72] as ParameterValue[],
                unit: 0 as Unit<ParameterValue>,
            },
        ]
        const submetric: Submetric = {
            // the order of the keys should not matter! that required a complete refactor from
            /*
                 Object.entries(submetric).forEach(([parameter, dynamicParameterValue]) => {
                 const correspondingDynamicParameter = dynamicParameters.find(dynamicParameter => {
                     return dynamicParameter.submetricIndex === submetricIndex && dynamicParameter.parameter === parameter
                 })

                 if (correspondingDynamicParameter) {
                     const dynamicParameterValueIndex = correspondingDynamicParameter.values.indexOf(dynamicParameterValue)
                     dynamicParameterValueIndices.push(dynamicParameterValueIndex)
                 }
             */
            [ Parameter.A ]: 0.69 as ParameterValue,
            [ Parameter.Y ]: 1.1 as ParameterValue,
        }
        const submetricIndex = 1 as Index<Submetric>

        const result = computeDynamicParameterValueIndices({
            dynamicParameters,
            submetric,
            submetricIndex,
        })

        expect(result).toEqual([4, 3] as Index<ParameterValue>[])
    })
})
