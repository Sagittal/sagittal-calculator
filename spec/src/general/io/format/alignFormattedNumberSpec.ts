import { alignFormattedNumber, Formatted } from "../../../../../src/general/io"

describe("alignFormattedNumber", (): void => {
    it("shifts over numbers so that the decimal places align", (): void => {
        expect(alignFormattedNumber("2.340" as Formatted<number>))
            .toBe("  2.340")
        expect(alignFormattedNumber("-2.340" as Formatted<number>))
            .toBe(" -2.340")
        expect(alignFormattedNumber("-12.340" as Formatted<number>))
            .toBe("-12.340")
        expect(alignFormattedNumber("12.340" as Formatted<number>))
            .toBe(" 12.340")
    })
})
