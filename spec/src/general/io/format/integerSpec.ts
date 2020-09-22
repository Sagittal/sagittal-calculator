import { formatInteger } from "../../../../../src/general/io"
import { Integer } from "../../../../../src/general/math"

describe("formatInteger", (): void => {
    it("provides the same centering (3 digits, decimal point, 3 digits) as with formatted numbers", (): void => {
        expect(formatInteger(1 as Integer)).toBe("  1    ")
    })

    it("supports not aligning", (): void => {
        expect(formatInteger(1 as Integer, { align: false })).toBe("1")
    })
})
