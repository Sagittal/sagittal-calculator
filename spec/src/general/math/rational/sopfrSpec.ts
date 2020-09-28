import { computeSopfr, IntegerDecimal, RationalMonzo, Sopfr } from "../../../../../src/general/math"

describe("computeSopfr", (): void => {
    it("sums the abs values of the prime factors (with repetition) in the monzo", (): void => {
        const ratio = { monzo: [5, 6, 0, 0, 1, -1, 2] as RationalMonzo }

        const actual = computeSopfr(ratio)

        const expected = 2 + 2 + 2 + 2 + 2 + 3 + 3 + 3 + 3 + 3 + 3 + 11 + 13 + 17 + 17 as Sopfr
        expect(actual).toBe(expected)
    })

    it("works for an empty monzo", (): void => {
        const ratio = { monzo: [] as unknown[] as RationalMonzo }

        const actual = computeSopfr(ratio)

        const expected = 0 as Sopfr
        expect(actual).toBe(expected)
    })

    it("works for a simple integer", (): void => {
        const integerDecimal = 341 as IntegerDecimal

        const actual = computeSopfr(integerDecimal)

        const expected = 11 + 31 as Sopfr
        expect(actual).toBe(expected)
    })
})
