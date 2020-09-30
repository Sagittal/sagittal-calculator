import { Integer, IntegerMonzo, Rational } from "../../../../../src/general/math/rational/real"
import { RationalMonzo } from "../../../../../src/general/math/rational/real/monzo"
import { computeRealFromMonzo, Real } from "../../../../../src/general/math/real"
import { Monzo } from "../../../../../src/general/math/real/monzo"

describe("computeRealFromMonzo", (): void => {
    it("creates a real from a monzo", (): void => {
        const monzo = [0, 0, -1.1, 1] as Monzo

        const actual = computeRealFromMonzo(monzo)

        const expected: Real = { monzo: [0, 0, -1.1, 1] as Monzo }
        expect(actual).toEqual(expected)
    })

    it("works for rational monzos", (): void => {
        const rationalMonzo = [0, 0, -1, 1] as RationalMonzo

        const actual = computeRealFromMonzo(rationalMonzo)

        const expected: Rational = { monzo: [0, 0, -1, 1] as RationalMonzo }
        expect(actual).toEqual(expected)
    })

    it("works for integer monzos", (): void => {
        const integerMonzo = [0, 0, 1, 1] as IntegerMonzo

        const actual = computeRealFromMonzo(integerMonzo)

        const expected: Integer = { monzo: [0, 0, 1, 1] as IntegerMonzo }
        expect(actual).toEqual(expected)
    })
})
