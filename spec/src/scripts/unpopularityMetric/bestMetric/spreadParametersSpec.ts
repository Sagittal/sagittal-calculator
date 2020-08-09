import { Combination, Resolution, Span } from "../../../../../src/general"
import { SubmetricScope } from "../../../../../src/scripts/unpopularityMetric/bestMetric"
import { computeSpreadParameters } from "../../../../../src/scripts/unpopularityMetric/bestMetric/spreadParameters"
import { Parameter, ParameterValue } from "../../../../../src/scripts/unpopularityMetric/sumOfSquares"

describe("computeSpreadParameters", () => {
    it("given a scope returns a list of the dynamic parameters which are on the all-bins (first) submetric scope", () => {
        const scope = [
            {
                [ Parameter.K_AS_COEFFICIENT ]: {
                    center: 1 as ParameterValue,
                    span: 2 as Span<ParameterValue>,
                    resolution: 2 as Resolution<ParameterValue>,
                },
                // TODO: okay think about what it's going to do with the non-dynamic ones
                //  although also realize that you now have kinda three things -
                //  static ones (booleans), dynamic ones, and the ones with value but which are locked
                //  well actually I think the latter are actually just static
                //  that's just a good reason you were smart to change the name from "DynamicParameterValue" :)
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

        const result = computeSpreadParameters(scope)

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

        const result = computeSpreadParameters(scope)

        expect(result).toEqual(undefined)
    })
})
