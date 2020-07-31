import { checkSubmetricsForInvalidParameterCombinations } from "../../../../../src/scripts/unpopularityMetric/sumOfSquares/checkParameters"
import { Parameter, ParameterValue, Submetric } from "../../../../../src/scripts/unpopularityMetric/types"

describe("checkSubmetricsForInvalidParameterCombinations", () => {
    it("gives a good error when none of sum, count, or max are provided", () => {
        const submetrics: Submetric[] = [
            {
                [ Parameter.A ]: 2 as ParameterValue,
            },
        ]

        expect(() => checkSubmetricsForInvalidParameterCombinations(submetrics)).toThrowError(`Submetric {"a":2} has no provided operation parameter (sum, count, or max); exactly one of these is required.`)
    })

    it("gives a good error when more than one of sum, count, or max are provided", () => {
        const submetrics: Submetric[] = [
            {
                [ Parameter.SUM ]: true,
                [ Parameter.COUNT ]: true,
            },
        ]

        expect(() => checkSubmetricsForInvalidParameterCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"count":true} has more than one provided operation parameter (sum, count, or max); exactly one of these is required.`)
    })

    it("gives a good error when a is tried to be used both as a base and an exponent", () => {
        const submetrics = [
            {
                [ Parameter.SUM ]: true,
                [ Parameter.A_IS_EXPONENT ]: true,
                [ Parameter.A_IS_BASE ]: true,
            },
        ]

        expect(() => checkSubmetricsForInvalidParameterCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"aIsExponent":true,"aIsBase":true} cannot specify a to be both an exponent and a base.`)
    })

    it("gives a good error when j is tried to be used both as a base and an exponent", () => {
        const submetrics = [
            {
                [ Parameter.SUM ]: true,
                [ Parameter.J_IS_EXPONENT ]: true,
                [ Parameter.J_IS_BASE ]: true,
            },
        ]

        expect(() => checkSubmetricsForInvalidParameterCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"jIsExponent":true,"jIsBase":true} cannot specify j to be both an exponent and a base.`)
    })

    it("gives a good error when k is tried to be used both as a base and an exponent", () => {
        const submetrics = [
            {
                [ Parameter.SUM ]: true,
                [ Parameter.K_IS_EXPONENT ]: true,
                [ Parameter.K_IS_BASE ]: true,
            },
        ]

        expect(() => checkSubmetricsForInvalidParameterCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"kIsExponent":true,"kIsBase":true} cannot specify k to be both an exponent and a base.`)
    })

    it("gives a good error when weight is tried to be used both as a base and an exponent", () => {
        const submetrics = [
            {
                [ Parameter.SUM ]: true,
                [ Parameter.WEIGHT_IS_EXPONENT ]: true,
                [ Parameter.WEIGHT_IS_BASE ]: true,
            },
        ]

        expect(() => checkSubmetricsForInvalidParameterCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"weightIsExponent":true,"weightIsBase":true} cannot specify weight to be both an exponent and a base.`)
    })

    it("gives a good error when both j and k are included on the same submetrics (because you could always forever increase them together to get the same result)", () => {
        const submetrics = [
            {
                [ Parameter.SUM ]: true,
                [ Parameter.J ]: 3 as ParameterValue,
                [ Parameter.K ]: 3 as ParameterValue,
            },
        ]

        expect(() => checkSubmetricsForInvalidParameterCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"j":3,"k":3} cannot specify both j and k.`)
    })
})
