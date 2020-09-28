import { IntegerDecimal, RationalMonzo } from "../../../../../../../src/general/math"
import { computeRationalMonzoFromIntegerDecimalOrRationalMonzo } from "../../../../../../../src/general/math/rational/num/monzo"

describe("computeRationalMonzoFromIntegerDecimalOrRationalMonzo", (): void => {
    const expected = [1, 0, 0, 0, 1] as RationalMonzo

    it("works for an integer", (): void => {
        const integerDecimal = 22 as IntegerDecimal

        const actual = computeRationalMonzoFromIntegerDecimalOrRationalMonzo(integerDecimal)

        expect(actual).toEqual(expected)
    })

    it("works for a monzo", (): void => {
        const actual = computeRationalMonzoFromIntegerDecimalOrRationalMonzo(expected)

        expect(actual).toEqual(expected)
    })
})
