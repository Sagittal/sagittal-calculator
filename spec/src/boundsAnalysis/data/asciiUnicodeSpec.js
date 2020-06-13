const {unicodeFromAscii} = require("../../../../src/boundsAnalysis/data/asciiUnicode")

describe("asciiUnicode", () => {
    it("given an ascii representation of a symbol, it returns its unicode representation", () => {
        const symbolAscii = "``)|"

        const result = unicodeFromAscii(symbolAscii)

        expect(result).toBe("")
    })
})
