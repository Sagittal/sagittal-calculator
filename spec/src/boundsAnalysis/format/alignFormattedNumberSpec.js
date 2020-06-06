const {alignFormattedNumber} = require("../../../../src/boundsAnalysis/format/alignFormattedNumber")

describe("alignFormattedNumber", () => {
    it("shifts over numbers so that the decimal places align", () => {
        expect(alignFormattedNumber("2.340"))
            .toBe("  2.340")
        expect(alignFormattedNumber("-2.340"))
            .toBe(" -2.340")
        expect(alignFormattedNumber("-12.340"))
            .toBe("-12.340")
        expect(alignFormattedNumber("12.340"))
            .toBe(" 12.340")
    })
})
