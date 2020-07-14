import { checkSubmetricsForIssues } from "../../../../../src/scripts/unpopularityMetric/sumOfSquares/check"
import { Parameter, ParameterValue, Submetric } from "../../../../../src/scripts/unpopularityMetric/types"

describe("checkSubmetricsForIssues", () => {
    it("gives a good error when a is a base but it is 1", () => {
        const submetrics: Submetric[] = [
            {
                [ Parameter.A ]: 1 as ParameterValue,
                [ Parameter.A_IS_BASE ]: true,
            },
        ]

        expect(() => checkSubmetricsForIssues(submetrics)).toThrowError("Submetric has base 1 and will calculate undefined antivotes.")
    })

    it("gives a good error when a is a base but it is negative", () => {
        const submetrics = [
            {
                [ Parameter.A ]: -2.23 as ParameterValue,
                [ Parameter.A_IS_BASE ]: true,
            },
        ]

        expect(() => checkSubmetricsForIssues(submetrics)).toThrowError("Submetric has negative base and will calculate undefined antivotes.")
    })

    it("gives a good error when a is tried to be used both as a base and an exponent", () => {
        const submetrics = [
            {
                [ Parameter.A_IS_EXPONENT ]: true,
                [ Parameter.A_IS_BASE ]: true,
            },
        ]

        expect(() => checkSubmetricsForIssues(submetrics)).toThrowError("Submetric cannot specify a to be both an exponent and a base.")
    })

    it("gives a good error when j is tried to be used both as a base and an exponent", () => {
        const submetrics = [
            {
                [ Parameter.J_IS_EXPONENT ]: true,
                [ Parameter.J_IS_BASE ]: true,
            },
        ]

        expect(() => checkSubmetricsForIssues(submetrics)).toThrowError("Submetric cannot specify j to be both an exponent and a base.")
    })

    it("gives a good error when k is tried to be used both as a base and an exponent", () => {
        const submetrics = [
            {
                [ Parameter.K_IS_EXPONENT ]: true,
                [ Parameter.K_IS_BASE ]: true,
            },
        ]

        expect(() => checkSubmetricsForIssues(submetrics)).toThrowError("Submetric cannot specify k to be both an exponent and a base.")
    })

    it("gives a good error when weight is tried to be used both as a base and an exponent", () => {
        const submetrics = [
            {
                [ Parameter.WEIGHT_IS_EXPONENT ]: true,
                [ Parameter.WEIGHT_IS_BASE ]: true,
            },
        ]

        expect(() => checkSubmetricsForIssues(submetrics)).toThrowError("Submetric cannot specify weight to be both an exponent and a base.")
    })

    it("gives a good error when both j and k are included on the same submetrics (because you could always forever increase them together to get the same result)", () => {
        const submetrics = [
            {
                [ Parameter.J ]: 3 as ParameterValue,
                [ Parameter.K ]: 3 as ParameterValue,
            },
        ]

        expect(() => checkSubmetricsForIssues(submetrics)).toThrowError("Submetric cannot specify both j and k.")
    })
})
