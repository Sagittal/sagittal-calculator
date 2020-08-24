import { Prime } from "../../../../../../src/general"
import { Exponent, Numerator } from "../../../../../../src/general/math"
import { computeMinimumN2PForCandidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9 } from "../../../../../../src/general/music/n2d3p9/primeExponentExtremas/minimumN2P"
import {
    N2,
    N2P,
    NumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P,
    NumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2,
} from "../../../../../../src/general/music/n2d3p9/primeExponentExtremas/types"

describe("computeMinimumN2PForCandidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9", () => {
    it("finds the minimum N2P out of the numerator possibilities where the gpf is greater than the denominator prime, and the minimum N2P out of the numerator possibilities where the gpf is lesser than the denominator prime, and then returns the minimum of those two", () => {
        // so the candidate maximum denominator power will be 7^2 = 49
        const denominatorPrime = 7 as Prime
        const candidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9 = 2 as Exponent<Prime>

        const sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaximumN2D3P9 = {
            numeratorPossibilitiesGivenMaximumN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2: [
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
            ] as NumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2[],
            numeratorPossibilitiesGivenMaximumN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P: [
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
            ] as NumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P[],
        }

        const actual = computeMinimumN2PForCandidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9({
            sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaximumN2D3P9,
            denominatorPrime,
            candidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9,
        })

        // 15.625, the minimum from the list with gcp < denominator prime,
        // is lower than 35.75, the minimum from the list with gcp > denominator prime;
        // however, the list with gcp < denominator prime therefore does not have the gcp included
        // because it will always be whatever the denominator prime is
        // so you actually have to multiply the 15.625 by the 7, getting 109.375
        // so the 35.75 wins
        const expected = 35.75
        expect(actual).toBe(expected)
    })

    it("another example where the minimum N2P from the list with the numerator possibilities with gcp < denominator prime is the one which gets picked", () => {
        // so the candidate maximum denominator power will be 7^2 = 49
        const denominatorPrime = 7 as Prime
        const candidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9 = 2 as Exponent<Prime>

        const sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaximumN2D3P9 = {
            numeratorPossibilitiesGivenMaximumN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2: [
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
            ] as NumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2[],
            numeratorPossibilitiesGivenMaximumN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P: [
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
            ] as NumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P[],
        }

        const actual = computeMinimumN2PForCandidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9({
            sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaximumN2D3P9,
            denominatorPrime,
            candidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9,
        })

        // here, you still have to multiply the 15.625 by the 7, getting 109.375
        // but this time that's lower than the 132.25 N2P
        // which is the minimum for the list where the gcp > denominator prime
        const expected = 109.375
        expect(actual).toBe(expected)
    })
})
