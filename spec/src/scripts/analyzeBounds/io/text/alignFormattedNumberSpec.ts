import { Formatted } from "../../../../../../src/general/io"
import { alignFormattedNumber } from "../../../../../../src/scripts/analyzeBounds/io/text/alignFormattedNumber"

describe("alignFormattedNumber", () => {
    it("shifts over numbers so that the decimal places align", () => {
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
