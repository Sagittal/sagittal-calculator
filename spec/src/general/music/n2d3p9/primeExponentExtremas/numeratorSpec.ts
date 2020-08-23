import { Numerator } from "../../../../../../src/general"
import { N2D3P9 } from "../../../../../../src/general/music/n2d3p9"
import { computeMaximumNumeratorGivenMaximumN2D3P3 } from "../../../../../../src/general/music/n2d3p9/primeExponentExtremas/numerator"

describe("computeMaximumNumeratorGivenMaximumN2D3P3", () => {
    it("works for 136, for which the maximum numerator is a simple power of a single prime", () => {
        const maximumN2D3P9: N2D3P9 = 136 as N2D3P9

        const result = computeMaximumNumeratorGivenMaximumN2D3P3(maximumN2D3P9)

        expect(result).toEqual(5 ** 6 as Numerator)
    })

    it("works for 10, for which it is the case that the maximum numerator has an N2D3P9 which is less than the N2D3P9 possible (< than the max N2D3P9) with a different numerator, except that this other numerator is less than it (i.e. 49 has N2D3P9 of 9.53 and 125 has N2D3P9 of 8.68, but 125 is our max numerator)", () => {
        const maximumN2D3P9: N2D3P9 = 10 as N2D3P9

        const result = computeMaximumNumeratorGivenMaximumN2D3P3(maximumN2D3P9)

        expect(result).toEqual(5 ** 3 as Numerator)
    })

    it("works for 7, for which the maximum numerator's prime factorization includes more than one different prime", () => {
        const maximumN2D3P9: N2D3P9 = 7 as N2D3P9

        const result = computeMaximumNumeratorGivenMaximumN2D3P3(maximumN2D3P9)

        expect(result).toEqual(5 ** 1 * 7 ** 1 as Numerator)
    })
})
