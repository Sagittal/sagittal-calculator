import { Decimal, Denominator, Exponent, Max, Min, Of, Prime } from "../../../../../../../../src/general"
import { N2D3P9 } from "../../../../../../../../src/sagittal"
import * as d39
    from "../../../../../../../../src/sagittal/ji/two3FreeClass/n2d3p9/primeExponentExtremas/denominator/d39"
import { computeMinN2D3P9ForPossibleMaxDenominatorPrimeExponentGivenMaxN2D3P9 } from "../../../../../../../../src/sagittal/ji/two3FreeClass/n2d3p9/primeExponentExtremas/denominator/minN2D3P9"
import * as minN2P
    from "../../../../../../../../src/sagittal/ji/two3FreeClass/n2d3p9/primeExponentExtremas/denominator/minN2P"
import { N2P } from "../../../../../../../../src/sagittal/ji/two3FreeClass/n2d3p9/primeExponentExtremas/denominator/sortedNumeratorPossibilities"
import { D39 } from "../../../../../../../../src/sagittal/ji/two3FreeClass/n2d3p9/primeExponentExtremas/denominator/types"

describe("computeMinN2D3P9ForPossibleMaxDenominatorPrimeExponentGivenMaxN2D3P9", (): void => {
    it("given a denominator prime and its possible max prime exponent, plus the sorted numerator possibilities, will gather the D39 and the min N2P then combine them", (): void => {
        const sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9 = {
            sortedNumeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2: [],
            sortedNumeratorPossibilitiesGivenMaxN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P: [],
        }
        // TODO: here's a thought. since this "denominatorPrime" isn't truly a Denominator, just part of one, as opposed
        //  To a numerator, perhaps we need to represent this slightly differently in the type.
        //  Now, Exponent has an "of", because we can ask the quesiton "what is it an exponent of?" "a Prime."
        //  But in this case we're just kind of generally "of" a Denominator. not denominator of a decimal, or decimal
        //  Of a denominator, nor that either way for Exponent or Prime. basically it's just "Of" in general
        //  So you could just make a type Of<T> = { _OfBrand: T } and use that for these denominator and numerator prime
        //  Like this: Prime & Of<Denominator>
        const denominatorPrime = 7 as Prime & Of<Denominator>
        const possibleMaxDenominatorPrimeExponentGivenMaxN2D3P9 =
            2 as Max<Denominator & Decimal<{ integer: true }> & Exponent<Prime>>

        const minN2PForPossibleMaxDenominatorPrimeExponentGivenMaxN2D3P9 = 15.5 as Min<N2P>
        const d39ForPossibleMaxDenominatorPrimeExponent = 3 as D39

        spyOn(minN2P, "computeMinN2PForPossibleMaxDenominatorPrimeExponentGivenMaxN2D3P9")
            .and.returnValue(minN2PForPossibleMaxDenominatorPrimeExponentGivenMaxN2D3P9)
        spyOn(d39, "computeD39ForPossibleMaxDenominatorPrimeExponent")
            .and.returnValue(d39ForPossibleMaxDenominatorPrimeExponent)

        const actual = computeMinN2D3P9ForPossibleMaxDenominatorPrimeExponentGivenMaxN2D3P9({
            sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9,
            denominatorPrime,
            possibleMaxDenominatorPrimeExponentGivenMaxN2D3P9,
        })

        const expected = 46.5 as Min<N2D3P9>
        expect(actual).toEqual(expected)
    })
})
