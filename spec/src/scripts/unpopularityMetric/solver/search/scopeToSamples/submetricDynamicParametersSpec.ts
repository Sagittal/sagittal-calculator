import { Index, Resolution, Span } from "../../../../../../../src/utilities/types"
import {
    DynamicParameterValue, Parameter, ParameterValue,
    Submetric,
    SubmetricScope,
} from "../../../../../../../src/scripts/unpopularityMetric/types"
import { computeSubmetricDynamicParameters } from "../../../../../../../src/scripts/unpopularityMetric/solver/search/scopeToSamples/submetricDynamicParameters"

describe("computeSubmetricDynamicParameters", () => {
    const submetricIndex = 5 as Index<Submetric>

    it("given this submetric's scope (centers, ranges, and counts for each parameter) to compute each of its parameters' sample points, returns an array of all the parameters which are dynamic (change, i.e. have a resolution > 1)", () => {
        const submetricScope: SubmetricScope = {
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

        const result = computeSubmetricDynamicParameters(submetricScope, submetricIndex)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            { submetricIndex, parameter: Parameter.A, values: [0.75, 0.875, 1.0, 1.125, 1.25], unit: 0.125 },
            { submetricIndex, parameter: Parameter.W, values: [0.6, 0.7, 0.8], unit: 0.1 },
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

        const result = computeSubmetricDynamicParameters(submetricScope, submetricIndex)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            { submetricIndex, parameter: Parameter.A, values: [0.75, 0.875, 1.0, 1.125, 1.25], unit: 0.125 },
        ]))
    })

    it("works when provided a flat value", () => {
        const submetricScope: SubmetricScope = {
            [ Parameter.A ]: {
                center: 1 as DynamicParameterValue,
                range: 0.5 as Span<DynamicParameterValue>,
                resolution: 5 as Resolution<DynamicParameterValue>,
            },
            [ Parameter.W ]: 0.7 as ParameterValue,
        }

        const result = computeSubmetricDynamicParameters(submetricScope, submetricIndex)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            { submetricIndex, parameter: Parameter.A, values: [0.75, 0.875, 1.0, 1.125, 1.25], unit: 0.125 },
        ]))
    })
})
