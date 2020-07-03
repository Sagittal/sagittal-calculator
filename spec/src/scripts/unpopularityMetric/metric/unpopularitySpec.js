const {computeUnpopularity} = require("../../../../../src/scripts/unpopularityMetric/metric/unpopularity")
const {computeSubmetricUnpopularity} = require("../../../../../src/scripts/unpopularityMetric/metric/submetricUnpopularity")
const {SUBMETRIC_NAME, SUBMETRIC_TYPE, ADJUSTMENT} = require("../../../../../src/scripts/unpopularityMetric/parameters/constants")

describe("computeUnpopularity", () => {
    it("when k = 1 (default), and two 5-rough ratios have the same sopfr, but one has its primes all lopsided on one side, they still get ranked the same", () => {
        const balancedFiveRoughRatio = [11, 7]
        const lopsidedFiveRoughRatio = [77, 1]
        const parameters = {
            [SUBMETRIC_NAME.SOAPFAR]: {
                adjustments: {[ADJUSTMENT.K]: 1},
                submetricType: SUBMETRIC_TYPE[SUBMETRIC_NAME.SOAPFAR],
            },
        }

        const balancedResult = computeUnpopularity(balancedFiveRoughRatio, parameters)
        const lopsidedResult = computeUnpopularity(lopsidedFiveRoughRatio, parameters)

        expect(balancedResult).toBe(lopsidedResult)
    })

    it("when k < 1, two 5-rough ratios have the same sopfr, but one has its primes all lopsided on one side, it gets ranked worse", () => {
        const balancedFiveRoughRatio = [11, 7]
        const lopsidedFiveRoughRatio = [77, 1]
        const parameters = {
            [SUBMETRIC_NAME.SOAPFAR]: {
                adjustments: {[ADJUSTMENT.K]: 0.9},
                submetricType: SUBMETRIC_TYPE[SUBMETRIC_NAME.SOAPFAR],
            },
        }

        const balancedResult = computeUnpopularity(balancedFiveRoughRatio, parameters)
        const lopsidedResult = computeUnpopularity(lopsidedFiveRoughRatio, parameters)

        expect(balancedResult).toBeLessThan(lopsidedResult)
    })

    it("applies weights to each submetric", () => {
        const fiveRoughRatio = [77, 1]
        const parameters = {
            [SUBMETRIC_NAME.SOAPFAR]: {
                adjustments: {[ADJUSTMENT.WEIGHT]: 0.5},
                submetricType: SUBMETRIC_TYPE[SUBMETRIC_NAME.SOAPFAR],
            },
            [SUBMETRIC_NAME.SOAPF]: {
                adjustments: {[ADJUSTMENT.WEIGHT]: 0.3},
                submetricType: SUBMETRIC_TYPE[SUBMETRIC_NAME.SOAPF],
            },
        }

        const result = computeUnpopularity(fiveRoughRatio, parameters)

        expect(result).toBe(
            0.5 * computeSubmetricUnpopularity([0, 0, 0, 1, 1]) +
            0.3 * computeSubmetricUnpopularity([0, 0, 0, 1, 1], {withRepetition: false}),
        )
    })

    it("should not return NaN", () => {
        const parameters = {
            [SUBMETRIC_NAME.SOAPFAR]: {
                adjustments: {
                    [ADJUSTMENT.WEIGHT]: 1,
                    [ADJUSTMENT.K]: 0,
                    [ADJUSTMENT.A]: 2,
                    [ADJUSTMENT.A_IS_BASE_NOT_POWER]: 1,
                    [ADJUSTMENT.W]: -6,
                    [ADJUSTMENT.X]: -2,
                    [ADJUSTMENT.Y]: 0.14285714285714285,
                    [ADJUSTMENT.V]: -0.8571428571428572,
                    [ADJUSTMENT.T]: -1.6142857142857143,
                },
                submetricType: SUBMETRIC_TYPE[SUBMETRIC_NAME.SOAPFAR],
            },
        }
        const fiveRoughRatio = [5, 1]

        const result = computeUnpopularity(fiveRoughRatio, parameters)

        expect(result).not.toBeNaN()
    })
})
