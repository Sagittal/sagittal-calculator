import { Combination, Resolution, Span } from "../../../../../src/general"
import { SubmetricScope } from "../../../../../src/scripts/unpopularityMetric/bestMetric"
import { computeSpreadDynamicParameters } from "../../../../../src/scripts/unpopularityMetric/bestMetric/spreadDynamicParameters"
import { Parameter, ParameterValue } from "../../../../../src/scripts/unpopularityMetric/sumOfSquares"

describe("computeSpreadDynamicParameters", () => {
    it("given a scope returns a list of the dynamic parameters which are on the all-bins (first) submetric scope", () => {
        const scope = [
            {
                [ Parameter.K_AS_COEFFICIENT ]: {
                    center: 1 as ParameterValue,
                    span: 2 as Span<ParameterValue>,
                    resolution: 2 as Resolution<ParameterValue>,
                },
            },
            {
                [ Parameter.SUM ]: true,
                [ Parameter.A_AS_LOGARITHM_BASE ]: 2 as ParameterValue,
                [ Parameter.J_AS_POWER_EXPONENT ]: {
                    center: 3 as ParameterValue,
                    span: 1 as Span<ParameterValue>,
                    resolution: 5 as Resolution<ParameterValue>,
                },
            },
        ] as Combination<SubmetricScope>

        const result = computeSpreadDynamicParameters(scope)

        expect(result).toEqual([
            Parameter.K_AS_COEFFICIENT,
        ])
    })

    it("if there are no parameters on the all-bins (first) submetric scope, it returns undefined", () => {
        const scope = [
            {},
            {
                [ Parameter.SUM ]: true,
                [ Parameter.A_AS_LOGARITHM_BASE ]: 2 as ParameterValue,
                [ Parameter.J_AS_POWER_EXPONENT ]: {
                    center: 3 as ParameterValue,
                    span: 1 as Span<ParameterValue>,
                    resolution: 5 as Resolution<ParameterValue>,
                },
            },
        ] as Combination<SubmetricScope>

        const result = computeSpreadDynamicParameters(scope)

        expect(result).toEqual(undefined)
    })

    it("ignores non-dynamic parameters (such as the boolean ones and the logarithm bases which are locked down to 2)", () => {
        const scope = [
            {
                [ Parameter.K_AS_COEFFICIENT ]: {
                    center: 1 as ParameterValue,
                    span: 2 as Span<ParameterValue>,
                    resolution: 2 as Resolution<ParameterValue>,
                },
                [ Parameter.J_AS_LOGARITHM_BASE ]: 2 as ParameterValue,
            },
            {
                [ Parameter.SUM ]: true,
                [ Parameter.A_AS_LOGARITHM_BASE ]: 2 as ParameterValue,
                [ Parameter.J_AS_POWER_EXPONENT ]: {
                    center: 3 as ParameterValue,
                    span: 1 as Span<ParameterValue>,
                    resolution: 5 as Resolution<ParameterValue>,
                },
            },
        ] as Combination<SubmetricScope>

        const result = computeSpreadDynamicParameters(scope)

        expect(result).toEqual([
            Parameter.K_AS_COEFFICIENT,
        ])
    })
})
