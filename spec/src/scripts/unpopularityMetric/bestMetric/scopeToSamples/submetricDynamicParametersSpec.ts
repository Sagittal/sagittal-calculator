import { Index, Resolution, Span } from "../../../../../../src/general"
import { SubmetricScope } from "../../../../../../src/scripts/unpopularityMetric/bestMetric"
import { computeSubmetricDynamicParameters } from "../../../../../../src/scripts/unpopularityMetric/bestMetric/scopeToSamples/submetricDynamicParameters"
import { Parameter, ParameterValue, Submetric } from "../../../../../../src/scripts/unpopularityMetric/sumOfSquares"

describe("computeSubmetricDynamicParameters", () => {
    const submetricIndex = 5 as Index<Submetric>

    it("given this submetric's scope (centers, spans, and counts for each parameter) to compute each of its parameters' sample points, returns an array of all the parameters which are dynamic (change, i.e. have a resolution > 1)", () => {
        const submetricScope: SubmetricScope = {
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

        const actual = computeSubmetricDynamicParameters(submetricScope, submetricIndex)

        const expected = jasmine.arrayWithExactContents([
            {
                submetricIndex,
                parameter: Parameter.A_AS_COEFFICIENT,
                values: [0.75, 0.875, 1.0, 1.125, 1.25],
                unit: 0.125,
            },
            { submetricIndex, parameter: Parameter.W, values: [0.6, 0.7, 0.8], unit: 0.1 },
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

        const actual = computeSubmetricDynamicParameters(submetricScope, submetricIndex)

        const expected = jasmine.arrayWithExactContents([
            {
                submetricIndex,
                parameter: Parameter.A_AS_COEFFICIENT,
                values: [0.75, 0.875, 1.0, 1.125, 1.25],
                unit: 0.125,
            },
        ])
        expect(actual).toEqual(expected)
    })

    it("works when provided a flat value", () => {
        const submetricScope: SubmetricScope = {
            [ Parameter.A_AS_COEFFICIENT ]: {
                center: 1 as ParameterValue,
                span: 0.5 as Span<ParameterValue>,
                resolution: 5 as Resolution<ParameterValue>,
            },
            [ Parameter.W ]: 0.7 as ParameterValue,
        } as SubmetricScope

        const actual = computeSubmetricDynamicParameters(submetricScope, submetricIndex)

        const expected = jasmine.arrayWithExactContents([
            {
                submetricIndex,
                parameter: Parameter.A_AS_COEFFICIENT,
                values: [0.75, 0.875, 1.0, 1.125, 1.25],
                unit: 0.125,
            },
        ])
        expect(actual).toEqual(expected)
    })
})
