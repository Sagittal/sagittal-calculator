import { computeIntegerMonzoFromIntegerDecimal, IntegerDecimal, RationalMonzo } from "../../../../../../../src/general/math"

describe("computeIntegerMonzoFromIntegerDecimal", (): void => {
    it("prime factorizes the integer into a monzo", (): void => {
        const integerDecimal = 44 as IntegerDecimal

        const actual = computeIntegerMonzoFromIntegerDecimal(integerDecimal)

        const expected = [2, 0, 0, 0, 1] as RationalMonzo
        expect(actual).toEqual(expected)
    })

    it("errors if the primes in the integer's factorization are too big", (): void => {
        const integerDecimal = 756065159 as IntegerDecimal

        expect((): void => {
            computeIntegerMonzoFromIntegerDecimal(integerDecimal)
        }).toThrowError("This integer 756065159 contains primes which are too big; remainder is 756065159")
    })
})
