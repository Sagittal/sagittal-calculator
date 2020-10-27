import {Ed, Window} from "../../../../../../src/general"
import {SubmetricScope} from "../../../../../../src/scripts/popularityMetricLfc/bestMetric"
import {computeSubmetricPossibilities} from "../../../../../../src/scripts/popularityMetricLfc/bestMetric/scopeToSamples/submetricPossibilities"
import {PopularityParameterId} from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares"
import {Parameter} from "../../../../../../src/scripts/types"

describe("computeSubmetricPossibilities", (): void => {
    it("given this submetric's scope (centers, windows, and counts for each of its parameters) to compute each of its parameters' sample points, returns an array of all the possible combinations of those parameter sample points", (): void => {
        const submetricScope = {
            [PopularityParameterId.A_AS_COEFFICIENT]: {
                center: 1 as Parameter,
                window: 0.5 as Window<Parameter>,
                ed: 5 as Ed<Parameter>,
            },
            [PopularityParameterId.W]: {
                center: 0.7 as Parameter,
                window: 0.2 as Window<Parameter>,
                ed: 3 as Ed<Parameter>,
            },
        } as SubmetricScope

        const actual = computeSubmetricPossibilities(submetricScope)

        // TODO: Wait a second, shouldn't these "arrayWithExactContents" all have been replaced by my custom matchers?
        const expected = jasmine.arrayWithExactContents([
            {[PopularityParameterId.A_AS_COEFFICIENT]: 0.75, [PopularityParameterId.W]: 0.6},
            {[PopularityParameterId.A_AS_COEFFICIENT]: 0.875, [PopularityParameterId.W]: 0.6},
            {[PopularityParameterId.A_AS_COEFFICIENT]: 1.0, [PopularityParameterId.W]: 0.6},
            {[PopularityParameterId.A_AS_COEFFICIENT]: 1.125, [PopularityParameterId.W]: 0.6},
            {[PopularityParameterId.A_AS_COEFFICIENT]: 1.25, [PopularityParameterId.W]: 0.6},
            {[PopularityParameterId.A_AS_COEFFICIENT]: 0.75, [PopularityParameterId.W]: 0.7},
            {[PopularityParameterId.A_AS_COEFFICIENT]: 0.875, [PopularityParameterId.W]: 0.7},
            {[PopularityParameterId.A_AS_COEFFICIENT]: 1.0, [PopularityParameterId.W]: 0.7},
            {[PopularityParameterId.A_AS_COEFFICIENT]: 1.125, [PopularityParameterId.W]: 0.7},
            {[PopularityParameterId.A_AS_COEFFICIENT]: 1.25, [PopularityParameterId.W]: 0.7},
            {[PopularityParameterId.A_AS_COEFFICIENT]: 0.75, [PopularityParameterId.W]: 0.8},
            {[PopularityParameterId.A_AS_COEFFICIENT]: 0.875, [PopularityParameterId.W]: 0.8},
            {[PopularityParameterId.A_AS_COEFFICIENT]: 1.0, [PopularityParameterId.W]: 0.8},
            {[PopularityParameterId.A_AS_COEFFICIENT]: 1.125, [PopularityParameterId.W]: 0.8},
            {[PopularityParameterId.A_AS_COEFFICIENT]: 1.25, [PopularityParameterId.W]: 0.8},
        ])
        expect(actual).toEqual(expected)
    })

    it("leaves a parameter out if it has a 0 ED", (): void => {
        const submetricScope = {
            [PopularityParameterId.A_AS_COEFFICIENT]: {
                center: 1 as Parameter,
                window: 0.5 as Window<Parameter>,
                ed: 5 as Ed<Parameter>,
            },
            [PopularityParameterId.W]: {
                center: 0.7 as Parameter,
                window: 0.2 as Window<Parameter>,
                ed: 0 as Ed<Parameter>,
            },
        } as SubmetricScope

        const actual = computeSubmetricPossibilities(submetricScope)

        const expected = jasmine.arrayWithExactContents([
            {[PopularityParameterId.A_AS_COEFFICIENT]: 0.75},
            {[PopularityParameterId.A_AS_COEFFICIENT]: 0.875},
            {[PopularityParameterId.A_AS_COEFFICIENT]: 1.0},
            {[PopularityParameterId.A_AS_COEFFICIENT]: 1.125},
            {[PopularityParameterId.A_AS_COEFFICIENT]: 1.25},
        ])
        expect(actual).toEqual(expected)
    })

    it("works when provided a flat value", (): void => {
        const submetricScopes = {
            [PopularityParameterId.A_AS_COEFFICIENT]: {
                center: 1 as Parameter,
                window: 0.5 as Window<Parameter>,
                ed: 5 as Ed<Parameter>,
            },
            [PopularityParameterId.W]: 0.7 as Parameter,
        } as SubmetricScope

        const actual = computeSubmetricPossibilities(submetricScopes)

        const expected = jasmine.arrayWithExactContents([
            {[PopularityParameterId.A_AS_COEFFICIENT]: 0.75, [PopularityParameterId.W]: 0.7},
            {[PopularityParameterId.A_AS_COEFFICIENT]: 0.875, [PopularityParameterId.W]: 0.7},
            {[PopularityParameterId.A_AS_COEFFICIENT]: 1.0, [PopularityParameterId.W]: 0.7},
            {[PopularityParameterId.A_AS_COEFFICIENT]: 1.125, [PopularityParameterId.W]: 0.7},
            {[PopularityParameterId.A_AS_COEFFICIENT]: 1.25, [PopularityParameterId.W]: 0.7},
        ])
        expect(actual).toEqual(expected)
    })
})
