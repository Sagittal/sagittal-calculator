import { computeIntegerFromMonzo, Integer, Monzo } from "../../../../../../../src/general/math"

describe("computeIntegerFromMonzo", (): void => {
    it("returns an integer if the monzo has all positive exponents", (): void => {
        const monzo = [1, 4, 2, 3] as Monzo<{ potentiallyIrrational: false, integer: true }>

        const actual = computeIntegerFromMonzo(monzo)

        const expected: Integer = 1389150 as Integer
        expect(actual).toBe(expected)
    })

    it("throws an error if the monzo has any negative elements", (): void => {
        // the type parameters is supposed to protect, but who knows!
        const monzo = [-1, 4, 2, 3] as Monzo<{ potentiallyIrrational: false, integer: true }>

        expect((): void => {
            computeIntegerFromMonzo(monzo)
        }).toThrowError(`Tried to compute integer from non-integer monzo [  -1   4   2   3 ⟩.`)
    })
})