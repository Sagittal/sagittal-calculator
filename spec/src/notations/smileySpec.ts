import { SymbolLongAscii } from "../../../src/notations"
import { SymbolSmiley } from "../../../src/notations/types"
import { computeSmileyFromAscii } from "../../../src/notations/smiley"

describe("computeSmileyFromAscii", () => {
    it("converts ascii to smiley code", () => {
        const ascii = "`'|)" as SymbolLongAscii

        const result = computeSmileyFromAscii(ascii)

        expect(result).toBe(":`::'::|):" as SymbolSmiley)
    })

    it("handles //", () => {
        const ascii = ")//|" as SymbolLongAscii

        const result = computeSmileyFromAscii(ascii)

        expect(result).toBe(":)/ /|:" as SymbolSmiley)
    })

    it("handles \\\\", () => {
        const ascii = "|\\\\" as SymbolLongAscii

        const result = computeSmileyFromAscii(ascii)

        expect(result).toBe(":|\\ \\:" as SymbolSmiley)
    })

    it("does the right thing with double ticks", () => {
        const ascii = "``|)" as SymbolLongAscii

        const result = computeSmileyFromAscii(ascii)

        expect(result).toBe(":``::|):" as SymbolSmiley)
    })

    it("does the right thing with double down ticks", () => {
        const ascii = ",,|)" as SymbolLongAscii

        const result = computeSmileyFromAscii(ascii)

        expect(result).toBe(":,,::|):" as SymbolSmiley)
    })
})
