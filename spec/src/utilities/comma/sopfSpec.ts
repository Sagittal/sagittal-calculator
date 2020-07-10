import {computeSopf} from "../../../../src/utilities/comma/sopf"

describe("computeSopf", () => {
    it("sums the absolute values of the unique prime factors in the monzo", () => {
        const monzo = [5, 6, 0, 0, 1, -1, 2]

        const result = computeSopf(monzo)

        expect(result).toBe(2 + 3 + 11 + 13 + 17)
    })

    it("works for an empty monzo", () => {
        const monzo = []

        const result = computeSopf(monzo)

        expect(result).toBe(0)
    })

    it("works for a simple integer", () => {
        const integer = 3751

        const result = computeSopf(integer)

        expect(result).toBe(42)
    })
})
