import { Decimal, Denominator, Exponent, Max, Prime } from "../../../../../../../../src/general"
import { computeD39ForPossibleMaxDenominatorPrimeExponent } from "../../../../../../../../src/sagittal/ji/two3FreeClass/n2d3p9/primeExponentExtremas/denominator/d39"
import { D39 } from "../../../../../../../../src/sagittal/ji/two3FreeClass/n2d3p9/primeExponentExtremas/denominator/types"

describe("computeD39ForPossibleMaxDenominatorPrimeExponent", (): void => {
    it("returns the D39 part of the N2D3P9 calculation", (): void => {
        const denominatorPrime = 11 as Denominator & Prime
        const possibleMaxDenominatorPrimeExponentGivenMaxN2D3P9 =
            5 as Max<Denominator & Decimal<{ integer: true }> & Exponent<Prime>>

        const actual = computeD39ForPossibleMaxDenominatorPrimeExponent({
            possibleMaxDenominatorPrimeExponentGivenMaxN2D3P9,
            denominatorPrime,
        })

        const expected = ((11 / 3) ** 5) * (1 / 9) as D39
        expect(actual).toBeCloseToTyped(expected)
    })
})
