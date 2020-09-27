import { computeIntegerFromIntegerMonzo, Integer, RationalMonzo } from "../../../../../../../src/general/math"

describe("computeIntegerFromIntegerMonzo", (): void => {
    it("returns an integer if the monzo has all positive exponents", (): void => {
        const rationalMonzo = [1, 4, 2, 3] as RationalMonzo<{ irrational: false, integer: true }>

        const actual = computeIntegerFromIntegerMonzo(rationalMonzo)

        const expected: Integer = 1389150 as Integer
        expect(actual).toBe(expected)
    })

    it("throws an error if the monzo has any negative elements", (): void => {
        // The type parameters is supposed to protect, but who knows!
        const rationalMonzo = [-1, 4, 2, 3] as RationalMonzo<{ irrational: false, integer: true }>

        expect((): void => {
            computeIntegerFromIntegerMonzo(rationalMonzo)
        }).toThrowError(`Tried to compute integer from non-integer monzo [  -1   4   2   3 ⟩.`)
    })
})
