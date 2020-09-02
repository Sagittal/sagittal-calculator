import { SymbolLongAscii } from "../../../../src/sagittal"
import { computeSmileyFromAscii } from "../../../../src/sagittal/io/smiley"
import { SymbolSmiley } from "../../../../src/sagittal/io/types"

describe("computeSmileyFromAscii", () => {
    it("converts ascii to smiley code", () => {
        const ascii = "`'|)" as SymbolLongAscii

        const actual = computeSmileyFromAscii(ascii)

        const expected = ":`::'::|):" as SymbolSmiley
        expect(actual).toBe(expected)
    })

    it("handles //", () => {
        const ascii = ")//|" as SymbolLongAscii

        const actual = computeSmileyFromAscii(ascii)

        const expected = ":)/ /|:" as SymbolSmiley
        expect(actual).toBe(expected)
    })

    it("handles \\\\", () => {
        const ascii = "|\\\\" as SymbolLongAscii

        const actual = computeSmileyFromAscii(ascii)

        const expected = ":|\\ \\:" as SymbolSmiley
        expect(actual).toBe(expected)
    })

    it("does the right thing with double ticks", () => {
        const ascii = "``|)" as SymbolLongAscii

        const actual = computeSmileyFromAscii(ascii)

        const expected = ":``::|):" as SymbolSmiley
        expect(actual).toBe(expected)
    })

    it("does the right thing with double down ticks", () => {
        const ascii = ",,|)" as SymbolLongAscii

        const actual = computeSmileyFromAscii(ascii)

        const expected = ":,,::|):" as SymbolSmiley
        expect(actual).toBe(expected)
    })
})
