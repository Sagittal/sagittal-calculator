import { SymbolLongAscii } from "../../../../src/sagittal"
import { SymbolSmiley } from "../../../../src/sagittal/io"
import { computeSmileyFromAscii } from "../../../../src/sagittal/io/smiley"

describe("computeSmileyFromAscii", (): void => {
    it("converts ascii to smiley code", (): void => {
        const ascii = "`'|)" as SymbolLongAscii

        const actual = computeSmileyFromAscii(ascii)

        const expected = ":`::'::|):" as SymbolSmiley
        expect(actual).toBe(expected)
    })

    it("handles //", (): void => {
        const ascii = ")//|" as SymbolLongAscii

        const actual = computeSmileyFromAscii(ascii)

        const expected = ":)/ /|:" as SymbolSmiley
        expect(actual).toBe(expected)
    })

    it("handles \\\\", (): void => {
        const ascii = "|\\\\" as SymbolLongAscii

        const actual = computeSmileyFromAscii(ascii)

        const expected = ":|\\ \\:" as SymbolSmiley
        expect(actual).toBe(expected)
    })

    it("does the correct thing with double ticks", (): void => {
        const ascii = "``|)" as SymbolLongAscii

        const actual = computeSmileyFromAscii(ascii)

        const expected = ":``::|):" as SymbolSmiley
        expect(actual).toBe(expected)
    })

    it("does the correct thing with double down ticks", (): void => {
        const ascii = ",,|)" as SymbolLongAscii

        const actual = computeSmileyFromAscii(ascii)

        const expected = ":,,::|):" as SymbolSmiley
        expect(actual).toBe(expected)
    })
})
