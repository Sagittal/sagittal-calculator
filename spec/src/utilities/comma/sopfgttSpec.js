const {computeSopfgtt} = require("../../../../src/utilities/comma/sopfgtt")

describe("computeSopfgtt", () => {
    it("sums the absolute values of the prime factors greater than three in the monzo", () => {
        const monzo = [5, 6, 0, 0, 1, -1, 2]

        const result = computeSopfgtt(monzo)

        expect(result).toBe(11 + 13 + 17 + 17)
    })

    it("works for an empty monzo", () => {
        const monzo = []

        const result = computeSopfgtt(monzo)

        expect(result).toBe(0)
    })

    it("works for a simple integer", () => {
        const integer = 341

        const result = computeSopfgtt(integer)

        expect(result).toBe(11 + 31)
    })
})
