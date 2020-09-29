import { Quotient } from "../../../../../../../src/general/math/num/quotient"
import { RationalQuotient } from "../../../../../../../src/general/math/rational/num/quotient"
import { computeRationalQuotientFromQuotient } from "../../../../../../../src/general/math/rational/num/quotient/fromQuotient"

describe("computeRationalQuotientFromQuotient", (): void => {
    it("converts a quotient whose parts are not integers into one whose parts are integers", (): void => {
        const quotient = [ 5.5, 3.5 ] as Quotient

        const actual = computeRationalQuotientFromQuotient(quotient)

        const expected = [ 11, 7 ] as RationalQuotient
        expect(actual).toEqual(expected)
    })

    it("also works when the decimal point count is different", (): void => {
        const quotient = [ 5.5, 34.1 ] as Quotient

        const actual = computeRationalQuotientFromQuotient(quotient)

        const expected = [ 5, 31 ] as RationalQuotient
        expect(actual).toEqual(expected)
    })
})
