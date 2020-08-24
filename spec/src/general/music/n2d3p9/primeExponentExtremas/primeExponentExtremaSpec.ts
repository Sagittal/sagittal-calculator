import { N2D3P9, Prime } from "../../../../../../src/general"
import { PrimeExponentExtrema } from "../../../../../../src/general/music/n2d3p9/primeExponentExtremas"
import { computePrimeExponentExtremaGivenMaximumN2D3P3 } from "../../../../../../src/general/music/n2d3p9/primeExponentExtremas/primeExponentExtrema"

describe("computePrimeExponentExtremaGivenMaximumN2D3P3", () => {
    it("returns the max exponent for the denominator as the minimum exponent and the max exponent of the numerator as the maximum exponent", () => {
        const prime = 5 as Prime
        const maximumN2D3P9 = 5 as N2D3P9 // TODO: I think you should add a new parameterized type Max<>

        const actual = computePrimeExponentExtremaGivenMaximumN2D3P3(prime, maximumN2D3P9)

        const expected = [-1, 2] as PrimeExponentExtrema
        expect(actual).toEqual(expected)
    })
})
