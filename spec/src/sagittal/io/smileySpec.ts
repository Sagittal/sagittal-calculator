import { computeSmileyFromSymbol, Smiley } from "../../../../src/sagittal/io"
import { SagittalSymbol } from "../../../../src/sagittal/notations"

describe("computeSmileyFromSymbol", (): void => {
    it("converts a symbol to smiley code", (): void => {
        const symbol = "`'|)" as SagittalSymbol

        const actual = computeSmileyFromSymbol(symbol)

        const expected = ":`::'::|):" as Smiley
        expect(actual).toBe(expected)
    })

    it("handles //", (): void => {
        const symbol = ")//|" as SagittalSymbol

        const actual = computeSmileyFromSymbol(symbol)

        const expected = ":)/ /|:" as Smiley
        expect(actual).toBe(expected)
    })

    it("handles \\\\", (): void => {
        const symbol = "|\\\\" as SagittalSymbol

        const actual = computeSmileyFromSymbol(symbol)

        const expected = ":|\\ \\:" as Smiley
        expect(actual).toBe(expected)
    })

    it("does the correct thing with double ticks", (): void => {
        const symbol = "``|)" as SagittalSymbol

        const actual = computeSmileyFromSymbol(symbol)

        const expected = ":``::|):" as Smiley
        expect(actual).toBe(expected)
    })

    it("does the correct thing with double down ticks", (): void => {
        const symbol = ",,|)" as SagittalSymbol

        const actual = computeSmileyFromSymbol(symbol)

        const expected = ":,,::|):" as Smiley
        expect(actual).toBe(expected)
    })

    it("does the correct thing with the natural symbol", (): void => {
        const symbol = "(|//|)" as SagittalSymbol

        const actual = computeSmileyFromSymbol(symbol)

        const expected = "(:h:)" as Smiley
        expect(actual).toBe(expected)
    })
})
