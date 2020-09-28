import { formatIntegerDecimal } from "../../../../../src/general/io"
import { IntegerDecimal } from "../../../../../src/general/math"

describe("formatIntegerDecimal", (): void => {
    const integerDecimal = 1 as IntegerDecimal

    it("provides the same centering (3 digits, decimal point, 3 digits) as with formatted numbers", (): void => {
        const actual = formatIntegerDecimal(integerDecimal)

        const expected = "1"
        expect(actual).toBe(expected)
    })

    it("supports aligning (for tables)", (): void => {
        const actual = formatIntegerDecimal(integerDecimal, { align: true })

        const expected = "  1    "
        expect(actual).toBe(expected)
    })
})
