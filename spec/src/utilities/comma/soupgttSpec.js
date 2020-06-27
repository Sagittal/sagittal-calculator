const {computeSoupfgtt} = require("../../../../src/utilities/comma/soupfgtt")

describe("computeSoupfgtt", () => {
    it("sums the absolute values of the unique prime factors greater than three in the monzo", () => {
        const monzo = [5, 6, 0, 0, 1, -1, 2]

        const result = computeSoupfgtt(monzo)

        expect(result).toBe(11 + 13 + 17)
    })

    it("works for an empty monzo", () => {
        const monzo = []

        const result = computeSoupfgtt(monzo)

        expect(result).toBe(0)
    })

    it("works for a simple integer", () => {
        const integer = 3751

        const result = computeSoupfgtt(integer)

        expect(result).toBe(42)
    })
})
