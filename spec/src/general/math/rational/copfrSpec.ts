import { computeCopfr, Copfr, RationalDecimal, RationalMonzo } from "../../../../../src/general/math"

describe("computeCopfr", (): void => {
    it("returns the count of prime factors (with repetition) in the monzo", (): void => {
        const ratio = { monzo: [5, 4, -3, -2, 5] as RationalMonzo }

        const actual = computeCopfr(ratio)

        const expected = 19 as Copfr
        expect(actual).toBe(expected)
    })

    it("works for a direct rational decimal", (): void => {
        const rationalDecimal = 385 as RationalDecimal

        const actual = computeCopfr(rationalDecimal)

        const expected = 3 as Copfr
        expect(actual).toBe(expected)
    })
})
