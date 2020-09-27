import { computeCopfr, Copfr, RationalMonzo } from "../../../../../src/general/math"

describe("computeCopfr", (): void => {
    it("returns the count of prime factors (with repetition) in the monzo", (): void => {
        const monzo = [5, 4, -3, -2, 5] as RationalMonzo

        const actual = computeCopfr(monzo)

        const expected = 19 as Copfr
        expect(actual).toBe(expected)
    })
})
