import { SymbolLongAscii, unicodeFromAscii } from "../../../src/notations"

describe("asciiUnicode", () => {
    it("given an ascii reformatation of a symbol, it returns its unicode reformatation", () => {
        const symbolAscii = "``)|" as SymbolLongAscii

        const actual = unicodeFromAscii(symbolAscii)

        const expected = ""
        expect(actual).toBe(expected)
    })
})
