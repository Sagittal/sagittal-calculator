import { formatDecimal } from "../../../../../src/general/io"

describe("formatDecimal", (): void => {
    it("always shows 3 decimal places", (): void => {
        expect(formatDecimal(0.12340)).toBe("  0.123")
    })

    it("includes a trailing zero", (): void => {
        expect(formatDecimal(12.340)).toBe(" 12.340")
    })

    it("supports not aligning", (): void => {
        expect(formatDecimal(12.340, { align: false })).toBe("12.340")
    })
})
