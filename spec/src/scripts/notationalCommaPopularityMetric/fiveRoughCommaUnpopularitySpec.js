const {computeFiveRoughCommaUnpopularity} = require("../../../../src/scripts/notationalCommaPopularityMetric/fiveRoughCommaUnpopularity")
const {computePrimeContentUnpopularity} = require("../../../../src/scripts/notationalCommaPopularityMetric/primeContentUnpopularity")

describe("computeFiveRoughCommaUnpopularity", () => {
    it("when k = 1 (default), and two 5-rough ratios have the same sopfr, but one has its primes all lopsided on one side, they still get ranked the same", () => {
        const balancedFiveRoughRatio = [11, 7]
        const lopsidedFiveRoughRatio = [77, 1]
        const k = 1
        const weight = 1
        const parameters = {soapfar: {adjustments: {k, weight}}}

        const balancedResult = computeFiveRoughCommaUnpopularity(balancedFiveRoughRatio, parameters)
        const lopsidedResult = computeFiveRoughCommaUnpopularity(lopsidedFiveRoughRatio, parameters)

        expect(balancedResult).toBe(lopsidedResult)
    })

    it("when k < 1, two 5-rough ratios have the same sopfr, but one has its primes all lopsided on one side, it gets ranked worse", () => {
        const balancedFiveRoughRatio = [11, 7]
        const lopsidedFiveRoughRatio = [77, 1]
        const k = 0.9
        const weight = 1
        const parameters = {soapfar: {adjustments: {k, weight}}}

        const balancedResult = computeFiveRoughCommaUnpopularity(balancedFiveRoughRatio, parameters)
        const lopsidedResult = computeFiveRoughCommaUnpopularity(lopsidedFiveRoughRatio, parameters)

        expect(balancedResult).toBeLessThan(lopsidedResult)
    })

    it("applies weights to each submetric", () => {
        const fiveRoughRatio = [77, 1]
        const parameters = {soapfar: {adjustments: {weight: 0.5}}, soapf: {adjustments: {weight: 0.3}}}

        const result = computeFiveRoughCommaUnpopularity(fiveRoughRatio, parameters)

        expect(result).toBe(
            0.5 * computePrimeContentUnpopularity([0, 0, 0, 1, 1]) +
            0.3 * computePrimeContentUnpopularity([0, 0, 0, 1, 1], {withRepetition: false}),
        )
    })

    it("should not return NaN", () => {
        const parameters = {
            soapfar: {
                adjustments: {
                    weight: 1,
                    k: 0,
                    a: 2,
                    aIsBaseNotPower: 1,
                    w: -6,
                    x: -2,
                    y: 0.14285714285714285,
                    v: -0.8571428571428572,
                    t: -1.6142857142857143,
                },
            },
        }
        const fiveRoughRatio = [5, 1]

        const result = computeFiveRoughCommaUnpopularity(fiveRoughRatio, parameters)

        expect(result).not.toBeNaN()
    })
})
