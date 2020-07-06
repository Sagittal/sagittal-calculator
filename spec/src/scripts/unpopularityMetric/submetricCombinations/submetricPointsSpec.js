const {computeSubmetricPoints} = require("../../../../../src/scripts/unpopularityMetric/submetricCombinations/submetricPoints")
const {PARAMETER} = require("../../../../../src/scripts/unpopularityMetric/constants")

describe("computeSubmetricPoints", () => {
    it("given this submetric's configs (centers, ranges, and counts) to compute each of its parameters' sample points, returns an array of all the possible combinations of those parameter sample points", () => {
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

        const result = computeSubmetricPoints(submetricConfigs)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            {[PARAMETER.A]: 0.75, [PARAMETER.W]: 0.6},
            {[PARAMETER.A]: 0.875, [PARAMETER.W]: 0.6},
            {[PARAMETER.A]: 1.0, [PARAMETER.W]: 0.6},
            {[PARAMETER.A]: 1.125, [PARAMETER.W]: 0.6},
            {[PARAMETER.A]: 1.25, [PARAMETER.W]: 0.6},
            {[PARAMETER.A]: 0.75, [PARAMETER.W]: 0.7},
            {[PARAMETER.A]: 0.875, [PARAMETER.W]: 0.7},
            {[PARAMETER.A]: 1.0, [PARAMETER.W]: 0.7},
            {[PARAMETER.A]: 1.125, [PARAMETER.W]: 0.7},
            {[PARAMETER.A]: 1.25, [PARAMETER.W]: 0.7},
            {[PARAMETER.A]: 0.75, [PARAMETER.W]: 0.8},
            {[PARAMETER.A]: 0.875, [PARAMETER.W]: 0.8},
            {[PARAMETER.A]: 1.0, [PARAMETER.W]: 0.8},
            {[PARAMETER.A]: 1.125, [PARAMETER.W]: 0.8},
            {[PARAMETER.A]: 1.25, [PARAMETER.W]: 0.8},
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

        const result = computeSubmetricPoints(submetricConfigs)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            {[PARAMETER.A]: 0.75},
            {[PARAMETER.A]: 0.875},
            {[PARAMETER.A]: 1.0},
            {[PARAMETER.A]: 1.125},
            {[PARAMETER.A]: 1.25},
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

        const result = computeSubmetricPoints(submetricConfigs)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            {[PARAMETER.A]: 0.75, [PARAMETER.W]: 0.7},
            {[PARAMETER.A]: 0.875, [PARAMETER.W]: 0.7},
            {[PARAMETER.A]: 1.0, [PARAMETER.W]: 0.7},
            {[PARAMETER.A]: 1.125, [PARAMETER.W]: 0.7},
            {[PARAMETER.A]: 1.25, [PARAMETER.W]: 0.7},
        ]))
    })
})
