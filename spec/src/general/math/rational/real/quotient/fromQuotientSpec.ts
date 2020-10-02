import { RationalQuotient } from "../../../../../../../src/general/math/rational/real/quotient"
import { computeRationalQuotientFromRealQuotient } from "../../../../../../../src/general/math/rational/real/quotient/fromQuotient"
import { RealQuotient } from "../../../../../../../src/general/math/real/quotient"

describe("computeRationalQuotientFromRealQuotient", (): void => {
    it("converts a quotient whose parts are not integers into one whose parts are integers", (): void => {
        const realQuotient = [ 5.5, 3.5 ] as RealQuotient

        const actual = computeRationalQuotientFromRealQuotient(realQuotient)

        const expected = [ 11, 7 ] as RationalQuotient
        expect(actual).toEqual(expected)
    })

    it("also works when the decimal point count is different", (): void => {
        const realQuotient = [ 5.5, 34.1 ] as RealQuotient

        const actual = computeRationalQuotientFromRealQuotient(realQuotient)

        const expected = [ 5, 31 ] as RationalQuotient
        expect(actual).toEqual(expected)
    })
})
