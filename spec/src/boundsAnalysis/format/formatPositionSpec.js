const {formatPosition} = require("../../../../src/boundsAnalysis/format/formatPosition")

describe("formatPosition", () => {
    it("always shows 3 decimal places", () => {
        expect(formatPosition(0.12340)).toBe("0.123")
    })

    it("includes a trailing zero", () => {
        expect(formatPosition(12.340)).toBe("12.340")
    })
})
