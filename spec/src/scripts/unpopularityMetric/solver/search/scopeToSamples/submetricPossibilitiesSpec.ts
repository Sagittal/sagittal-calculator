import { DynamicParameterValue, Parameter } from "../../../../../../../src/scripts/unpopularityMetric/types"
import { computeSubmetricPossibilities } from "../../../../../../../src/scripts/unpopularityMetric/solver/search/scopeToSamples/submetricPossibilities"
import { Resolution, Span } from "../../../../../../../src/utilities/types"

describe("computeSubmetricPossibilities", () => {
    it("given this submetric's scope (centers, ranges, and counts for each of its parameters) to compute each of its parameters' sample points, returns an array of all the possible combinations of those parameter sample points", () => {
        const submetricScope = {
            [ Parameter.A ]: {
                center: 1 as DynamicParameterValue,
                range: 0.5 as Span<DynamicParameterValue>,
                resolution: 5 as Resolution<DynamicParameterValue>,
            },
            [ Parameter.W ]: {
                center: 0.7 as DynamicParameterValue,
                range: 0.2 as Span<DynamicParameterValue>,
                resolution: 3 as Resolution<DynamicParameterValue>,
            },
        }

        const result = computeSubmetricPossibilities(submetricScope)

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
        const submetricScope = {
            [ Parameter.A ]: {
                center: 1 as DynamicParameterValue,
                range: 0.5 as Span<DynamicParameterValue>,
                resolution: 5 as Resolution<DynamicParameterValue>,
            },
            [ Parameter.W ]: {
                center: 0.7 as DynamicParameterValue,
                range: 0.2 as Span<DynamicParameterValue>,
                resolution: 0 as Resolution<DynamicParameterValue>,
            },
        }

        const result = computeSubmetricPossibilities(submetricScope)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            { [ Parameter.A ]: 0.75 },
            { [ Parameter.A ]: 0.875 },
            { [ Parameter.A ]: 1.0 },
            { [ Parameter.A ]: 1.125 },
            { [ Parameter.A ]: 1.25 },
        ]))
    })

    it("works when provided a flat value", () => {
        const submetricScopes = {
            [ Parameter.A ]: {
                center: 1 as DynamicParameterValue,
                range: 0.5 as Span<DynamicParameterValue>,
                resolution: 5 as Resolution<DynamicParameterValue>,
            },
            [ Parameter.W ]: 0.7 as DynamicParameterValue,
        }

        const result = computeSubmetricPossibilities(submetricScopes)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            { [ Parameter.A ]: 0.75, [ Parameter.W ]: 0.7 },
            { [ Parameter.A ]: 0.875, [ Parameter.W ]: 0.7 },
            { [ Parameter.A ]: 1.0, [ Parameter.W ]: 0.7 },
            { [ Parameter.A ]: 1.125, [ Parameter.W ]: 0.7 },
            { [ Parameter.A ]: 1.25, [ Parameter.W ]: 0.7 },
        ]))
    })
})
