import { Integer, Max, Min, Prime } from "../../../../../../../../src/general"
import { Denominator, Exponent, Numerator } from "../../../../../../../../src/general/math"
import { computeMinN2PForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9 } from "../../../../../../../../src/sagittal/comma/evaluation/n2d3p9/primeExponentExtremas/denominator/minN2P"
import {
    N2,
    N2P,
    SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P,
    SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2,
} from "../../../../../../../../src/sagittal/comma/evaluation/n2d3p9/primeExponentExtremas/denominator/sortedNumeratorPossibilities/types"


describe("computeMinN2PForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9", (): void => {
    it("finds the min N2P out of the numerator possibilities where the gpf is greater than the denominator prime, and the min N2P out of the numerator possibilities where the gpf is lesser than the denominator prime, and then returns the min of those two", (): void => {
        // so the candidate max denominator power will be 7^2 = 49
        const denominatorPrime = 7 as Prime<Denominator>
        const candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9 = 2 as Max<Integer & Exponent<Prime<Denominator>>>

        const sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9 = {
            sortedNumeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2: [
                // this one will not make the cut because the numerator is less than the denominator (25 < 49)
                {
                    numerator: 25 as Numerator,
                    gpf: 5 as Prime,
                    n2: 6.25 as N2,
                },
                // this one will make the cut because the numerator is greater than the denominator (125 > 49)
                {
                    numerator: 125 as Numerator,
                    gpf: 5 as Prime,
                    n2: 15.625 as N2,
                },
                // this one will not make the cut because the previous one will be taken first (it's sorted by N2!)
                {
                    numerator: 625 as Numerator,
                    gpf: 5 as Prime,
                    n2: 39.0625 as N2,
                },
            ] as SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2[],
            sortedNumeratorPossibilitiesGivenMaxN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P: [
                // this one will not make the cut because the numerator is less than the denominator (47 < 49)
                {
                    numerator: 47 as Numerator,
                    gpf: 47 as Prime,
                    n2p: 23.5 as N2P,
                },
                // this one will make the cut because the numerator is greater than the denominator (143 > 49)
                {
                    numerator: 143 as Numerator,
                    gpf: 13 as Prime,
                    n2p: 35.75 as N2P,
                },
                // this one will not make the cut because the previous one will be taken first (it's sorted by N2P!)
                {
                    numerator: 289 as Numerator,
                    gpf: 17 as Prime,
                    n2p: 72.25 as N2P,
                },
            ] as SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P[],
        }

        const actual = computeMinN2PForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9({
            sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9,
            denominatorPrime,
            candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9,
        })

        // 15.625, the min from the list with gcp < denominator prime,
        // is less than 35.75, the min from the list with gcp > denominator prime;
        // however, the list with gcp < denominator prime therefore does not have the gcp included
        // because it will always be whatever the denominator prime is
        // so you actually have to multiply the 15.625 by the 7, getting 109.375
        // so the 35.75 wins
        const expected = 35.75 as Min<N2P>
        expect(actual).toBe(expected)
    })

    it("another example where the min N2P from the list with the numerator possibilities with gcp < denominator prime is the one which gets picked", (): void => {
        // so the candidate max denominator power will be 7^2 = 49
        const denominatorPrime = 7 as Prime<Denominator>
        const candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9 = 2 as Max<Integer & Exponent<Prime<Denominator>>>

        const sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9 = {
            sortedNumeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2: [
                // this one will not make the cut because the numerator is less than the denominator (25 < 49)
                {
                    numerator: 25 as Numerator,
                    gpf: 5 as Prime,
                    n2: 6.25 as N2,
                },
                // this one will make the cut because the numerator is greater than the denominator (125 > 49)
                {
                    numerator: 125 as Numerator,
                    gpf: 5 as Prime,
                    n2: 15.625 as N2,
                },
                // this one will not make the cut because the previous one will be taken first (it's sorted by N2!)
                {
                    numerator: 625 as Numerator,
                    gpf: 5 as Prime,
                    n2: 39.0625 as N2,
                },
            ] as SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2[],
            sortedNumeratorPossibilitiesGivenMaxN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P: [
                // this one will not make the cut because the numerator is less than the denominator (47 < 49)
                {
                    numerator: 47 as Numerator,
                    gpf: 47 as Prime,
                    n2p: 23.5 as N2P,
                },
                // this one will make the cut because the numerator is greater than the denominator (529 > 49)
                {
                    numerator: 529 as Numerator,
                    gpf: 23 as Prime,
                    n2p: 132.25 as N2P,
                },
                // this one will not make the cut because the previous one will be taken first (it's sorted by N2P!)
                {
                    numerator: 667 as Numerator,
                    gpf: 29 as Prime,
                    n2p: 166.75 as N2P,
                },
            ] as SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P[],
        }

        const actual = computeMinN2PForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9({
            sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9,
            denominatorPrime,
            candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9,
        })

        // here, you still have to multiply the 15.625 by the 7, getting 109.375
        // but this time that's less than the 132.25 N2P
        // which is the min for the list where the gcp > denominator prime
        const expected = 109.375 as Min<N2P>
        expect(actual).toBe(expected)
    })
})
