import { Copfr, Exponent, Extrema, Max, Prime, Sopfr } from "../../../../src/general"
import { computePrimeExponentRange } from "../../../../src/scripts/pitch/primeExponentRange"

describe("computePrimeExponentRange", () => {
    it("gives the valid range of the prime exponent given a max 5-rough sopfr and a max 5-rough copfr where the 5-rough copfr is the limiting factor", () => {
        const prime = 11 as Prime
        const maxFiveRoughSopfr = 51 as Max<Sopfr<5>>
        const maxFiveRoughCopfr = 3 as Max<Copfr<5>>

        const actual = computePrimeExponentRange(prime, { maxFiveRoughSopfr, maxFiveRoughCopfr })

        const expected = [-3, -2, -1, 0, 1, 2, 3] as Array<Exponent<Prime>>
        expect(actual).toEqual(expected)
    })

    it("gives the valid range of the prime exponent given a max 5-rough sopfr and a max 5-rough copfr where the 5-rough sopfr is the limiting factor", () => {
        const prime = 11 as Prime
        const maxFiveRoughSopfr = 30 as Max<Sopfr<5>>
        const maxFiveRoughCopfr = 3 as Max<Copfr<5>>

        const actual = computePrimeExponentRange(prime, { maxFiveRoughSopfr, maxFiveRoughCopfr })

        const expected = [-2, -1, 0, 1, 2] as Array<Exponent<Prime>>
        expect(actual).toEqual(expected)
    })

    // TODO: test - finish these
    it("gives the valid range of the prime exponent given a max 5-rough sopfr and a max N2D3P9 where the 5-rough sopfr is the limiting factor", () => {

    })

    it("gives the valid range of the prime exponent given a max 5-rough sopfr and a max N2D3P9 where the N2D3P9 is the limiting factor", () => {

    })

    it("gives the valid range of the prime exponent given a max 5-rough copfr and a max N2D3P9 where the 5-rough copfr is the limiting factor", () => {

    })

    it("gives the valid range of the prime exponent given a max 5-rough copfr and a max N2D3P9 where the N2D3P9 is the limiting factor", () => {

    })

    it("gives the valid range of the prime exponent given only a max 5-rough sopfr", () => {
        const prime = 11 as Prime
        const maxFiveRoughSopfr = 51 as Max<Sopfr<5>>

        const actual = computePrimeExponentRange(prime, { maxFiveRoughSopfr })

        const expected = [-4, -3, -2, -1, 0, 1, 2, 3, 4] as Array<Exponent<Prime>>
        expect(actual).toEqual(expected)
    })

    it("gives the valid range of the prime exponent given only a max 5-rough copfr", () => {
        const prime = 61 as Prime
        const maxFiveRoughCopfr = 3 as Max<Copfr<5>>

        const actual = computePrimeExponentRange(prime, { maxFiveRoughCopfr })

        const expected = [-3, -2, -1, 0, 1, 2, 3] as Array<Exponent<Prime>>
        expect(actual).toEqual(expected)
    })

    it("gives the valid range of the prime exponent given only a max N2D3P9", () => {
        const prime = 7 as Prime
        const primeExponentExtremaGivenMaxN2D3P9 = [-2, 4] as Extrema<Exponent<Prime>>

        const actual = computePrimeExponentRange(prime, { primeExponentExtremaGivenMaxN2D3P9 })

        const expected = [-2, -1, 0, 1, 2, 3, 4] as Array<Exponent<Prime>>
        expect(actual).toEqual(expected)
    })

    it("throws an error if no max is provided", () => {
        const prime = 61 as Prime

        expect(() => computePrimeExponentRange(prime)).toThrowError("The range must be limited somehow.")
    })
})
