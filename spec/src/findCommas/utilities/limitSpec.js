const {computeLimit} = require("../../../../src/findCommas/utilities/limit")

describe("computeLimit", () => {
    it("returns the prime limit of the given monzo", () => {
        const monzo = [2, 3, 0, 0, 4]

        const result = computeLimit(monzo)

        expect(result).toBe(11)
    })

    it("works when a monzo has trailing zeroes", () => {
        const monzo = [2, 3, 4, 0, 0]

        const result = computeLimit(monzo)

        expect(result).toBe(5)
    })
})
