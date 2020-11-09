import {Decimal} from "../../../../../../src/general/math/numeric/decimal"
import {computeRationalDecimalCopfr, Copfr} from "../../../../../../src/general/math/rational"

describe("computeRationalDecimalCopfr", (): void => {
    it("returns the count of prime factors with repetition", (): void => {
        const rationalDecimal = 275 as Decimal<{rational: true}>      // 5 * 5 * 11

        const actual = computeRationalDecimalCopfr(rationalDecimal)

        const expected = 3 as Copfr     // 5 & 5 & 11
        expect(actual).toBe(expected)
    })
})
