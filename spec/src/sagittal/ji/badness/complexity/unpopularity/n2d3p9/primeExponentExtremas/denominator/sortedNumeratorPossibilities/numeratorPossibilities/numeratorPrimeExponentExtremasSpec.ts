import {Decimal, Exponent, Extrema, Max, Prime} from "@sagittal/general"
import {N2D3P9} from "../../../../../../../../../../../../src/sagittal"
import {computeNumeratorPrimeExponentExtremasGivenMaxN2D3P9} from "../../../../../../../../../../../../src/sagittal/ji/badness/complexity/unpopularity/n2d3p9/primeExponentExtremas/denominator/sortedNumeratorPossibilities/numeratorPossibilities/numeratorPrimeExponentExtremas"

describe("computeNumeratorPrimeExponentExtremasGivenMaxN2D3P9", (): void => {
    it("returns the monzos for numerators worth checking", (): void => {
        const maxN2D3P9 = 3 as Max<N2D3P9>

        const actual = computeNumeratorPrimeExponentExtremasGivenMaxN2D3P9(maxN2D3P9)

        // The numerator monzos to check are:
        // [],             // N2D3P9(1)  = 1
        //
        // [0, 0, 1],      // N2D3P9(5)  = 1.39
        //
        // [0, 0, 0, 1],   // N2D3P9(7)  = 2.72
        //
        // This one is not less than 3, but the only thing that's correct to worry about at this point is that
        // 5^1 and 7^1 are okay, so we gotta try them together to be safe
        // [0, 0, 1, 1],   // N2D3P9(35) = 6.81 <---- GREATER THAN 3
        const expected = [
            [0, 0],
            [0, 0],
            [0, 1],
            [0, 1],
        ] as Array<Extrema<{of: Decimal<{integer: true}> & Exponent<Prime>}>>
        expect(actual).toEqual(expected)
    })
})
