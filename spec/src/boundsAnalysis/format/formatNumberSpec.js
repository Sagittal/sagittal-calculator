const {formatNumber} = require("../../../../src/boundsAnalysis/format/formatNumber")

describe("formatNumber", () => {
    it("always shows 3 decimal places", () => {
        expect(formatNumber(0.12340)).toBe("0.123")
    })

    it("includes a trailing zero", () => {
        expect(formatNumber(12.340)).toBe("12.340")
    })
})
