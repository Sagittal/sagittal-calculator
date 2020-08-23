import { Exponent, Prime } from "../../../../../../src/general"
import { N2D3P9 } from "../../../../../../src/general/music/n2d3p9"
import { computeMaximumNumeratorPrimeExponentGivenMaximumN2D3P3 } from "../../../../../../src/general/music/n2d3p9/primeExponentExtremas/maximumNumeratorPrimeExponent"

describe("computeMaximumNumeratorPrimeExponentGivenMaximumN2D3P3", () => {
    it("returns the maximum exponent for a given numerator prime (in isolation) given a maximum N2D3P9", () => {
        const numeratorPrime = 5 as Prime
        const maximumN2D3P9 = 136 as N2D3P9

        const result = computeMaximumNumeratorPrimeExponentGivenMaximumN2D3P3(numeratorPrime, maximumN2D3P9)

        expect(result).toBe(6 as Exponent<Prime>)
    })

    it("another example, for prime 5", () => {
        const numeratorPrime = 5 as Prime
        const maximumN2D3P9 = 130 as N2D3P9

        const result = computeMaximumNumeratorPrimeExponentGivenMaximumN2D3P3(numeratorPrime, maximumN2D3P9)

        expect(result).toBe(5 as Exponent<Prime>)
    })

    it("another example, for a different prime", () => {
        const numeratorPrime = 7 as Prime
        const maximumN2D3P9 = 10 as N2D3P9

        const result = computeMaximumNumeratorPrimeExponentGivenMaximumN2D3P3(numeratorPrime, maximumN2D3P9)

        expect(result).toBe(2 as Exponent<Prime>)
    })
})
