import { IntegerNumerator } from "../../../../../../../../../src/general/math/rational/num/quotient"
import { computeN2 } from "../../../../../../../../../src/sagittal/ji/twoThreeFreeClass/n2d3p9/primeExponentExtremas/denominator/sortedNumeratorPossibilities/n2"
import { N2 } from "../../../../../../../../../src/sagittal/ji/twoThreeFreeClass/n2d3p9/primeExponentExtremas/denominator/sortedNumeratorPossibilities/types"

describe("computeN2", (): void => {
    it(
        "returns the N2 part of the N2D3P9 formula, or in other words the part that the numerator contributes",
        (): void => {
            const integerNumerator = 35 as IntegerNumerator

            const actual = computeN2(integerNumerator)

            const expected = 35 / 2 ** 2 as N2
            expect(actual).toBe(expected)
        },
    )
})
