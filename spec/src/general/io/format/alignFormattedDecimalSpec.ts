import { alignFormattedDecimal, Formatted } from "../../../../../src/general/io"

describe("alignFormattedDecimal", (): void => {
    it("shifts over numbers so that the decimal places align", (): void => {
        expect(alignFormattedDecimal("2.340" as Formatted<number>))
            .toBe("  2.340")
        expect(alignFormattedDecimal("-2.340" as Formatted<number>))
            .toBe(" -2.340")
        expect(alignFormattedDecimal("-12.340" as Formatted<number>))
            .toBe("-12.340")
        expect(alignFormattedDecimal("12.340" as Formatted<number>))
            .toBe(" 12.340")
    })
})
