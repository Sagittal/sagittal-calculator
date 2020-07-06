const {computeDynamicParameters} = require("../../../../../src/scripts/unpopularityMetric/submetricCombinations/dynamicParameters")
const {PARAMETER, SUBMETRIC_TYPE} = require("../../../../../src/scripts/unpopularityMetric/constants")

describe("computeDynamicParameters", () => {
    it("returns a flattened array of all the parameters that are dynamic (count > 1) -- flattened across all the submetrics, that is", () => {
        const configs = [
            {
                [PARAMETER.Y]: {center: 1.2, range: 1, count: 3},
                [PARAMETER.W]: 4,
            },
            {
                [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF,
                [PARAMETER.Y]: {center: 1.0, range: 0.2, count: 2},
                [PARAMETER.A]: {center: 0.65, range: 0.1, count: 2},
            },
        ]

        const result = computeDynamicParameters(configs)

        expect(result).toEqual([
            { submetricIndex: 0, parameter: PARAMETER.Y, parameterPoints: [0.7, 1.2, 1.7] },
            { submetricIndex: 1, parameter: PARAMETER.Y, parameterPoints: [0.9, 1.1] },
            { submetricIndex: 1, parameter: PARAMETER.A, parameterPoints: [0.6, 0.7] },
        ])
    })
})
