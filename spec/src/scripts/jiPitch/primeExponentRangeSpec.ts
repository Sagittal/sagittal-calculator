import { Copfr, Exponent, Extrema, Integer, Max, Prime, Sopfr } from "../../../../src/general"
import { computePrimeExponentRange } from "../../../../src/scripts/jiPitch/primeExponentRange"

describe("computePrimeExponentRange", () => {
    it("gives the valid range of the prime exponent given a max 2,3-free sopfr and a max 2,3-free copfr where the 2,3-free copfr is the limiting factor", () => {
        const prime = 11 as Prime
        const max23FreeSopfr = 51 as Max<Sopfr<{ rough: 5 }>>
        const max23FreeCopfr = 3 as Max<Copfr<{ rough: 5 }>>

        const actual = computePrimeExponentRange(prime, { max23FreeSopfr, max23FreeCopfr })

        const expected = [-3, -2, -1, 0, 1, 2, 3] as Array<Integer & Exponent<Prime>>
        expect(actual).toEqual(expected)
    })

    it("gives the valid range of the prime exponent given a max 2,3-free sopfr and a max 2,3-free copfr where the 2,3-free sopfr is the limiting factor", () => {
        const prime = 11 as Prime
        const max23FreeSopfr = 30 as Max<Sopfr<{ rough: 5 }>>
        const max23FreeCopfr = 3 as Max<Copfr<{ rough: 5 }>>

        const actual = computePrimeExponentRange(prime, { max23FreeSopfr, max23FreeCopfr })

        const expected = [-2, -1, 0, 1, 2] as Array<Integer & Exponent<Prime>>
        expect(actual).toEqual(expected)
    })

    it("gives the valid range of the prime exponent given a max 2,3-free sopfr and a max N2D3P9 where the 2,3-free sopfr is the limiting factor", () => {
        const prime = 7 as Prime
        const max23FreeSopfr = 999 as Max<Sopfr<{ rough: 5 }>>
        const primeExponentExtremaGivenMaxN2D3P9 = [-2, 4] as Extrema<Integer & Exponent<Prime>>

        const actual = computePrimeExponentRange(prime, { max23FreeSopfr, primeExponentExtremaGivenMaxN2D3P9 })

        const expected = [-2, -1, 0, 1, 2, 3, 4] as Array<Integer & Exponent<Prime>>
        expect(actual).toEqual(expected)
    })

    it("gives the valid range of the prime exponent given a max 2,3-free sopfr and a max N2D3P9 where the N2D3P9 is the limiting factor", () => {
        const prime = 7 as Prime
        const max23FreeSopfr = 14 as Max<Sopfr<{ rough: 5 }>>
        const primeExponentExtremaGivenMaxN2D3P9 = [-5, 8] as Extrema<Integer & Exponent<Prime>>

        const actual = computePrimeExponentRange(prime, { max23FreeSopfr, primeExponentExtremaGivenMaxN2D3P9 })

        const expected = [-2, -1, 0, 1, 2] as Array<Integer & Exponent<Prime>>
        expect(actual).toEqual(expected)
    })

    it("gives the valid range of the prime exponent given a max 2,3-free copfr and a max N2D3P9 where the 2,3-free copfr is the limiting factor", () => {
        const prime = 11 as Prime
        const max23FreeCopfr = 3 as Max<Copfr<{ rough: 5 }>>
        const primeExponentExtremaGivenMaxN2D3P9 = [-5, 9] as Extrema<Integer & Exponent<Prime>>

        const actual = computePrimeExponentRange(prime, { primeExponentExtremaGivenMaxN2D3P9, max23FreeCopfr })

        const expected = [-3, -2, -1, 0, 1, 2, 3] as Array<Integer & Exponent<Prime>>
        expect(actual).toEqual(expected)
    })

    it("gives the valid range of the prime exponent given a max 2,3-free copfr and a max N2D3P9 where the N2D3P9 is the limiting factor", () => {
        const prime = 11 as Prime
        const max23FreeCopfr = 3 as Max<Copfr<{ rough: 5 }>>
        const primeExponentExtremaGivenMaxN2D3P9 = [-1, 2] as Extrema<Integer & Exponent<Prime>>

        const actual = computePrimeExponentRange(prime, { primeExponentExtremaGivenMaxN2D3P9, max23FreeCopfr })

        const expected = [-1, 0, 1, 2] as Array<Integer & Exponent<Prime>>
        expect(actual).toEqual(expected)
    })

    it("gives the valid range of the prime exponent given only a max 2,3-free sopfr", () => {
        const prime = 11 as Prime
        const max23FreeSopfr = 51 as Max<Sopfr<{ rough: 5 }>>

        const actual = computePrimeExponentRange(prime, { max23FreeSopfr })

        const expected = [-4, -3, -2, -1, 0, 1, 2, 3, 4] as Array<Integer & Exponent<Prime>>
        expect(actual).toEqual(expected)
    })

    it("gives the valid range of the prime exponent given only a max 2,3-free copfr", () => {
        const prime = 61 as Prime
        const max23FreeCopfr = 3 as Max<Copfr<{ rough: 5 }>>

        const actual = computePrimeExponentRange(prime, { max23FreeCopfr })

        const expected = [-3, -2, -1, 0, 1, 2, 3] as Array<Integer & Exponent<Prime>>
        expect(actual).toEqual(expected)
    })

    it("gives the valid range of the prime exponent given only a max N2D3P9", () => {
        const prime = 7 as Prime
        const primeExponentExtremaGivenMaxN2D3P9 = [-2, 4] as Extrema<Integer & Exponent<Prime>>

        const actual = computePrimeExponentRange(prime, { primeExponentExtremaGivenMaxN2D3P9 })

        const expected = [-2, -1, 0, 1, 2, 3, 4] as Array<Integer & Exponent<Prime>>
        expect(actual).toEqual(expected)
    })

    it("throws an error if no max is provided", () => {
        const prime = 61 as Prime

        expect(() => computePrimeExponentRange(prime)).toThrowError("The range must be limited somehow.")
    })
})
