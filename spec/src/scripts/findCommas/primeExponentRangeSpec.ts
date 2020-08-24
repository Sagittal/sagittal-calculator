import { Copfr, Prime, PrimeExponentExtrema, Sopfr } from "../../../../src/general"
import { computePrimeExponentRange } from "../../../../src/scripts/findCommas/primeExponentRange"

describe("computePrimeExponentRange", () => {
    it("gives the valid range of the prime exponent given a maximum 5-rough sopfr and a maximum 5-rough copfr where the 5-rough copfr is the limiting factor", () => {
        const prime = 11 as Prime
        const maximumFiveRoughSopfr = 51 as Sopfr<5>
        const maximumFiveRoughCopfr = 3 as Copfr<5>

        const actual = computePrimeExponentRange(prime, { maximumFiveRoughSopfr, maximumFiveRoughCopfr })

        const expected = [-3, -2, -1, 0, 1, 2, 3]
        expect(actual).toEqual(expected)
    })

    it("gives the valid range of the prime exponent given a maximum 5-rough sopfr and a maximum 5-rough copfr where the 5-rough sopfr is the limiting factor", () => {
        const prime = 11 as Prime
        const maximumFiveRoughSopfr = 30 as Sopfr<5>
        const maximumFiveRoughCopfr = 3 as Copfr<5>

        const actual = computePrimeExponentRange(prime, { maximumFiveRoughSopfr, maximumFiveRoughCopfr })

        const expected = [-2, -1, 0, 1, 2]
        expect(actual).toEqual(expected)
    })

    // TODO: finish writing these
    it("gives the valid range of the prime exponent given a maximum 5-rough sopfr and a maximum N2D3P9 where the 5-rough sopfr is the limiting factor", () => {

    })

    it("gives the valid range of the prime exponent given a maximum 5-rough sopfr and a maximum N2D3P9 where the N2D3P9 is the limiting factor", () => {

    })

    it("gives the valid range of the prime exponent given a maximum 5-rough copfr and a maximum N2D3P9 where the 5-rough copfr is the limiting factor", () => {

    })

    it("gives the valid range of the prime exponent given a maximum 5-rough copfr and a maximum N2D3P9 where the N2D3P9 is the limiting factor", () => {

    })

    it("gives the valid range of the prime exponent given only a maximum 5-rough sopfr", () => {
        const prime = 11 as Prime
        const maximumFiveRoughSopfr = 51 as Sopfr<5>

        const actual = computePrimeExponentRange(prime, { maximumFiveRoughSopfr })

        const expected = [-4, -3, -2, -1, 0, 1, 2, 3, 4]
        expect(actual).toEqual(expected)
    })

    it("gives the valid range of the prime exponent given only a maximum 5-rough copfr", () => {
        const prime = 61 as Prime
        const maximumFiveRoughCopfr = 3 as Copfr<5>

        const actual = computePrimeExponentRange(prime, { maximumFiveRoughCopfr })

        const expected = [-3, -2, -1, 0, 1, 2, 3]
        expect(actual).toEqual(expected)
    })

    it("gives the valid range of the prime exponent given only a maximum N2D3P9", () => {
        const prime = 7 as Prime
        const primeExponentExtremaGivenMaximumN2D3P9 = [-2, 4] as PrimeExponentExtrema

        const actual = computePrimeExponentRange(prime, { primeExponentExtremaGivenMaximumN2D3P9 })

        const expected = [-2, -1, 0, 1, 2, 3, 4]
        expect(actual).toEqual(expected)
    })

    it("throws an error if no maximum is provided", () => {
        const prime = 61 as Prime

        expect(() => computePrimeExponentRange(prime)).toThrowError("The range must be limited somehow.")
    })
})
