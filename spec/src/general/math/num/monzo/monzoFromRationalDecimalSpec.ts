import { Decimal, Monzo } from "../../../../../../src/general/math"
import { computeMonzoFromRationalDecimal } from "../../../../../../src/general/math/num/monzo/monzoFromRationalDecimal"

describe("computeMonzoFromRationalDecimal", (): void => {
    it("works", (): void => {
        const decimal = 1.4 as Decimal<{ potentiallyIrrational: false }>

        const actual = computeMonzoFromRationalDecimal(decimal)

        const expected = [0, 0, -1, 1] as Monzo
        expect(actual).toEqual(expected)
    })
})
