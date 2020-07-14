import { Ratio } from "../../../../src/general/math"
import { Monzo } from "../../../../src/general/music"
import { computeRatioFromMonzo } from "../../../../src/general/music/ratioFromMonzo"

describe("ratioFromMonzo", () => {
    it("converts a monzo into a two-element array representing the numerator and denominator", () => {
        const monzo = [-4, 9, -2, -2] as Monzo

        const result = computeRatioFromMonzo(monzo)

        expect(result).toEqual([19683, 19600] as Ratio)
    })
})
