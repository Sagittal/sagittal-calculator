import { computeSopfr, Integer, RationalMonzo, Sopfr } from "../../../../../src/general/math"

describe("computeSopfr", (): void => {
    it("sums the abs values of the prime factors (with repetition) in the monzo", (): void => {
        const monzo = [5, 6, 0, 0, 1, -1, 2] as RationalMonzo

        const actual = computeSopfr(monzo)

        const expected = 2 + 2 + 2 + 2 + 2 + 3 + 3 + 3 + 3 + 3 + 3 + 11 + 13 + 17 + 17 as Sopfr
        expect(actual).toBe(expected)
    })

    it("works for an empty monzo", (): void => {
        const monzo = [] as RationalMonzo

        const actual = computeSopfr(monzo)

        const expected = 0 as Sopfr
        expect(actual).toBe(expected)
    })

    it("works for a simple integer", (): void => {
        const integer = 341 as Integer

        const actual = computeSopfr(integer)

        const expected = 11 + 31 as Sopfr
        expect(actual).toBe(expected)
    })
})
