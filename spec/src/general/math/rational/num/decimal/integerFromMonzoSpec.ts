import { computeIntegerFromIntegerMonzo, Integer } from "../../../../../../../src/general/math"
import { IntegerMonzo } from "../../../../../../../src/general/math/rational/num/monzo"

describe("computeIntegerFromIntegerMonzo", (): void => {
    it("returns an integer if the monzo has all positive exponents", (): void => {
        const integerMonzo = [1, 4, 2, 3] as IntegerMonzo

        const actual = computeIntegerFromIntegerMonzo(integerMonzo)

        const expected: Integer = 1389150 as Integer
        expect(actual).toBe(expected)
    })

    it("throws an error if the monzo has any negative elements", (): void => {
        // The type parameters is supposed to protect, but who knows!
        const integerMonzo = [-1, 4, 2, 3] as IntegerMonzo

        expect((): void => {
            computeIntegerFromIntegerMonzo(integerMonzo)
        }).toThrowError(`Tried to compute integer from non-integer monzo [  -1   4   2   3 ⟩.`)
    })
})
