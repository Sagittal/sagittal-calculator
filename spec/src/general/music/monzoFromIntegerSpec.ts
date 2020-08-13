import { computeMonzoFromInteger, Monzo } from "../../../../src/general/music"

describe("computeMonzoFromInteger", () => {
    it("prime factorizes the integer into a monzo", () => {
        const integer = 44

        const result = computeMonzoFromInteger(integer)

        expect(result).toEqual([2, 0, 0, 0, 1] as Monzo)
    })

    it("errors if the primes in the integer's factorization are too big", () => {
        const integer = 756065159

        expect(() => computeMonzoFromInteger(integer)).toThrowError("This number contains primes which are too big; remainder is 756065159")
    })
})
