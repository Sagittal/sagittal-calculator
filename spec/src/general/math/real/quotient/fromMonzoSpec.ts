import { RealMonzo } from "../../../../../../src/general/math/real/monzo"
import { computeRealQuotientFromRealMonzo, RealQuotient } from "../../../../../../src/general/math/real/quotient"

describe("computeRealQuotientFromRealMonzo", (): void => {
    it("converts a monzo into a two-element array reformating the numerator and denominator", (): void => {
        const monzo = [-4, 9, -2, -2] as RealMonzo

        const actual = computeRealQuotientFromRealMonzo(monzo)

        const expected = [19683, 19600] as RealQuotient
        expect(actual).toEqual(expected)
    })

    it("throws an error if it tries to convert a monzo that is too big and should be left in monzo form", (): void => {
        const monzo = [0, 0, 6, 4, 2, 2, 0, 1, 1, 1] as RealMonzo

        expect((): void => {
            computeRealQuotientFromRealMonzo(monzo)
        }).toThrowError("Tried to convert a monzo to a quotient where a fractional part would exceed JavaScript's maximum safe integer value. [   0   0   6   4   2   2   0   1   1   1 ⟩")
    })

    it("can disable this error if the exact value is not required", (): void => {
        const monzo = [0, 0, 6, 4, 2, 2, 0, 1, 1, 1] as RealMonzo

        const actual = computeRealQuotientFromRealMonzo(monzo, { disableErrorBecauseExactValueNotRequired: true })

        const expected = [9722180859015624, 1] as RealQuotient
        expect(actual).toEqual(expected)
    })

    it("works for irrational monzos to irrational quotients", (): void => {
        const monzo = [-5.5, 3.5] as RealMonzo

        const actual = computeRealQuotientFromRealMonzo(monzo)

        const expected = [46.765372, 45.254834] as RealQuotient
        expect(actual).toBeCloseToArray(expected)
    })

    it("another edge case?", (): void => {
        const monzo = [-53, 33.5] as RealMonzo

        const actual = computeRealQuotientFromRealMonzo(monzo, { disableErrorBecauseExactValueNotRequired: true })

        const expected = [9628575343626794, 9007199254740992] as RealQuotient
        expect(actual).toBeCloseToArray(expected)
    })
})
