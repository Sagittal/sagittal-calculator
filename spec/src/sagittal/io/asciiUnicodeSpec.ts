import { SymbolLongAscii, unicodeFromAscii } from "../../../../src/sagittal"

describe("asciiUnicode", () => {
    it("given an ascii representation of a symbol, it returns its unicode representation", () => {
        const symbolAscii = "``)|" as SymbolLongAscii

        const actual = unicodeFromAscii(symbolAscii)

        const expected = ""
        expect(actual).toBe(expected)
    })
})
