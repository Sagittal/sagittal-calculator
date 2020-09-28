import { RationalQuotient, Smoothness } from "../../../../../../../src/general/math"
import { isSmoothRationalQuotient } from "../../../../../../../src/general/math/rational/num/quotient"

describe("isSmoothRationalQuotient", (): void => {
    it("returns true if the quotient is smooth to the requested smoothness", (): void => {
        const rationalQuotient = [7, 5] as RationalQuotient

        const actual = isSmoothRationalQuotient(rationalQuotient, 7 as 7 & Smoothness)

        expect(actual).toBeTruthy()
    })

    it("returns false if the quotient is not smooth to the requested smoothness", (): void => {
        const rationalQuotient = [7, 5] as RationalQuotient

        const actual = isSmoothRationalQuotient(rationalQuotient, 5 as 5 & Smoothness)

        expect(actual).toBeFalsy()
    })
})
