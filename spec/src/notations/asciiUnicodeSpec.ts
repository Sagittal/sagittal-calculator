import { unicodeFromAscii } from "../../../src/notations"

describe("asciiUnicode", () => {
    it("given an ascii representation of a symbol, it returns its unicode representation", () => {
        const symbolAscii = "``)|"

        const actual = unicodeFromAscii(symbolAscii)

        const expected = ""
        expect(actual).toBe(expected)
    })
})
