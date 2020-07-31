import { checkSubmetricsForInvalidParameterValueCombinations } from "../../../../../src/scripts/unpopularityMetric/sumOfSquares/checkParameterValues"
import { Parameter, ParameterValue, Submetric } from "../../../../../src/scripts/unpopularityMetric/types"

describe("checkSubmetricsForInvalidParameterValueCombinations", () => {
    it("gives a good error when a is a base but it is 1", () => {
        const submetrics: Submetric[] = [
            {
                [ Parameter.SUM ]: true,
                [ Parameter.A ]: 1 as ParameterValue,
                [ Parameter.A_IS_BASE ]: true,
            },
        ]

        expect(() => checkSubmetricsForInvalidParameterValueCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"a":1,"aIsBase":true} has a of base 1 and will compute undefined antivotes.`)
    })

    it("gives a good error when a is a base but it is negative", () => {
        const submetrics = [
            {
                [ Parameter.SUM ]: true,
                [ Parameter.A ]: -2.23 as ParameterValue,
                [ Parameter.A_IS_BASE ]: true,
            },
        ]

        expect(() => checkSubmetricsForInvalidParameterValueCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"a":-2.23,"aIsBase":true} has a of negative base and will compute undefined antivotes.`)
    })

    it("gives a good error when j is a base but it is 1", () => {
        const submetrics: Submetric[] = [
            {
                [ Parameter.SUM ]: true,
                [ Parameter.J ]: 1 as ParameterValue,
                [ Parameter.J_IS_BASE ]: true,
            },
        ]

        expect(() => checkSubmetricsForInvalidParameterValueCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"j":1,"jIsBase":true} has j of base 1 and will compute undefined antivotes.`)
    })

    it("gives a good error when j is a base but it is negative", () => {
        const submetrics = [
            {
                [ Parameter.SUM ]: true,
                [ Parameter.J ]: -2.23 as ParameterValue,
                [ Parameter.J_IS_BASE ]: true,
            },
        ]

        expect(() => checkSubmetricsForInvalidParameterValueCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"j":-2.23,"jIsBase":true} has j of negative base and will compute undefined antivotes.`)
    })

    it("gives a good error when k is a base but it is 1", () => {
        const submetrics: Submetric[] = [
            {
                [ Parameter.SUM ]: true,
                [ Parameter.K ]: 1 as ParameterValue,
                [ Parameter.K_IS_BASE ]: true,
            },
        ]

        expect(() => checkSubmetricsForInvalidParameterValueCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"k":1,"kIsBase":true} has k of base 1 and will compute undefined antivotes.`)
    })

    it("gives a good error when k is a base but it is negative", () => {
        const submetrics = [
            {
                [ Parameter.SUM ]: true,
                [ Parameter.K ]: -2.23 as ParameterValue,
                [ Parameter.K_IS_BASE ]: true,
            },
        ]

        expect(() => checkSubmetricsForInvalidParameterValueCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"k":-2.23,"kIsBase":true} has k of negative base and will compute undefined antivotes.`)
    })

    it("gives a good error when weight is a base but it is 1", () => {
        const submetrics: Submetric[] = [
            {
                [ Parameter.SUM ]: true,
                [ Parameter.WEIGHT ]: 1 as ParameterValue,
                [ Parameter.WEIGHT_IS_BASE ]: true,
            },
        ]

        expect(() => checkSubmetricsForInvalidParameterValueCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"weight":1,"weightIsBase":true} has weight of base 1 and will compute undefined antivotes.`)
    })

    it("gives a good error when weight is a base but it is negative", () => {
        const submetrics = [
            {
                [ Parameter.SUM ]: true,
                [ Parameter.WEIGHT ]: -2.23 as ParameterValue,
                [ Parameter.WEIGHT_IS_BASE ]: true,
            },
        ]

        expect(() => checkSubmetricsForInvalidParameterValueCombinations(submetrics)).toThrowError(`Submetric {"sum":true,"weight":-2.23,"weightIsBase":true} has weight of negative base and will compute undefined antivotes.`)
    })
})
