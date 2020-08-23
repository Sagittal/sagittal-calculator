import { Prime } from "../../../../../../src/general"
import { Exponent } from "../../../../../../src/general/math"
import { N2D3P9 } from "../../../../../../src/general/music/n2d3p9"
import { computeMaximumNumeratorPrimeExponentsGivenMaximumN2D3P9 } from "../../../../../../src/general/music/n2d3p9/primeExponentExtremas/maximumNumeratorPrimeExponents"

describe("computeMaximumNumeratorPrimeExponentsGivenMaximumN2D3P9", () => {
    it("returns an array of the maximum exponent per prime, cutting off at the first prime for which is it is zero (i.e. with this max N2D3P9, there is no way to have that prime in the numerator, even just to the first power, even in complete isolation) but where the first two elements are 0 (corresponding to primes 2 and 3 which have no effect in 5-rough land)", () => {
        const maximumN2D3P9: N2D3P9 = 136 as N2D3P9

        const result = computeMaximumNumeratorPrimeExponentsGivenMaximumN2D3P9(maximumN2D3P9)

        //                      2  3  5  7 11 13 17 19 23 ...
        expect(result).toEqual([0, 0, 6, 4, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1] as Array<Exponent<Prime>>)
    })

    it("another example", () => {
        const maximumN2D3P9: N2D3P9 = 10 as N2D3P9

        const result = computeMaximumNumeratorPrimeExponentsGivenMaximumN2D3P9(maximumN2D3P9)

        //                      2  3  5  7 11 13
        expect(result).toEqual([0, 0, 3, 2, 1, 1] as Array<Exponent<Prime>>)
    })

    it("edge case - maximum N2D3P9 of 1 given", () => {
        const maximumN2D3P9: N2D3P9 = 1 as N2D3P9

        const result = computeMaximumNumeratorPrimeExponentsGivenMaximumN2D3P9(maximumN2D3P9)

        expect(result).toEqual([0, 0] as Array<Exponent<Prime>>)
    })
})
