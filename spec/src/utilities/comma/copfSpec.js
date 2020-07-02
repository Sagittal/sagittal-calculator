const {computeCopfr} = require("../../../../src/utilities/comma/copfr")

describe("computeCopfr", () => {
    it("returns the count of prime factors (with repetition) in the monzo", () => {
        const monzo = [5, 4, -3, -2, 5]

        const result = computeCopfr(monzo)

        expect(result).toBe(19)
    })
})
