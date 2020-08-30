import { computeMonzoFromInteger, Integer, Monzo } from "../../../../../src/general/math"

describe("computeMonzoFromInteger", () => {
    it("prime factorizes the integer into a monzo", () => {
        const integer = 44 as Integer

        const actual = computeMonzoFromInteger(integer)

        const expected = [2, 0, 0, 0, 1] as Monzo
        expect(actual).toEqual(expected)
    })

    it("errors if the primes in the integer's factorization are too big", () => {
        const integer = 756065159 as Integer

        expect(() => computeMonzoFromInteger(integer)).toThrowError("This number contains primes which are too big; remainder is 756065159")
    })
})
