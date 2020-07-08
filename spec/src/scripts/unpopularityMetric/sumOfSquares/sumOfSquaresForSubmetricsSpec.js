const {computeSumOfSquaresForSubmetrics} = require("../../../../../src/scripts/unpopularityMetric/sumOfSquares/sumOfSquaresForSubmetrics")
const {PARAMETER, SUBMETRIC_TYPE} = require("../../../../../src/scripts/unpopularityMetric/constants")

describe("computeSumOfSquaresForSubmetrics", () => {
    it("returns the sum-of-squares for a given submetric combination", () => {
        const submetrics = [
            {
                [PARAMETER.K]: 0.038,
                [PARAMETER.A]: 1.994,
                [PARAMETER.A_IS_BASE]: true,
                [PARAMETER.Y]: 0.455,
                [PARAMETER.W]: -2.08,
                [PARAMETER.NUMERATOR_IS_NUMINATOR]: false,
            },
            {
                [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPFAR,
                [PARAMETER.WEIGHT]: 0.577,
                [PARAMETER.NUMERATOR_IS_NUMINATOR]: false,
            },
        ]

        const result = computeSumOfSquaresForSubmetrics(submetrics)

        expect(result).toBe(0.004260809896143936)
    })

    it("gives a good error when a is a base but it is 1", () => {
        const submetrics = [
            {
                [PARAMETER.A]: 1,
                [PARAMETER.A_IS_BASE]: true,
            },
        ]

        expect(() => computeSumOfSquaresForSubmetrics(submetrics)).toThrowError("Submetric has base 1 and will calculate undefined antivotes.")
    })

    it("gives a good error when a is a base but it is negative", () => {
        const submetrics = [
            {
                [PARAMETER.A]: -2.23,
                [PARAMETER.A_IS_BASE]: true,
            },
        ]

        expect(() => computeSumOfSquaresForSubmetrics(submetrics)).toThrowError("Submetric has negative base and will calculate undefined antivotes.")
    })

    it("gives a good error when a is tried to be used both as a base and an exponent", () => {
        const submetrics = [
            {
                [PARAMETER.A_IS_EXPONENT]: true,
                [PARAMETER.A_IS_BASE]: true,
            },
        ]

        expect(() => computeSumOfSquaresForSubmetrics(submetrics)).toThrowError("Submetric cannot specify a to be both an exponent and a base.")
    })

    it("gives a good error when j is tried to be used both as a base and an exponent", () => {
        const submetrics = [
            {
                [PARAMETER.J_IS_EXPONENT]: true,
                [PARAMETER.J_IS_BASE]: true,
            },
        ]

        expect(() => computeSumOfSquaresForSubmetrics(submetrics)).toThrowError("Submetric cannot specify j to be both an exponent and a base.")
    })

    it("gives a good error when k is tried to be used both as a base and an exponent", () => {
        const submetrics = [
            {
                [PARAMETER.K_IS_EXPONENT]: true,
                [PARAMETER.K_IS_BASE]: true,
            },
        ]

        expect(() => computeSumOfSquaresForSubmetrics(submetrics)).toThrowError("Submetric cannot specify k to be both an exponent and a base.")
    })

    it("gives a good error when weight is tried to be used both as a base and an exponent", () => {
        const submetrics = [
            {
                [PARAMETER.WEIGHT_IS_EXPONENT]: true,
                [PARAMETER.WEIGHT_IS_BASE]: true,
            },
        ]

        expect(() => computeSumOfSquaresForSubmetrics(submetrics)).toThrowError("Submetric cannot specify weight to be both an exponent and a base.")
    })
})
