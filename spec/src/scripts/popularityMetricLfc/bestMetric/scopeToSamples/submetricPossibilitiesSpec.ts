import {Ed, Window} from "../../../../../../src/general"
import {SubmetricScope} from "../../../../../../src/scripts/popularityMetricLfc/bestMetric"
import {computeSubmetricPossibilities} from "../../../../../../src/scripts/popularityMetricLfc/bestMetric/scopeToSamples/submetricPossibilities"
import {Parameter, ParameterValue} from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares"

describe("computeSubmetricPossibilities", (): void => {
    it("given this submetric's scope (centers, windows, and counts for each of its parameters) to compute each of its parameters' sample points, returns an array of all the possible combinations of those parameter sample points", (): void => {
        const submetricScope = {
            [Parameter.A_AS_COEFFICIENT]: {
                center: 1 as ParameterValue,
                window: 0.5 as Window<ParameterValue>,
                ed: 5 as Ed<ParameterValue>,
            },
            [Parameter.W]: {
                center: 0.7 as ParameterValue,
                window: 0.2 as Window<ParameterValue>,
                ed: 3 as Ed<ParameterValue>,
            },
        } as SubmetricScope

        const actual = computeSubmetricPossibilities(submetricScope)

        const expected = jasmine.arrayWithExactContents([
            {[Parameter.A_AS_COEFFICIENT]: 0.75, [Parameter.W]: 0.6},
            {[Parameter.A_AS_COEFFICIENT]: 0.875, [Parameter.W]: 0.6},
            {[Parameter.A_AS_COEFFICIENT]: 1.0, [Parameter.W]: 0.6},
            {[Parameter.A_AS_COEFFICIENT]: 1.125, [Parameter.W]: 0.6},
            {[Parameter.A_AS_COEFFICIENT]: 1.25, [Parameter.W]: 0.6},
            {[Parameter.A_AS_COEFFICIENT]: 0.75, [Parameter.W]: 0.7},
            {[Parameter.A_AS_COEFFICIENT]: 0.875, [Parameter.W]: 0.7},
            {[Parameter.A_AS_COEFFICIENT]: 1.0, [Parameter.W]: 0.7},
            {[Parameter.A_AS_COEFFICIENT]: 1.125, [Parameter.W]: 0.7},
            {[Parameter.A_AS_COEFFICIENT]: 1.25, [Parameter.W]: 0.7},
            {[Parameter.A_AS_COEFFICIENT]: 0.75, [Parameter.W]: 0.8},
            {[Parameter.A_AS_COEFFICIENT]: 0.875, [Parameter.W]: 0.8},
            {[Parameter.A_AS_COEFFICIENT]: 1.0, [Parameter.W]: 0.8},
            {[Parameter.A_AS_COEFFICIENT]: 1.125, [Parameter.W]: 0.8},
            {[Parameter.A_AS_COEFFICIENT]: 1.25, [Parameter.W]: 0.8},
        ])
        expect(actual).toEqual(expected)
    })

    it("leaves a parameter out if it has a 0 ED", (): void => {
        const submetricScope = {
            [Parameter.A_AS_COEFFICIENT]: {
                center: 1 as ParameterValue,
                window: 0.5 as Window<ParameterValue>,
                ed: 5 as Ed<ParameterValue>,
            },
            [Parameter.W]: {
                center: 0.7 as ParameterValue,
                window: 0.2 as Window<ParameterValue>,
                ed: 0 as Ed<ParameterValue>,
            },
        } as SubmetricScope

        const actual = computeSubmetricPossibilities(submetricScope)

        const expected = jasmine.arrayWithExactContents([
            {[Parameter.A_AS_COEFFICIENT]: 0.75},
            {[Parameter.A_AS_COEFFICIENT]: 0.875},
            {[Parameter.A_AS_COEFFICIENT]: 1.0},
            {[Parameter.A_AS_COEFFICIENT]: 1.125},
            {[Parameter.A_AS_COEFFICIENT]: 1.25},
        ])
        expect(actual).toEqual(expected)
    })

    it("works when provided a flat value", (): void => {
        const submetricScopes = {
            [Parameter.A_AS_COEFFICIENT]: {
                center: 1 as ParameterValue,
                window: 0.5 as Window<ParameterValue>,
                ed: 5 as Ed<ParameterValue>,
            },
            [Parameter.W]: 0.7 as ParameterValue,
        } as SubmetricScope

        const actual = computeSubmetricPossibilities(submetricScopes)

        const expected = jasmine.arrayWithExactContents([
            {[Parameter.A_AS_COEFFICIENT]: 0.75, [Parameter.W]: 0.7},
            {[Parameter.A_AS_COEFFICIENT]: 0.875, [Parameter.W]: 0.7},
            {[Parameter.A_AS_COEFFICIENT]: 1.0, [Parameter.W]: 0.7},
            {[Parameter.A_AS_COEFFICIENT]: 1.125, [Parameter.W]: 0.7},
            {[Parameter.A_AS_COEFFICIENT]: 1.25, [Parameter.W]: 0.7},
        ])
        expect(actual).toEqual(expected)
    })
})
