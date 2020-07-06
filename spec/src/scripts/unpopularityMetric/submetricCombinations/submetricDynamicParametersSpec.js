const {computeSubmetricDynamicParameters} = require("../../../../../src/scripts/unpopularityMetric/submetricCombinations/submetricDynamicParameters")
const {PARAMETER} = require("../../../../../src/scripts/unpopularityMetric/constants")

describe("computeSubmetricDynamicParameters", () => {
    const submetricIndex = 5

    it("given this submetric's configs (centers, ranges, and counts) to compute each of its parameters' sample points, returns an array of all the parameters which are dynamic (change, i.e. have a count > 1)", () => {
        const submetricConfigs = {
            [PARAMETER.A]: {
                center: 1,
                range: 0.5,
                count: 5,
            },
            [PARAMETER.W]: {
                center: 0.7,
                range: 0.2,
                count: 3,
            },
        }

        const result = computeSubmetricDynamicParameters(submetricConfigs, submetricIndex)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            {submetricIndex, parameter: PARAMETER.A, parameterPoints: [0.75, 0.875, 1.0, 1.125, 1.25]},
            {submetricIndex, parameter: PARAMETER.W, parameterPoints: [0.6, 0.7, 0.8]},
        ]))
    })

    it("leaves a parameter out if it has a 0 count", () => {
        const submetricConfigs = {
            [PARAMETER.A]: {
                center: 1,
                range: 0.5,
                count: 5,
            },
            [PARAMETER.W]: {
                center: 0.7,
                range: 0.2,
                count: 0,
            },
        }

        const result = computeSubmetricDynamicParameters(submetricConfigs, submetricIndex)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            {submetricIndex, parameter: PARAMETER.A, parameterPoints: [0.75, 0.875, 1.0, 1.125, 1.25]},
        ]))
    })

    it("works when provided a flat value", () => {
        const submetricConfigs = {
            [PARAMETER.A]: {
                center: 1,
                range: 0.5,
                count: 5,
            },
            [PARAMETER.W]: 0.7,
        }

        const result = computeSubmetricDynamicParameters(submetricConfigs, submetricIndex)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            {submetricIndex, parameter: PARAMETER.A, parameterPoints: [0.75, 0.875, 1.0, 1.125, 1.25]},
        ]))
    })
})
