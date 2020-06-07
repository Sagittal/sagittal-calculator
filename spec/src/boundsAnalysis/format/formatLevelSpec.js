const {formatLevel} = require("../../../../src/boundsAnalysis/format/formatLevel")

describe("format level", () => {
    it("makes levels nice for people to read", () => {
        expect(formatLevel("VERY_HIGH")).toBe("Very High")
        expect(formatLevel("EXTREME")).toBe("Extreme")
    })
})
