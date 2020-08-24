import { computeCopfr, Copfr, Monzo } from "../../../../src/general/music"

describe("computeCopfr", () => {
    it("returns the resolution of prime factors (with repetition) in the monzo", () => {
        const monzo = [5, 4, -3, -2, 5] as Monzo

        const actual = computeCopfr(monzo)

        const expected = 19 as Copfr
        expect(actual).toBe(expected)
    })
})
