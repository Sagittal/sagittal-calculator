import { SymbolLongAscii } from "../../../../src/sagittal"
import { computeSmileyFromAscii } from "../../../../src/sagittal/io/smiley"
import { SymbolSmiley } from "../../../../src/sagittal/io/types"

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

    it("does the right thing with double ticks", (): void => {
        const ascii = "``|)" as SymbolLongAscii

        const actual = computeSmileyFromAscii(ascii)

        const expected = ":``::|):" as SymbolSmiley
        expect(actual).toBe(expected)
    })

    it("does the right thing with double down ticks", (): void => {
        const ascii = ",,|)" as SymbolLongAscii

        const actual = computeSmileyFromAscii(ascii)

        const expected = ":,,::|):" as SymbolSmiley
        expect(actual).toBe(expected)
    })
})
