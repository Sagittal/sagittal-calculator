const {computeWeightedSoupifgtt} = require("../../../../src/scripts/notationalCommaPopularityMetric/weightedSoupifgtt")

describe("computeWeightedSoupifgtt", () => {
    it("sums the absolute values of the unique prime factors greater than three in the monzo, mapped to the prime count function, raised to the provided power (weight)", () => {
        const monzo = [
            5,  // 1
            6,  // 2
            0,  // 3
            0,  // 4
            1,  // 5
            -1, // 6
            2,  // 7
        ]
        const b = 0.56

        const result = computeWeightedSoupifgtt(monzo, b)

        expect(result).toBe(5 ** 0.56 + 6 ** 0.56 + 7 ** 0.56)
    })

    it("works for an empty monzo", () => {
        const monzo = []
        const b = 0.56

        const result = computeWeightedSoupifgtt(monzo, b)

        expect(result).toBe(0)
    })

    it("works for a simple integer", () => {
        const integer = 3751
        const b = 0.56

        const result = computeWeightedSoupifgtt(integer, b)

        expect(result).toBe(5 ** 0.56 + 11 ** 0.56)
    })
})
