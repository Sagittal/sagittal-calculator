import {Ed, Index, Parameter, Window} from "../../../../../../src/general"
import {DynamicParameter, SubmetricScope} from "../../../../../../src/scripts/popularityMetricLfc/bestMetric"
import {computeSubmetricDynamicParameters} from "../../../../../../src/scripts/popularityMetricLfc/bestMetric/scopeToSamples/submetricDynamicParameters"
import {PopularityParameterId, Submetric} from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares"

describe("computeSubmetricDynamicParameters", (): void => {
    const submetricIndex = 5 as Index<Submetric>

    it("given this submetric's scope (centers, windows, and counts for each parameter) to compute each of its parameters' sample points, returns an array of all the parameters which are dynamic (change, i.e. have a ED > 1)", (): void => {
        const submetricScope: SubmetricScope = {
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

        const actual = computeSubmetricDynamicParameters(submetricScope, submetricIndex)

        const expected = [
            {
                submetricIndex,
                parameter: PopularityParameterId.A_AS_COEFFICIENT,
                values: [0.75, 0.875, 1.0, 1.125, 1.25],
                unit: 0.125,
            },
            {submetricIndex, parameter: PopularityParameterId.W, values: [0.6, 0.7, 0.8], unit: 0.1},
        ] as DynamicParameter[]
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

        const actual = computeSubmetricDynamicParameters(submetricScope, submetricIndex)

        const expected = [
            {
                submetricIndex,
                parameter: PopularityParameterId.A_AS_COEFFICIENT,
                values: [0.75, 0.875, 1.0, 1.125, 1.25],
                unit: 0.125,
            },
        ] as DynamicParameter[]
        expect(actual).toBeArrayWithDeepEqualContents(expected)
    })

    it("works when provided a flat value", (): void => {
        const submetricScope: SubmetricScope = {
            [PopularityParameterId.A_AS_COEFFICIENT]: {
                center: 1 as Parameter,
                window: 0.5 as Window<Parameter>,
                ed: 5 as Ed<Parameter>,
            },
            [PopularityParameterId.W]: 0.7 as Parameter,
        } as SubmetricScope

        const actual = computeSubmetricDynamicParameters(submetricScope, submetricIndex)

        const expected = [
            {
                submetricIndex,
                parameter: PopularityParameterId.A_AS_COEFFICIENT,
                values: [0.75, 0.875, 1.0, 1.125, 1.25],
                unit: 0.125,
            },
        ] as DynamicParameter[]
        expect(actual).toBeArrayWithDeepEqualContents(expected)
    })
})
