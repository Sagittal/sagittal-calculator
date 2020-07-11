import { computeSubmetricPoints } from "../../../../../../src/scripts/unpopularityMetric/automator/samples/submetricPoints"
import { Parameter } from "../../../../../../src/scripts/unpopularityMetric/types"

describe("computeSubmetricPoints", () => {
    it("given this submetric's config (centers, ranges, and counts for each of its parameters) to compute each of its parameters' sample points, returns an array of all the possible combinations of those parameter sample points", () => {
        const submetricConfig = {
            [ Parameter.A ]: {
                center: 1,
                range: 0.5,
                resolution: 5,
            },
            [ Parameter.W ]: {
                center: 0.7,
                range: 0.2,
                resolution: 3,
            },
        }

        const result = computeSubmetricPoints(submetricConfig)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            { [ Parameter.A ]: 0.75, [ Parameter.W ]: 0.6 },
            { [ Parameter.A ]: 0.875, [ Parameter.W ]: 0.6 },
            { [ Parameter.A ]: 1.0, [ Parameter.W ]: 0.6 },
            { [ Parameter.A ]: 1.125, [ Parameter.W ]: 0.6 },
            { [ Parameter.A ]: 1.25, [ Parameter.W ]: 0.6 },
            { [ Parameter.A ]: 0.75, [ Parameter.W ]: 0.7 },
            { [ Parameter.A ]: 0.875, [ Parameter.W ]: 0.7 },
            { [ Parameter.A ]: 1.0, [ Parameter.W ]: 0.7 },
            { [ Parameter.A ]: 1.125, [ Parameter.W ]: 0.7 },
            { [ Parameter.A ]: 1.25, [ Parameter.W ]: 0.7 },
            { [ Parameter.A ]: 0.75, [ Parameter.W ]: 0.8 },
            { [ Parameter.A ]: 0.875, [ Parameter.W ]: 0.8 },
            { [ Parameter.A ]: 1.0, [ Parameter.W ]: 0.8 },
            { [ Parameter.A ]: 1.125, [ Parameter.W ]: 0.8 },
            { [ Parameter.A ]: 1.25, [ Parameter.W ]: 0.8 },
        ]))
    })

    it("leaves a parameter out if it has a 0 resolution", () => {
        const submetricConfig = {
            [ Parameter.A ]: {
                center: 1,
                range: 0.5,
                resolution: 5,
            },
            [ Parameter.W ]: {
                center: 0.7,
                range: 0.2,
                resolution: 0,
            },
        }

        const result = computeSubmetricPoints(submetricConfig)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            { [ Parameter.A ]: 0.75 },
            { [ Parameter.A ]: 0.875 },
            { [ Parameter.A ]: 1.0 },
            { [ Parameter.A ]: 1.125 },
            { [ Parameter.A ]: 1.25 },
        ]))
    })

    it("works when provided a flat value", () => {
        const submetricConfigs = {
            [ Parameter.A ]: {
                center: 1,
                range: 0.5,
                resolution: 5,
            },
            [ Parameter.W ]: 0.7,
        }

        const result = computeSubmetricPoints(submetricConfigs)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            { [ Parameter.A ]: 0.75, [ Parameter.W ]: 0.7 },
            { [ Parameter.A ]: 0.875, [ Parameter.W ]: 0.7 },
            { [ Parameter.A ]: 1.0, [ Parameter.W ]: 0.7 },
            { [ Parameter.A ]: 1.125, [ Parameter.W ]: 0.7 },
            { [ Parameter.A ]: 1.25, [ Parameter.W ]: 0.7 },
        ]))
    })
})
