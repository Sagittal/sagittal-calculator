const {computeWeightedSoupfgtt} = require("../../../../src/scripts/notationalCommaPopularityMetric/weightedSoupfgtt")

describe("computeWeightedSoupfgtt", () => {
    it("sums the absolute values of the unique prime factors greater than three in the monzo, raised to the provided power (weight)", () => {
        const monzo = [
            5,
            6,
            0,
            0,
            1,
            -1,
            2
        ]
        const b = 0.56

        const result = computeWeightedSoupfgtt(monzo, b)

        expect(result).toBe(11 ** 0.56 + 13 ** 0.56 + 17 ** 0.56)
    })

    it("works for an empty monzo", () => {
        const monzo = []
        const b = 0.56

        const result = computeWeightedSoupfgtt(monzo, b)

        expect(result).toBe(0)
    })

    it("works for a simple integer", () => {
        const integer = 3751
        const b = 0.56

        const result = computeWeightedSoupfgtt(integer, b)

        expect(result).toBe(11 ** 0.56 + 31 ** 0.56)
    })
})
