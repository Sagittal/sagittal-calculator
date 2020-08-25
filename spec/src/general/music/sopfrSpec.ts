import { Integer } from "../../../../src/general/math"
import { computeSopfr, Monzo, Sopfr } from "../../../../src/general/music"

describe("computeSopfr", () => {
    it("sums the absolute values of the prime factors (with repetition) in the monzo", () => {
        const monzo = [5, 6, 0, 0, 1, -1, 2] as Monzo

        const actual = computeSopfr(monzo)

        const expected = 2 + 2 + 2 + 2 + 2 + 3 + 3 + 3 + 3 + 3 + 3 + 11 + 13 + 17 + 17 as Sopfr
        expect(actual).toBe(expected)
    })

    it("works for an empty monzo", () => {
        const monzo = [] as Monzo

        const actual = computeSopfr(monzo)

        const expected = 0 as Sopfr
        expect(actual).toBe(expected)
    })

    it("works for a simple integer", () => {
        const integer = 341 as Integer

        const actual = computeSopfr(integer)

        const expected = 11 + 31 as Sopfr
        expect(actual).toBe(expected)
    })
})
