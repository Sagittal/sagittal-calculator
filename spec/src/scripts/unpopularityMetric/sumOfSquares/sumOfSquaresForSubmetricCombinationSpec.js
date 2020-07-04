const {computeSumOfSquaresForSubmetricCombination} = require("../../../../../src/scripts/unpopularityMetric/sumOfSquares/sumOfSquaresForSubmetricCombination")
const {PARAMETER, SUBMETRIC_TYPE, USE_AS} = require("../../../../../src/scripts/unpopularityMetric/constants")

describe("computeSumOfSquaresForSubmetricCombination", () => {
    it("returns the sum-of-squares for a given submetric combination", () => {
        const submetricCombination = [
            {
                [PARAMETER.K]: 0.038,
                [PARAMETER.A]: 1.994,
                [PARAMETER.A_IS_BASE_OR_POWER]: USE_AS.BASE,
                [PARAMETER.Y]: 0.455,
                [PARAMETER.W]: -2.08,
            },
            {
                [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPFAR,
                [PARAMETER.WEIGHT]: 0.577,
            },
        ]

        const result = computeSumOfSquaresForSubmetricCombination(submetricCombination)

        expect(result).toBe(0.004260809896143936)
    })

    it("gives a good error when a is a base but it is 1", () => {
        const submetricCombination = [
            {
                [PARAMETER.A]: 1,
                [PARAMETER.A_IS_BASE_OR_POWER]: USE_AS.BASE,
            },
        ]

        expect(() => computeSumOfSquaresForSubmetricCombination(submetricCombination)).toThrowError("Submetric has base 1 and will calculate undefined antivotes.")
    })

    it("gives a good error when a is a base but it is negative", () => {
        const submetricCombination = [
            {
                [PARAMETER.A]: -2.23,
                [PARAMETER.A_IS_BASE_OR_POWER]: USE_AS.BASE,
            },
        ]

        expect(() => computeSumOfSquaresForSubmetricCombination(submetricCombination)).toThrowError("Submetric has negative base and will calculate undefined antivotes.")
    })
})
