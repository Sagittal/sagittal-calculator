import { computeIntegerDecimalFromIntegerMonzo, IntegerDecimal } from "../../../../../../../src/general/math"
import { IntegerMonzo } from "../../../../../../../src/general/math/rational/real/monzo"

describe("computeIntegerDecimalFromIntegerMonzo", (): void => {
    it("returns an integer if the monzo has all positive exponents", (): void => {
        const integerMonzo = [1, 4, 2, 3] as IntegerMonzo

        const actual = computeIntegerDecimalFromIntegerMonzo(integerMonzo)

        const expected: IntegerDecimal = 1389150 as IntegerDecimal
        expect(actual).toBe(expected)
    })

    it("throws an error if the monzo has any negative elements", (): void => {
        // The type parameters is supposed to protect, but who knows!
        const integerMonzo = [-1, 4, 2, 3] as IntegerMonzo

        expect((): void => {
            computeIntegerDecimalFromIntegerMonzo(integerMonzo)
        }).toThrowError(`Tried to compute integer from non-integer monzo [  -1   4   2   3 ⟩.`)
    })
})
