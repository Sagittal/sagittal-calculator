import { formatNumber } from "../../../../../src/general/io"

describe("formatNumber", (): void => {
    it("always shows 3 decimal places", (): void => {
        expect(formatNumber(0.12340)).toBe("  0.123")
    })

    it("includes a trailing zero", (): void => {
        expect(formatNumber(12.340)).toBe(" 12.340")
    })
})
