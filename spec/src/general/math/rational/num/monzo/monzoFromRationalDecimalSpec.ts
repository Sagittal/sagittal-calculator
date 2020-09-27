import { RationalMonzo } from "../../../../../../../src/general/math"
import { RationalDecimal } from "../../../../../../../src/general/math/rational/num/decimal"
import { computeRationalMonzoFromRationalDecimal } from "../../../../../../../src/general/math/rational/num/monzo/monzoFromRationalDecimal"

describe("computeRationalMonzoFromRationalDecimal", (): void => {
    it("works", (): void => {
        const rationalDecimal = 1.4 as RationalDecimal

        const actual = computeRationalMonzoFromRationalDecimal(rationalDecimal)

        const expected = [0, 0, -1, 1] as RationalMonzo
        expect(actual).toEqual(expected)
    })
})
