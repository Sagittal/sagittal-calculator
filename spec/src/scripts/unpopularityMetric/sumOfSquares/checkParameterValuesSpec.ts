import { Parameter, ParameterValue, Submetric } from "../../../../../src/scripts/unpopularityMetric/sumOfSquares"
import { checkSubmetricsForInvalidParameterValueCombinations } from "../../../../../src/scripts/unpopularityMetric/sumOfSquares/checkParameterValues"

describe("checkSubmetricsForInvalidParameterValueCombinations", () => {
    it("gives a good error when a is a base but it is 1", () => {
        const submetrics: Submetric[] = [
            {
                [ Parameter.SUM ]: true,
                [ Parameter.A_AS_LOGARITHM_BASE ]: 1 as ParameterValue,
            },
        ]

        expect(() => checkSubmetricsForInvalidParameterValueCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"aAsLogarithmBase":1} has a of base 1 and will compute undefined antivotes.`)
    })

    it("gives a good error when a is a base but it is negative", () => {
        const submetrics = [
            {
                [ Parameter.SUM ]: true,
                [ Parameter.A_AS_LOGARITHM_BASE ]: -2.23 as ParameterValue,
            },
        ]

        expect(() => checkSubmetricsForInvalidParameterValueCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"aAsLogarithmBase":-2.23} has a of negative base and will compute undefined antivotes.`)
    })

    it("gives a good error when j is a base but it is 1", () => {
        const submetrics: Submetric[] = [
            {
                [ Parameter.SUM ]: true,
                [ Parameter.J_AS_LOGARITHM_BASE ]: 1 as ParameterValue,
            },
        ]

        expect(() => checkSubmetricsForInvalidParameterValueCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"jAsLogarithmBase":1} has j of base 1 and will compute undefined antivotes.`)
    })

    it("gives a good error when j is a base but it is negative", () => {
        const submetrics = [
            {
                [ Parameter.SUM ]: true,
                [ Parameter.J_AS_LOGARITHM_BASE ]: -2.23 as ParameterValue,
            },
        ]

        expect(() => checkSubmetricsForInvalidParameterValueCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"jAsLogarithmBase":-2.23} has j of negative base and will compute undefined antivotes.`)
    })

    it("gives a good error when k is a base but it is 1", () => {
        const submetrics: Submetric[] = [
            {
                [ Parameter.SUM ]: true,
                [ Parameter.K_AS_LOGARITHM_BASE ]: 1 as ParameterValue,
            },
        ]

        expect(() => checkSubmetricsForInvalidParameterValueCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"kAsLogarithmBase":1} has k of base 1 and will compute undefined antivotes.`)
    })

    it("gives a good error when k is a base but it is negative", () => {
        const submetrics = [
            {
                [ Parameter.SUM ]: true,
                [ Parameter.K_AS_LOGARITHM_BASE ]: -2.23 as ParameterValue,
            },
        ]

        expect(() => checkSubmetricsForInvalidParameterValueCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"kAsLogarithmBase":-2.23} has k of negative base and will compute undefined antivotes.`)
    })

    it("gives a good error when weight is a base but it is 1", () => {
        const submetrics: Submetric[] = [
            {
                [ Parameter.SUM ]: true,
                [ Parameter.WEIGHT_AS_LOGARITHM_BASE ]: 1 as ParameterValue,
            },
        ]

        expect(() => checkSubmetricsForInvalidParameterValueCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"weightAsLogarithmBase":1} has weight of base 1 and will compute undefined antivotes.`)
    })

    it("gives a good error when weight is a base but it is negative", () => {
        const submetrics = [
            {
                [ Parameter.SUM ]: true,
                [ Parameter.WEIGHT_AS_LOGARITHM_BASE ]: -2.23 as ParameterValue,
            },
        ]

        expect(() => checkSubmetricsForInvalidParameterValueCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"weightAsLogarithmBase":-2.23} has weight of negative base and will compute undefined antivotes.`)
    })
})
