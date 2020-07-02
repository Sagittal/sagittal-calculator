const {computeSopfr} = require("../../../../src/utilities/comma/sopfr")

describe("computeSopfr", () => {
    it("sums the absolute values of the prime factors (with repetition) in the monzo", () => {
        const monzo = [5, 6, 0, 0, 1, -1, 2]

        const result = computeSopfr(monzo)

        expect(result).toBe(2 + 2 + 2 + 2 + 2 + 3 + 3 + 3 + 3 + 3 + 3 + 11 + 13 + 17 + 17)
    })

    it("works for an empty monzo", () => {
        const monzo = []

        const result = computeSopfr(monzo)

        expect(result).toBe(0)
    })

    it("works for a simple integer", () => {
        const integer = 341

        const result = computeSopfr(integer)

        expect(result).toBe(11 + 31)
    })
})
