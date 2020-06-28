const {computeWeightedSopifgtt} = require("../../../../src/scripts/notationalCommaPopularityMetric/weightedSopifgtt")

describe("computeWeightedSopifgtt", () => {
    it("sums the absolute values of the prime factors greater than three in the monzo, mapped to the prime count function, raised to the provided power (weight)", () => {
        const monzo = [
            5,  // 1
            6,  // 2
            0,  // 3
            0,  // 4
            1,  // 5
            -1, // 6
            2   // 7
        ]
        const a = 0.56

        const result = computeWeightedSopifgtt(monzo, a)

        expect(result).toBe(5 ** 0.56 + 6 ** 0.56 + 7 ** 0.56 + 7 ** 0.56)
    })

    it("works for an empty monzo", () => {
        const monzo = []
        const a = 0.56

        const result = computeWeightedSopifgtt(monzo, a)

        expect(result).toBe(0)
    })

    it("works for a simple integer", () => {
        const integer = 3751
        const a = 0.56

        const result = computeWeightedSopifgtt(integer, a)

        expect(result).toBe(5 ** 0.56 + 5 ** 0.56 + 11 ** 0.56)
    })
})
