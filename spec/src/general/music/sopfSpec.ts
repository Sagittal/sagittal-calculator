import { computeSopf, Monzo } from "../../../../src/general/music"
import { Integer } from "../../../../src/general/math"

describe("computeSopf", () => {
    it("sums the absolute values of the unique prime factors in the monzo", () => {
        const monzo = [5, 6, 0, 0, 1, -1, 2] as Monzo

        const actual = computeSopf(monzo)

        const expected = 2 + 3 + 11 + 13 + 17
        expect(actual).toBe(expected)
    })

    it("works for an empty monzo", () => {
        const monzo = [] as Monzo

        const actual = computeSopf(monzo)

        const expected = 0
        expect(actual).toBe(expected)
    })

    it("works for a simple integer", () => {
        const integer = 3751 as Integer

        const actual = computeSopf(integer)

        const expected = 42
        expect(actual).toBe(expected)
    })
})
