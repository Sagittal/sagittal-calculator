import { Decimal } from "../../../../../../../../../src/general/math/numeric/decimal"
import { Numerator } from "../../../../../../../../../src/general/math/numeric/quotient"
import { computeN2 } from "../../../../../../../../../src/sagittal/ji/two3FreeClass/n2d3p9/primeExponentExtremas/denominator/sortedNumeratorPossibilities/n2"
import { N2 } from "../../../../../../../../../src/sagittal/ji/two3FreeClass/n2d3p9/primeExponentExtremas/denominator/sortedNumeratorPossibilities/types"

describe("computeN2", (): void => {
    it("returns the N2 part of the N2D3P9 formula, or in other words the part that the numerator contributes            ", (): void => {
        const numerator = 35 as Numerator & Decimal<{ integer: true }>

        const actual = computeN2(numerator)

        const expected = 35 / 2 ** 2 as N2
        expect(actual).toBe(expected)
    })
})
