import {checkSubmetricsForIssues} from "../../../../../src/scripts/unpopularityMetric/sumOfSquares/check"
import {PARAMETER} from "../../../../../src/scripts/unpopularityMetric/constants"

describe("checkSubmetricsForIssues", () => {
    it("gives a good error when a is a base but it is 1", () => {
        const submetrics = [
            {
                [PARAMETER.A]: 1,
                [PARAMETER.A_IS_BASE]: true,
            },
        ]

        expect(() => checkSubmetricsForIssues(submetrics)).toThrowError("Submetric has base 1 and will calculate undefined antivotes.")
    })

    it("gives a good error when a is a base but it is negative", () => {
        const submetrics = [
            {
                [PARAMETER.A]: -2.23,
                [PARAMETER.A_IS_BASE]: true,
            },
        ]

        expect(() => checkSubmetricsForIssues(submetrics)).toThrowError("Submetric has negative base and will calculate undefined antivotes.")
    })

    it("gives a good error when a is tried to be used both as a base and an exponent", () => {
        const submetrics = [
            {
                [PARAMETER.A_IS_EXPONENT]: true,
                [PARAMETER.A_IS_BASE]: true,
            },
        ]

        expect(() => checkSubmetricsForIssues(submetrics)).toThrowError("Submetric cannot specify a to be both an exponent and a base.")
    })

    it("gives a good error when j is tried to be used both as a base and an exponent", () => {
        const submetrics = [
            {
                [PARAMETER.J_IS_EXPONENT]: true,
                [PARAMETER.J_IS_BASE]: true,
            },
        ]

        expect(() => checkSubmetricsForIssues(submetrics)).toThrowError("Submetric cannot specify j to be both an exponent and a base.")
    })

    it("gives a good error when k is tried to be used both as a base and an exponent", () => {
        const submetrics = [
            {
                [PARAMETER.K_IS_EXPONENT]: true,
                [PARAMETER.K_IS_BASE]: true,
            },
        ]

        expect(() => checkSubmetricsForIssues(submetrics)).toThrowError("Submetric cannot specify k to be both an exponent and a base.")
    })

    it("gives a good error when weight is tried to be used both as a base and an exponent", () => {
        const submetrics = [
            {
                [PARAMETER.WEIGHT_IS_EXPONENT]: true,
                [PARAMETER.WEIGHT_IS_BASE]: true,
            },
        ]

        expect(() => checkSubmetricsForIssues(submetrics)).toThrowError("Submetric cannot specify weight to be both an exponent and a base.")
    })

    it("gives a good error when both j and k are included on the same submetrics (because you could always forever increase them together to get the same result)", () => {
        const submetrics = [
            {
                [PARAMETER.J]: 3,
                [PARAMETER.K]: 3,
            },
        ]

        expect(() => checkSubmetricsForIssues(submetrics)).toThrowError("Submetric cannot specify both j and k.")
    })

    // todo: wait shouldn't it be bad if you got [{soapfar,k},{soapfar,j}] ??

    // todo: okay this one crashes things though for sure: [{"submetricType":"soapf"},{"submetricType":"soapfar","w":{"center":0,"range":12,"count":2},"a":{"center":2,"range":4,"count":2}}]
})
