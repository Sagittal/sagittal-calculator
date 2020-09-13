import { SymbolLongAscii, unicodeFromAscii } from "../../../../src/sagittal"

describe("asciiUnicode", (): void => {
    it("given an ascii representation of a symbol, it returns its unicode representation", (): void => {
        const symbolAscii = "``)|" as SymbolLongAscii

        const actual = unicodeFromAscii(symbolAscii)

        const expected = ""
        expect(actual).toBe(expected)
    })
})
