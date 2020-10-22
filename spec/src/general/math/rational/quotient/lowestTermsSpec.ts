import {Quotient} from "../../../../../../src/general/math/numeric/quotient"
import {computeLowestTermsRationalQuotient} from "../../../../../../src/general/math/rational/quotient"

describe("computeLowestTermsRationalQuotient", (): void => {
    it("returns the rational quotient in lowest terms", (): void => {
        const rationalQuotient = [99, 21] as Quotient<{rational: true}>

        const actual = computeLowestTermsRationalQuotient(rationalQuotient)

        const expected = [33, 7] as Quotient<{rational: true}>
        expect(actual).toEqual(expected)
    })
})
