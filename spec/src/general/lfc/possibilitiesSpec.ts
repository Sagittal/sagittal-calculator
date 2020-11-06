import {Combination, Ed, Parameter, Window} from "../../../../src/general"
import {computePossibilities} from "../../../../src/general/lfc/possibilities"
import {SubmetricScope} from "../../../../src/scripts/popularityMetricLfc/bestMetric"
import {SubmetricPossibility} from "../../../../src/scripts/popularityMetricLfc/bestMetric/scopeToSamples/types"
import {PopularityParameterId} from "../../../../src/scripts/popularityMetricLfc/sumOfSquares"

describe("computePossibilities", (): void => {
    it("given a scope (centers, windows, and counts for each of its parameters) to compute each of its parameters' sample points, returns an array of all the possible combinations of those parameter sample points", (): void => {
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

        const actual = computePossibilities(submetricScope)

        const expected = [
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
        ] as Combination<SubmetricPossibility>
        expect(actual).toBeArrayWithDeepEqualContents(expected)
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

        const actual = computePossibilities(submetricScope)

        const expected = [
            {[PopularityParameterId.A_AS_COEFFICIENT]: 0.75},
            {[PopularityParameterId.A_AS_COEFFICIENT]: 0.875},
            {[PopularityParameterId.A_AS_COEFFICIENT]: 1.0},
            {[PopularityParameterId.A_AS_COEFFICIENT]: 1.125},
            {[PopularityParameterId.A_AS_COEFFICIENT]: 1.25},
        ] as Combination<SubmetricPossibility>
        expect(actual).toBeArrayWithDeepEqualContents(expected)
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

        const actual = computePossibilities(submetricScopes)

        const expected = [
            {[PopularityParameterId.A_AS_COEFFICIENT]: 0.75, [PopularityParameterId.W]: 0.7},
            {[PopularityParameterId.A_AS_COEFFICIENT]: 0.875, [PopularityParameterId.W]: 0.7},
            {[PopularityParameterId.A_AS_COEFFICIENT]: 1.0, [PopularityParameterId.W]: 0.7},
            {[PopularityParameterId.A_AS_COEFFICIENT]: 1.125, [PopularityParameterId.W]: 0.7},
            {[PopularityParameterId.A_AS_COEFFICIENT]: 1.25, [PopularityParameterId.W]: 0.7},
        ] as Combination<SubmetricPossibility>
        expect(actual).toBeArrayWithDeepEqualContents(expected)
    })
})
