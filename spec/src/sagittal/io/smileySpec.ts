import { Ascii } from "../../../../src/sagittal"
import { Smiley } from "../../../../src/sagittal/io"
import { computeSmileyFromAscii } from "../../../../src/sagittal/io/smiley"

describe("computeSmileyFromAscii", (): void => {
    it("converts ascii to smiley code", (): void => {
        const ascii = "`'|)" as Ascii

        const actual = computeSmileyFromAscii(ascii)

        const expected = ":`::'::|):" as Smiley
        expect(actual).toBe(expected)
    })

    it("handles //", (): void => {
        const ascii = ")//|" as Ascii

        const actual = computeSmileyFromAscii(ascii)

        const expected = ":)/ /|:" as Smiley
        expect(actual).toBe(expected)
    })

    it("handles \\\\", (): void => {
        const ascii = "|\\\\" as Ascii

        const actual = computeSmileyFromAscii(ascii)

        const expected = ":|\\ \\:" as Smiley
        expect(actual).toBe(expected)
    })

    it("does the correct thing with double ticks", (): void => {
        const ascii = "``|)" as Ascii

        const actual = computeSmileyFromAscii(ascii)

        const expected = ":``::|):" as Smiley
        expect(actual).toBe(expected)
    })

    it("does the correct thing with double down ticks", (): void => {
        const ascii = ",,|)" as Ascii

        const actual = computeSmileyFromAscii(ascii)

        const expected = ":,,::|):" as Smiley
        expect(actual).toBe(expected)
    })

    it("does the correct thing with the natural symbol", (): void => {
        const ascii = "(|//|)" as Ascii

        const actual = computeSmileyFromAscii(ascii)

        const expected = "(:h:)" as Smiley
        expect(actual).toBe(expected)
    })
})
