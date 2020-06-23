const {computeCopfgtt} = require("../../../../src/findCommas/utilities/copfgtt")

describe("copfgtt", () => {
    it("returns the count of prime factors greater than 3 in the monzo", () => {
        const monzo = [5, 4, -3, -2, 5]

        const result = computeCopfgtt(monzo)

        expect(result).toBe(10)
    })
})
