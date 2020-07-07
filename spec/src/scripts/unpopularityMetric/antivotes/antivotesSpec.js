const {computeAntivotes} = require("../../../../../src/scripts/unpopularityMetric/antivotes/antivotes")
const {computeSubmetricAntivotes} = require("../../../../../src/scripts/unpopularityMetric/antivotes/submetricAntivotes")
const {SUBMETRIC_TYPE, PARAMETER} = require("../../../../../src/scripts/unpopularityMetric/constants")

describe("computeAntivotes", () => {
    it("when k = 1 (default), and two 5-rough ratios have the same sopfr, but one has its primes all lopsided on one side, they still get ranked the same", () => {
        const balancedFiveRoughRatio = [11, 7]
        const lopsidedFiveRoughRatio = [77, 1]
        const submetrics = [
            {
                [PARAMETER.K]: 1,
            },
        ]

        const balancedResult = computeAntivotes(balancedFiveRoughRatio, submetrics)
        const lopsidedResult = computeAntivotes(lopsidedFiveRoughRatio, submetrics)

        expect(balancedResult).toBe(lopsidedResult)
    })

    it("when k < 1, two 5-rough ratios have the same sopfr, but one has its primes all lopsided on one side, it gets ranked worse", () => {
        const balancedFiveRoughRatio = [11, 7]
        const lopsidedFiveRoughRatio = [77, 1]
        const submetrics = [
            {
                [PARAMETER.K]: 0.9,
            },
        ]

        const balancedResult = computeAntivotes(balancedFiveRoughRatio, submetrics)
        const lopsidedResult = computeAntivotes(lopsidedFiveRoughRatio, submetrics)

        expect(balancedResult).toBeLessThan(lopsidedResult)
    })

    it("applies weights to each submetric", () => {
        const fiveRoughRatio = [77, 1]
        const submetrics = [
            {
                [PARAMETER.WEIGHT]: 0.5,
            },
            {
                [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPF,
                [PARAMETER.WEIGHT]: 0.3,
            },
        ]

        const result = computeAntivotes(fiveRoughRatio, submetrics)

        expect(result).toBe(
            0.5 * computeSubmetricAntivotes([0, 0, 0, 1, 1]) +
            0.3 * computeSubmetricAntivotes([0, 0, 0, 1, 1], {withRepetition: false}),
        )
    })

    it("should not return NaN", () => {
        const submetrics = [
            {
                [PARAMETER.WEIGHT]: 1,
                [PARAMETER.K]: 0,
                [PARAMETER.A]: 2,
                [PARAMETER.A_IS_BASE]: true,
                [PARAMETER.W]: -6,
                [PARAMETER.X]: -2,
                [PARAMETER.Y]: 0.14285714285714285,
                [PARAMETER.V]: -0.8571428571428572,
                [PARAMETER.T]: -1.6142857142857143,
            },
        ]
        const fiveRoughRatio = [5, 1]

        const result = computeAntivotes(fiveRoughRatio, submetrics)

        expect(result).not.toBeNaN()
    })
})
