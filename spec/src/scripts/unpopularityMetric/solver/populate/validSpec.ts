import { INITIAL_PARAMETER_SCOPES } from "../../../../../../src/scripts/unpopularityMetric/solver/populate/constants"
import { computeIsValidSubmetricScope } from "../../../../../../src/scripts/unpopularityMetric/solver/populate/valid"
import { Parameter, ParameterValue } from "../../../../../../src/scripts/unpopularityMetric/types"

describe("computeIsValidSubmetricScope", () => {
    it("does not filter the scope out when it is a-okay", () => {
        const submetricScope = {
            [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
            [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
            [ Parameter.A_IS_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_IS_BASE ],
        }

        const result = computeIsValidSubmetricScope(submetricScope)

        expect(result).toBeTruthy()
    })

    it("filters the scope out when no parameter is sum, count, or max", () => {
        const submetricScope = {
            [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
        }

        const result = computeIsValidSubmetricScope(submetricScope)

        expect(result).toBeFalsy()
    })

    it("filters the scope out when more than one parameter is sum, count, or max", () => {
        const submetricScope = {
            [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
            [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
        }

        const result = computeIsValidSubmetricScope(submetricScope)

        expect(result).toBeFalsy()
    })

    it("filters the scope out when a is tried to be used both as a base and an exponent", () => {
        const submetricScope = {
            [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
            [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
            [ Parameter.A_IS_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_IS_EXPONENT ],
            [ Parameter.A_IS_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_IS_BASE ],
        }

        const result = computeIsValidSubmetricScope(submetricScope)

        expect(result).toBeFalsy()
    })

    it("filters the scope out when j is tried to be used both as a base and an exponent", () => {
        const submetricScope = {
            [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
            [ Parameter.J ]: INITIAL_PARAMETER_SCOPES[ Parameter.J ],
            [ Parameter.J_IS_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_IS_EXPONENT ],
            [ Parameter.J_IS_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.J_IS_BASE ],
        }

        const result = computeIsValidSubmetricScope(submetricScope)

        expect(result).toBeFalsy()
    })

    it("filters the scope out when k is tried to be used both as a base and an exponent", () => {
        const submetricScope = {
            [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
            [ Parameter.K ]: INITIAL_PARAMETER_SCOPES[ Parameter.K ],
            [ Parameter.K_IS_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_IS_EXPONENT ],
            [ Parameter.K_IS_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.K_IS_BASE ],
        }

        const result = computeIsValidSubmetricScope(submetricScope)

        expect(result).toBeFalsy()
    })

    it("filters the scope out when weight is tried to be used both as a base and an exponent", () => {
        const submetricScope = {
            [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
            [ Parameter.WEIGHT ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT ],
            [ Parameter.WEIGHT_IS_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_IS_EXPONENT ],
            [ Parameter.WEIGHT_IS_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.WEIGHT_IS_BASE ],
        }

        const result = computeIsValidSubmetricScope(submetricScope)

        expect(result).toBeFalsy()
    })

    it("filters the scope out when both j and k are included (because you could always forever increase them together to get the same result)", () => {
        const submetricScope = {
            [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
            [ Parameter.J ]: 3 as ParameterValue,
            [ Parameter.K ]: 3 as ParameterValue,
        }

        const result = computeIsValidSubmetricScope(submetricScope)

        expect(result).toBeFalsy()
    })
})
