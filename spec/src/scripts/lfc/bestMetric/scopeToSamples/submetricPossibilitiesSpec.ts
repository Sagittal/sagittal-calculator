import { Resolution, Span } from "../../../../../../src/general"
import { SubmetricScope } from "../../../../../../src/scripts/lfc/bestMetric"
import { computeSubmetricPossibilities } from "../../../../../../src/scripts/lfc/bestMetric/scopeToSamples/submetricPossibilities"
import { Parameter, ParameterValue } from "../../../../../../src/scripts/lfc/sumOfSquares"

describe("computeSubmetricPossibilities", () => {
    it("given this submetric's scope (centers, spans, and counts for each of its parameters) to compute each of its parameters' sample points, returns an array of all the possible combinations of those parameter sample points", () => {
        const submetricScope = {
            [ Parameter.A_AS_COEFFICIENT ]: {
                center: 1 as ParameterValue,
                span: 0.5 as Span<ParameterValue>,
                resolution: 5 as Resolution<ParameterValue>,
            },
            [ Parameter.W ]: {
                center: 0.7 as ParameterValue,
                span: 0.2 as Span<ParameterValue>,
                resolution: 3 as Resolution<ParameterValue>,
            },
        } as SubmetricScope

        const actual = computeSubmetricPossibilities(submetricScope)

        const expected = jasmine.arrayWithExactContents([
            { [ Parameter.A_AS_COEFFICIENT ]: 0.75, [ Parameter.W ]: 0.6 },
            { [ Parameter.A_AS_COEFFICIENT ]: 0.875, [ Parameter.W ]: 0.6 },
            { [ Parameter.A_AS_COEFFICIENT ]: 1.0, [ Parameter.W ]: 0.6 },
            { [ Parameter.A_AS_COEFFICIENT ]: 1.125, [ Parameter.W ]: 0.6 },
            { [ Parameter.A_AS_COEFFICIENT ]: 1.25, [ Parameter.W ]: 0.6 },
            { [ Parameter.A_AS_COEFFICIENT ]: 0.75, [ Parameter.W ]: 0.7 },
            { [ Parameter.A_AS_COEFFICIENT ]: 0.875, [ Parameter.W ]: 0.7 },
            { [ Parameter.A_AS_COEFFICIENT ]: 1.0, [ Parameter.W ]: 0.7 },
            { [ Parameter.A_AS_COEFFICIENT ]: 1.125, [ Parameter.W ]: 0.7 },
            { [ Parameter.A_AS_COEFFICIENT ]: 1.25, [ Parameter.W ]: 0.7 },
            { [ Parameter.A_AS_COEFFICIENT ]: 0.75, [ Parameter.W ]: 0.8 },
            { [ Parameter.A_AS_COEFFICIENT ]: 0.875, [ Parameter.W ]: 0.8 },
            { [ Parameter.A_AS_COEFFICIENT ]: 1.0, [ Parameter.W ]: 0.8 },
            { [ Parameter.A_AS_COEFFICIENT ]: 1.125, [ Parameter.W ]: 0.8 },
            { [ Parameter.A_AS_COEFFICIENT ]: 1.25, [ Parameter.W ]: 0.8 },
        ])
        expect(actual).toEqual(expected)
    })

    it("leaves a parameter out if it has a 0 resolution", () => {
        const submetricScope = {
            [ Parameter.A_AS_COEFFICIENT ]: {
                center: 1 as ParameterValue,
                span: 0.5 as Span<ParameterValue>,
                resolution: 5 as Resolution<ParameterValue>,
            },
            [ Parameter.W ]: {
                center: 0.7 as ParameterValue,
                span: 0.2 as Span<ParameterValue>,
                resolution: 0 as Resolution<ParameterValue>,
            },
        } as SubmetricScope

        const actual = computeSubmetricPossibilities(submetricScope)

        const expected = jasmine.arrayWithExactContents([
            { [ Parameter.A_AS_COEFFICIENT ]: 0.75 },
            { [ Parameter.A_AS_COEFFICIENT ]: 0.875 },
            { [ Parameter.A_AS_COEFFICIENT ]: 1.0 },
            { [ Parameter.A_AS_COEFFICIENT ]: 1.125 },
            { [ Parameter.A_AS_COEFFICIENT ]: 1.25 },
        ])
        expect(actual).toEqual(expected)
    })

    it("works when provided a flat value", () => {
        const submetricScopes = {
            [ Parameter.A_AS_COEFFICIENT ]: {
                center: 1 as ParameterValue,
                span: 0.5 as Span<ParameterValue>,
                resolution: 5 as Resolution<ParameterValue>,
            },
            [ Parameter.W ]: 0.7 as ParameterValue,
        } as SubmetricScope

        const actual = computeSubmetricPossibilities(submetricScopes)

        const expected = jasmine.arrayWithExactContents([
            { [ Parameter.A_AS_COEFFICIENT ]: 0.75, [ Parameter.W ]: 0.7 },
            { [ Parameter.A_AS_COEFFICIENT ]: 0.875, [ Parameter.W ]: 0.7 },
            { [ Parameter.A_AS_COEFFICIENT ]: 1.0, [ Parameter.W ]: 0.7 },
            { [ Parameter.A_AS_COEFFICIENT ]: 1.125, [ Parameter.W ]: 0.7 },
            { [ Parameter.A_AS_COEFFICIENT ]: 1.25, [ Parameter.W ]: 0.7 },
        ])
        expect(actual).toEqual(expected)
    })
})
