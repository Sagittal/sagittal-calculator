import { computeSubmetricPossibilities } from "../../../../../../src/scripts/unpopularityMetric/automator/samples/submetricPossibilities"
import { Parameter } from "../../../../../../src/scripts/unpopularityMetric/types"
import {
    DynamicParameterValue,
    SampleRange, SampleResolution,
} from "../../../../../../src/scripts/unpopularityMetric/automator/samples/types"

describe("computeSubmetricPossibilities", () => {
    it("given this submetric's config (centers, ranges, and counts for each of its parameters) to compute each of its parameters' sample points, returns an array of all the possible combinations of those parameter sample points", () => {
        const submetricConfig = {
            [ Parameter.A ]: {
                center: 1 as DynamicParameterValue,
                range: 0.5 as SampleRange,
                resolution: 5 as SampleResolution,
            },
            [ Parameter.W ]: {
                center: 0.7 as DynamicParameterValue,
                range: 0.2 as SampleRange,
                resolution: 3 as SampleResolution,
            },
        }

        const result = computeSubmetricPossibilities(submetricConfig)

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
                center: 1 as DynamicParameterValue,
                range: 0.5 as SampleRange,
                resolution: 5 as SampleResolution,
            },
            [ Parameter.W ]: {
                center: 0.7 as DynamicParameterValue,
                range: 0.2 as SampleRange,
                resolution: 0 as SampleResolution,
            },
        }

        const result = computeSubmetricPossibilities(submetricConfig)

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
                center: 1 as DynamicParameterValue,
                range: 0.5 as SampleRange,
                resolution: 5 as SampleResolution,
            },
            [ Parameter.W ]: 0.7 as DynamicParameterValue,
        }

        const result = computeSubmetricPossibilities(submetricConfigs)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            { [ Parameter.A ]: 0.75, [ Parameter.W ]: 0.7 },
            { [ Parameter.A ]: 0.875, [ Parameter.W ]: 0.7 },
            { [ Parameter.A ]: 1.0, [ Parameter.W ]: 0.7 },
            { [ Parameter.A ]: 1.125, [ Parameter.W ]: 0.7 },
            { [ Parameter.A ]: 1.25, [ Parameter.W ]: 0.7 },
        ]))
    })
})
