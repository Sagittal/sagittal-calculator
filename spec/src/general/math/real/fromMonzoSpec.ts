import { Integer, IntegerMonzo, Rational } from "../../../../../src/general/math/rational/real"
import { RationalMonzo } from "../../../../../src/general/math/rational/real/monzo"
import { computeRealFromRealMonzo, Real } from "../../../../../src/general/math/real"
import { RealMonzo } from "../../../../../src/general/math/real/monzo"

describe("computeRealFromRealMonzo", (): void => {
    it("creates a real from a monzo", (): void => {
        const monzo = [0, 0, -1.1, 1] as RealMonzo

        const actual = computeRealFromRealMonzo(monzo)

        const expected: Real = { monzo: [0, 0, -1.1, 1] as RealMonzo }
        expect(actual).toEqual(expected)
    })

    it("works for rational monzos", (): void => {
        const rationalMonzo = [0, 0, -1, 1] as RationalMonzo

        const actual = computeRealFromRealMonzo(rationalMonzo)

        const expected: Rational = { monzo: [0, 0, -1, 1] as RationalMonzo }
        expect(actual).toEqual(expected)
    })

    it("works for integer monzos", (): void => {
        const integerMonzo = [0, 0, 1, 1] as IntegerMonzo

        const actual = computeRealFromRealMonzo(integerMonzo)

        const expected: Integer = { monzo: [0, 0, 1, 1] as IntegerMonzo }
        expect(actual).toEqual(expected)
    })
})
