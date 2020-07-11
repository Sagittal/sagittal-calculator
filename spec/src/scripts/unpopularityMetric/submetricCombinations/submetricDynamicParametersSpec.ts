import { computeSubmetricDynamicParameters } from "../../../../../src/scripts/unpopularityMetric/submetricCombinations/submetricDynamicParameters"
import { Parameter, SubmetricConfig } from "../../../../../src/scripts/unpopularityMetric/types"

describe("computeSubmetricDynamicParameters", () => {
    const submetricIndex = 5

    it("given this submetric's config (centers, ranges, and counts for each parameter) to compute each of its parameters' sample points, returns an array of all the parameters which are dynamic (change, i.e. have a count > 1)", () => {
        const submetricConfig = {
            [ Parameter.A ]: {
                center: 1,
                range: 0.5,
                count: 5,
            },
            [ Parameter.W ]: {
                center: 0.7,
                range: 0.2,
                count: 3,
            },
        }

        const result = computeSubmetricDynamicParameters(submetricConfig, submetricIndex)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            { submetricIndex, parameter: Parameter.A, parameterPoints: [0.75, 0.875, 1.0, 1.125, 1.25], unit: 0.125 },
            { submetricIndex, parameter: Parameter.W, parameterPoints: [0.6, 0.7, 0.8], unit: 0.1 },
        ]))
    })

    it("leaves a parameter out if it has a 0 count", () => {
        const submetricConfig = {
            [ Parameter.A ]: {
                center: 1,
                range: 0.5,
                count: 5,
            },
            [ Parameter.W ]: {
                center: 0.7,
                range: 0.2,
                count: 0,
            },
        }

        const result = computeSubmetricDynamicParameters(submetricConfig, submetricIndex)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            { submetricIndex, parameter: Parameter.A, parameterPoints: [0.75, 0.875, 1.0, 1.125, 1.25], unit: 0.125 },
        ]))
    })

    it("works when provided a flat value", () => {
        const submetricConfig: SubmetricConfig = {
            [ Parameter.A ]: {
                center: 1,
                range: 0.5,
                count: 5,
            },
            [ Parameter.W ]: 0.7,
        }

        const result = computeSubmetricDynamicParameters(submetricConfig, submetricIndex)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            { submetricIndex, parameter: Parameter.A, parameterPoints: [0.75, 0.875, 1.0, 1.125, 1.25], unit: 0.125 },
        ]))
    })
})
