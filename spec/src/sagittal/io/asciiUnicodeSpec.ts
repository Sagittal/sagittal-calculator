import { Ascii, unicodeFromAscii } from "../../../../src/sagittal"

describe("asciiUnicode", (): void => {
    it("given an ascii representation of a symbol, it returns its unicode representation", (): void => {
        const ascii = "``)|" as Ascii

        const actual = unicodeFromAscii(ascii)

        const expected = ""
        expect(actual).toBe(expected)
    })
})
