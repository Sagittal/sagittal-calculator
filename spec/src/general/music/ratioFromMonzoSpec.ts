import { computeRatioFromMonzo, Monzo, Ratio } from "../../../../src/general/math"

describe("ratioFromMonzo", () => {
    it("converts a monzo into a two-element array reformating the numerator and denominator", () => {
        const monzo = [-4, 9, -2, -2] as Monzo

        const actual = computeRatioFromMonzo(monzo)

        const expected = [19683, 19600] as Ratio
        expect(actual).toEqual(expected)
    })
})
