import { Combination, Ed, Window } from "../../../../../src/general"
import { SubmetricScope } from "../../../../../src/scripts/lfc/bestMetric"
import { computeSpreadDynamicParameters } from "../../../../../src/scripts/lfc/bestMetric/spreadDynamicParameters"
import { Parameter, ParameterValue } from "../../../../../src/scripts/lfc/sumOfSquares"

describe("computeSpreadDynamicParameters", () => {
    it(
        `given a scope returns a list of the dynamic parameters which are on the all-bins (first) submetric scope`,
        () => {
            const scope = [
                {
                    [ Parameter.K_AS_COEFFICIENT ]: {
                        center: 1 as ParameterValue,
                        window: 2 as Window<ParameterValue>,
                        ed: 2 as Ed<ParameterValue>,
                    },
                },
                {
                    [ Parameter.SUM ]: true,
                    [ Parameter.A_AS_LOGARITHM_BASE ]: 2 as ParameterValue,
                    [ Parameter.J_AS_POWER_EXPONENT ]: {
                        center: 3 as ParameterValue,
                        window: 1 as Window<ParameterValue>,
                        ed: 5 as Ed<ParameterValue>,
                    },
                },
            ] as Combination<SubmetricScope>

            const actual = computeSpreadDynamicParameters(scope)

            const expected = [
                Parameter.K_AS_COEFFICIENT,
            ]
            expect(actual).toEqual(expected)
        },
    )

    it("if there are no parameters on the all-bins (first) submetric scope, it returns undefined", () => {
        const scope = [
            {},
            {
                [ Parameter.SUM ]: true,
                [ Parameter.A_AS_LOGARITHM_BASE ]: 2 as ParameterValue,
                [ Parameter.J_AS_POWER_EXPONENT ]: {
                    center: 3 as ParameterValue,
                    window: 1 as Window<ParameterValue>,
                    ed: 5 as Ed<ParameterValue>,
                },
            },
        ] as Combination<SubmetricScope>

        const actual = computeSpreadDynamicParameters(scope)

        expect(actual).toBeUndefined()
    })

    it(
        `ignores non-dynamic parameters (such as the boolean ones and the logarithm bases which are locked down to 2)`,
        () => {
            const scope = [
                {
                    [ Parameter.K_AS_COEFFICIENT ]: {
                        center: 1 as ParameterValue,
                        window: 2 as Window<ParameterValue>,
                        ed: 2 as Ed<ParameterValue>,
                    },
                    [ Parameter.J_AS_LOGARITHM_BASE ]: 2 as ParameterValue,
                },
                {
                    [ Parameter.SUM ]: true,
                    [ Parameter.A_AS_LOGARITHM_BASE ]: 2 as ParameterValue,
                    [ Parameter.J_AS_POWER_EXPONENT ]: {
                        center: 3 as ParameterValue,
                        window: 1 as Window<ParameterValue>,
                        ed: 5 as Ed<ParameterValue>,
                    },
                },
            ] as Combination<SubmetricScope>

            const actual = computeSpreadDynamicParameters(scope)

            const expected = [
                Parameter.K_AS_COEFFICIENT,
            ]
            expect(actual).toEqual(expected)
        },
    )
})
