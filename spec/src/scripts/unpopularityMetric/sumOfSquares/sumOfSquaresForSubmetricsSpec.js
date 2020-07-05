const {computeSumOfSquaresForSubmetrics} = require("../../../../../src/scripts/unpopularityMetric/sumOfSquares/sumOfSquaresForSubmetrics")
const {PARAMETER, SUBMETRIC_TYPE, USE_AS} = require("../../../../../src/scripts/unpopularityMetric/constants")

describe("computeSumOfSquaresForSubmetrics", () => {
    it("returns the sum-of-squares for a given submetric combination", () => {
        const submetrics = [
            {
                [PARAMETER.K]: 0.038,
                [PARAMETER.A]: 1.994,
                [PARAMETER.A_IS_BASE_OR_EXPONENT]: USE_AS.BASE,
                [PARAMETER.Y]: 0.455,
                [PARAMETER.W]: -2.08,
            },
            {
                [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPFAR,
                [PARAMETER.WEIGHT]: 0.577,
            },
        ]

        const result = computeSumOfSquaresForSubmetrics(submetrics)

        expect(result).toBe(0.004260809896143936)
    })

    it("gives a good error when a is a base but it is 1", () => {
        const submetrics = [
            {
                [PARAMETER.A]: 1,
                [PARAMETER.A_IS_BASE_OR_EXPONENT]: USE_AS.BASE,
            },
        ]

        expect(() => computeSumOfSquaresForSubmetrics(submetrics)).toThrowError("Submetric has base 1 and will calculate undefined antivotes.")
    })

    it("gives a good error when a is a base but it is negative", () => {
        const submetrics = [
            {
                [PARAMETER.A]: -2.23,
                [PARAMETER.A_IS_BASE_OR_EXPONENT]: USE_AS.BASE,
            },
        ]

        expect(() => computeSumOfSquaresForSubmetrics(submetrics)).toThrowError("Submetric has negative base and will calculate undefined antivotes.")
    })
})
