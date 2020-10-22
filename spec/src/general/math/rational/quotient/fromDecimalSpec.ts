import {Decimal} from "../../../../../../src/general/math/numeric/decimal"
import {Quotient} from "../../../../../../src/general/math/numeric/quotient"
import {computeRationalQuotientFromRationalDecimal} from "../../../../../../src/general/math/rational/quotient"

describe("computeRationalQuotientFromRationalDecimal", (): void => {
    it("works", (): void => {
        const rationalDecimal = 1.4 as Decimal<{rational: true}>

        const actual = computeRationalQuotientFromRationalDecimal(rationalDecimal)

        const expected = [7, 5] as Quotient<{rational: true}>
        expect(actual).toEqual(expected)
    })
})
