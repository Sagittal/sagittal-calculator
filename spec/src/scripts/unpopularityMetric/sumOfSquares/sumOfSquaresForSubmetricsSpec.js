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
})
