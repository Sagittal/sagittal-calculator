import { formatInteger } from "../../../../../src/general/io"
import { Integer } from "../../../../../src/general/math"

describe("formatInteger", (): void => {
    const integer = 1 as Integer

    it("provides the same centering (3 digits, decimal point, 3 digits) as with formatted numbers", (): void => {
        const actual = formatInteger(integer)

        const expected = "1"
        expect(actual).toBe(expected)
    })

    it("supports aligning (for tables)", (): void => {
        const actual = formatInteger(integer, { align: true })

        const expected = "  1    "
        expect(actual).toBe(expected)
    })
})
