import { computeIntegerMonzoFromInteger, Integer, RationalMonzo } from "../../../../../../../src/general/math"

describe("computeIntegerMonzoFromInteger", (): void => {
    it("prime factorizes the integer into a monzo", (): void => {
        const integer = 44 as Integer

        const actual = computeIntegerMonzoFromInteger(integer)

        const expected = [2, 0, 0, 0, 1] as RationalMonzo
        expect(actual).toEqual(expected)
    })

    it("errors if the primes in the integer's factorization are too big", (): void => {
        const integer = 756065159 as Integer

        expect((): void => {
            computeIntegerMonzoFromInteger(integer)
        }).toThrowError("This integer 756065159 contains primes which are too big; remainder is 756065159")
    })
})
