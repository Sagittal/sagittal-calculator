import { Exponent, Extrema, Max, Prime } from "../../../../../src/general"
import { N2D3P9 } from "../../../../../src/sagittal"
import { computePrimeExponentExtremaGivenMaxN2D3P3 } from "../../../../../src/sagittal/n2d3p9/primeExponentExtremas/primeExponentExtrema"

describe("computePrimeExponentExtremaGivenMaxN2D3P3", () => {
    it("returns the max exponent for the denominator as the min exponent and the max exponent of the numerator as the max exponent", () => {
        const prime = 5 as Prime
        const maxN2D3P9 = 5 as Max<N2D3P9>

        const actual = computePrimeExponentExtremaGivenMaxN2D3P3(prime, maxN2D3P9)

        const expected = [-1, 2] as Extrema<Exponent<Prime>>
        expect(actual).toEqual(expected)
    })
})
