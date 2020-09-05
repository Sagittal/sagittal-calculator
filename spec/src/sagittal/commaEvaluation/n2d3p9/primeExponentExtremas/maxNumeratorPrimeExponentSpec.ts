import { Exponent, Integer, Max, Numerator, Prime } from "../../../../../../src/general"
import { N2D3P9 } from "../../../../../../src/sagittal/commaEvaluation/n2d3p9"
import { computeMaxNumeratorPrimeExponentGivenMaxN2D3P3 } from "../../../../../../src/sagittal/commaEvaluation/n2d3p9/primeExponentExtremas/maxNumeratorPrimeExponent"

describe("computeMaxNumeratorPrimeExponentGivenMaxN2D3P3", () => {
    it("returns the max exponent for a given numerator prime (in isolation) given a max N2D3P9", () => {
        const numeratorPrime = 5 as Prime<Numerator>
        const maxN2D3P9 = 136 as Max<N2D3P9>

        const actual = computeMaxNumeratorPrimeExponentGivenMaxN2D3P3(numeratorPrime, maxN2D3P9)

        const expected = 6 as Max<Integer & Exponent<Prime<Numerator>>>
        expect(actual).toBe(expected)
    })

    it("another example, for prime 5", () => {
        const numeratorPrime = 5 as Prime<Numerator>
        const maxN2D3P9 = 130 as Max<N2D3P9>

        const actual = computeMaxNumeratorPrimeExponentGivenMaxN2D3P3(numeratorPrime, maxN2D3P9)

        const expected = 5 as Max<Integer & Exponent<Prime<Numerator>>>
        expect(actual).toBe(expected)
    })

    it("another example, for a different prime", () => {
        const numeratorPrime = 7 as Prime<Numerator>
        const maxN2D3P9 = 10 as Max<N2D3P9>

        const actual = computeMaxNumeratorPrimeExponentGivenMaxN2D3P3(numeratorPrime, maxN2D3P9)

        const expected = 2 as Max<Integer & Exponent<Prime<Numerator>>>
        expect(actual).toBe(expected)
    })

    it("edge case: max N2D3P9 set to 0", () => {
        const numeratorPrime = 7 as Prime<Numerator>
        const maxN2D3P9 = 0 as Max<N2D3P9>

        const actual = computeMaxNumeratorPrimeExponentGivenMaxN2D3P3(numeratorPrime, maxN2D3P9)

        const expected = 0 as Max<Integer & Exponent<Prime<Numerator>>>
        expect(actual).toBe(expected)
    })
})
