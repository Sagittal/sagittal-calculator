import {Combination, Ed, Parameter, Window} from "../../../../../src/general"
import {SubmetricScope} from "../../../../../src/scripts/popularityMetricLfc/bestMetric"
import {computeSpreadDynamicParameters} from "../../../../../src/scripts/popularityMetricLfc/bestMetric/spreadDynamicParameters"
import {PopularityParameterId} from "../../../../../src/scripts/popularityMetricLfc/sumOfSquares"

describe("computeSpreadDynamicParameters", (): void => {
    it("given a scope returns a list of the dynamic parameters which are on the all-bins (first) submetric scope           ", (): void => {
        const scope = [
            {
                [PopularityParameterId.K_AS_COEFFICIENT]: {
                    center: 1 as Parameter,
                    window: 2 as Window<Parameter>,
                    ed: 2 as Ed<Parameter>,
                },
            },
            {
                [PopularityParameterId.SUM]: true,
                [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2 as Parameter,
                [PopularityParameterId.J_AS_POWER_EXPONENT]: {
                    center: 3 as Parameter,
                    window: 1 as Window<Parameter>,
                    ed: 5 as Ed<Parameter>,
                },
            },
        ] as Combination<SubmetricScope>

        const actual = computeSpreadDynamicParameters(scope)

        const expected = [
            PopularityParameterId.K_AS_COEFFICIENT,
        ]
        expect(actual).toEqual(expected)
    })

    it("if there are no parameters on the all-bins (first) submetric scope, it returns undefined", (): void => {
        const scope = [
            {},
            {
                [PopularityParameterId.SUM]: true,
                [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2 as Parameter,
                [PopularityParameterId.J_AS_POWER_EXPONENT]: {
                    center: 3 as Parameter,
                    window: 1 as Window<Parameter>,
                    ed: 5 as Ed<Parameter>,
                },
            },
        ] as Combination<SubmetricScope>

        const actual = computeSpreadDynamicParameters(scope)

        expect(actual).toBeUndefined()
    })

    it("ignores non-dynamic parameters (such as the boolean ones and the logarithm bases which are locked down to 2)            ", (): void => {
        const scope = [
            {
                [PopularityParameterId.K_AS_COEFFICIENT]: {
                    center: 1 as Parameter,
                    window: 2 as Window<Parameter>,
                    ed: 2 as Ed<Parameter>,
                },
                [PopularityParameterId.J_AS_LOGARITHM_BASE]: 2 as Parameter,
            },
            {
                [PopularityParameterId.SUM]: true,
                [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2 as Parameter,
                [PopularityParameterId.J_AS_POWER_EXPONENT]: {
                    center: 3 as Parameter,
                    window: 1 as Window<Parameter>,
                    ed: 5 as Ed<Parameter>,
                },
            },
        ] as Combination<SubmetricScope>

        const actual = computeSpreadDynamicParameters(scope)

        const expected = [
            PopularityParameterId.K_AS_COEFFICIENT,
        ]
        expect(actual).toEqual(expected)
    })
})
