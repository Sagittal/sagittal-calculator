import { computeParameterValueIndices } from "../../../../../../src/scripts/unpopularityMetric/automator/samples/parameterValueIndices"
import { Parameter, Submetric } from "../../../../../../src/scripts/unpopularityMetric/types"
import {
    DynamicParameter,
    DynamicParameterValue,
    ParameterUnit,
    SubmetricValue,
} from "../../../../../../src/scripts/unpopularityMetric/automator/samples/types"
import { Index } from "../../../../../../src/utilities/types"

describe("computeParameterValueIndices", () => {
    it("given the dynamic parameters and a submetric point, returns an array of, in order, for each of the submetric point's parameters which is dynamic, its index in the parameter points", () => {
        const dynamicParameters: DynamicParameter[] = [
            // don't pick me at all, since I'm submetric index 0 --
            // I should have already been handled by a previous call to computeParameterValueIndices
            // i.e. already be in the array which this call's returned array will be spread onto the end of
            {
                submetricIndex: 0 as Index<Submetric>,
                parameter: Parameter.Y,
                values: [1.5, 1.2, 0.9] as DynamicParameterValue[],
                unit: 0 as ParameterUnit,
            },

            // pick from me for the first index of the returned array
            {
                submetricIndex: 1 as Index<Submetric>,
                parameter: Parameter.Y,
                values: [0.9, 0.95, 1.0, 1.05, 1.1 /* pick my index as the value */] as DynamicParameterValue[],
                unit: 0 as ParameterUnit,
            },

            // pick from me for the second index of the returned array
            {
                submetricIndex: 1 as Index<Submetric>,
                parameter: Parameter.A,
                values: [0.6, 0.63, 0.66, 0.69 /*pick my index as the value*/, 0.72] as DynamicParameterValue[],
                unit: 0 as ParameterUnit,
            },
        ]
        const submetricPoint: SubmetricValue = {
            // the order of the keys should not matter! that required a complete refactor from
            /*
                 Object.entries(submetricValue).forEach(([parameter, parameterPoint]) => {
                 const correspondingDynamicParameter = dynamicParameters.find(dynamicParameter => {
                     return dynamicParameter.submetricIndex === submetricIndex && dynamicParameter.parameter === parameter
                 })

                 if (correspondingDynamicParameter) {
                     const parameterPointIndex = correspondingDynamicParameter.values.indexOf(parameterPoint)
                     parameterPointIndices.push(parameterPointIndex)
                 }
             */
            [ Parameter.A ]: 0.69 as DynamicParameterValue,
            [ Parameter.Y ]: 1.1 as DynamicParameterValue,
        }
        const submetricIndex = 1 as Index<Submetric>

        const result = computeParameterValueIndices({
            dynamicParameters,
            submetricValue: submetricPoint,
            submetricIndex,
        })

        expect(result).toEqual([4, 3])
    })
})
