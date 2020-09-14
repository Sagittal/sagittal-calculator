import { Monzo } from "../../../../../src/general/math/monzo"
import { computeRatioFromMonzo, Ratio } from "../../../../../src/general/math/ratio"

describe("ratioFromMonzo", (): void => {
    it("converts a monzo into a two-element array reformating the numerator and denominator", (): void => {
        const monzo = [-4, 9, -2, -2] as Monzo

        const actual = computeRatioFromMonzo(monzo)

        const expected = [19683, 19600] as Ratio
        expect(actual).toEqual(expected)
    })

    it("throws an error if it tries to convert a monzo that is too big and should be left in monzo form", (): void => {
        const monzo = [0, 0, 6, 4, 2, 2, 0, 1, 1, 1] as Monzo

        expect((): void => {
            computeRatioFromMonzo(monzo)
        }).toThrowError("Tried to convert a monzo to a ratio where a fractional part would exceed JavaScript's maximum safe integer value. [   0   0   6   4   2   2   0   1   1   1 ⟩")
    })

    it("can disable this error if the exact value is not required", (): void => {
        const monzo = [0, 0, 6, 4, 2, 2, 0, 1, 1, 1] as Monzo

        const actual = computeRatioFromMonzo(monzo, { disableErrorBecauseExactValueNotRequired: true })

        const expected = [9722180859015624, 1] as Ratio
        expect(actual).toEqual(expected)
    })
})
