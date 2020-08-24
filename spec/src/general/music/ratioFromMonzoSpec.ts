import { Ratio } from "../../../../src/general/math"
import { computeRatioFromMonzo, Monzo } from "../../../../src/general/music"

describe("ratioFromMonzo", () => {
    it("converts a monzo into a two-element array representing the numerator and denominator", () => {
        const monzo = [-4, 9, -2, -2] as Monzo

        const actual = computeRatioFromMonzo(monzo)

        const expected = [19683, 19600] as Ratio
        expect(actual).toEqual(expected)
    })
})
