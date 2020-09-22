import { Numerator } from "../../../../../../../../../src/general/math/rational/ratio"
import { N2P } from "../../../../../../../../../src/sagittal/ji/twoThreeFreeClass/n2d3p9/primeExponentExtremas/denominator/sortedNumeratorPossibilities"
import { computeN2P } from "../../../../../../../../../src/sagittal/ji/twoThreeFreeClass/n2d3p9/primeExponentExtremas/denominator/sortedNumeratorPossibilities/n2p"

describe("computeN2P", (): void => {
    it("returns the N2P part of the N2D3P9 formula, or in other words the part that the numerator contributes, as well as the prime limit", (): void => {
        const numerator = 35 as Numerator

        const actual = computeN2P(numerator)

        const expected = 7 * 35 / 2 ** 2 as N2P
        expect(actual).toBe(expected)
    })
})
