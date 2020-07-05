const {PARAMETER} = require("../../../../../src/scripts/unpopularityMetric/constants")
const {computeParameterPointIndices} = require("../../../../../src/scripts/unpopularityMetric/submetricCombinations/parameterPointIndices")

describe("computeParameterPointIndices", () => {
    it("given the dynamic parameters and a submetric point, returns an array of, in order, for each of the submetric point's parameters which is dynamic, its index in the parameter points", () => {
        const dynamicParameters = [
            // don't pick me at all, since I'm submetric index 0;
            // I should have already been handled by a previous call to computeParameterPointIndices
            // i.e. already be in the array which this call's returned array will be spread onto the end of
            {
                submetricIndex: 0,
                parameter: PARAMETER.Y,
                parameterPoints: [1.5, 1.2, 0.9],
            },

            // pick from me for the first index of the returned array
            {
                submetricIndex: 1,
                parameter: PARAMETER.Y,
                parameterPoints: [0.9, 0.95, 1.0, 1.05, 1.1 /* pick my index as the value */],
            },

            // pick from me for the second index of the returned array
            {
                submetricIndex: 1,
                parameter: PARAMETER.A,
                parameterPoints: [0.6, 0.63, 0.66, 0.69 /*pick my index as the value*/, 0.72],
            },
        ]
        const submetricPoint = {
            // the order of the keys should not matter! that required a complete refactor from
            /*
                 Object.entries(submetricPoint).forEach(([parameter, parameterPoint]) => {
                 const correspondingDynamicParameter = dynamicParameters.find(dynamicParameter => {
                     return dynamicParameter.submetricIndex === submetricIndex && dynamicParameter.parameter === parameter
                 })

                 if (correspondingDynamicParameter) {
                     const parameterPointIndex = correspondingDynamicParameter.parameterPoints.indexOf(parameterPoint)
                     parameterPointIndices.push(parameterPointIndex)
                 }
             */
            [PARAMETER.A]: 0.69,
            [PARAMETER.Y]: 1.1,
        }
        const submetricIndex = 1

        const result = computeParameterPointIndices({dynamicParameters, submetricPoint, submetricIndex})

        expect(result).toEqual([4, 3])
    })
})
