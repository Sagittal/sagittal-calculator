import { Exponent, Extrema, IntegerDecimal, IntegerNumerator, Max, Prime } from "../../../../../../../src/general"
import { N2D3P9 } from "../../../../../../../src/sagittal"
import { computePrimeExponentExtremaGivenMaxN2D3P9 } from "../../../../../../../src/sagittal/ji/twoThreeFreeClass/n2d3p9/primeExponentExtremas/primeExponentExtrema"

describe("computePrimeExponentExtremaGivenMaxN2D3P9", (): void => {
    const prime = 5 as Prime
    const maxN2D3P9 = 5 as Max<N2D3P9>
    const numeratorPossibilitiesForDenominatorGivenMaxN2D3P9 = [
        { numerator: 7 as IntegerNumerator, gpf: 7 as Max<Prime> },
        { numerator: 11 as IntegerNumerator, gpf: 11 as Max<Prime> },
        { numerator: 13 as IntegerNumerator, gpf: 13 as Max<Prime> },
        { numerator: 17 as IntegerNumerator, gpf: 17 as Max<Prime> },
        { numerator: 19 as IntegerNumerator, gpf: 19 as Max<Prime> },
        { numerator: 23 as IntegerNumerator, gpf: 23 as Max<Prime> },
        { numerator: 25 as IntegerNumerator, gpf: 5 as Max<Prime> },
    ]

    it("returns the max exponent for the denominator as the min exponent and the max exponent of the numerator as the max exponent", (): void => {
        const prime = 5 as Prime
        const maxN2D3P9 = 5 as Max<N2D3P9>

        const actual = computePrimeExponentExtremaGivenMaxN2D3P9(
            prime,
            maxN2D3P9,
            numeratorPossibilitiesForDenominatorGivenMaxN2D3P9,
        )

        const expected = [-1, 2] as Extrema<IntegerDecimal & Exponent<Prime>>
        expect(actual).toEqual(expected)
    })

    it("when mirrored is true, returns the denominator as the negative of the numerator", (): void => {


        const actual = computePrimeExponentExtremaGivenMaxN2D3P9(
            prime,
            maxN2D3P9,
            numeratorPossibilitiesForDenominatorGivenMaxN2D3P9,
            { mirrored: true },
        )

        const expected = [-2, 2] as Extrema<IntegerDecimal & Exponent<Prime>>
        expect(actual).toEqual(expected)
    })
})
