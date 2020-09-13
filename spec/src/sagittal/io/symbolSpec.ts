import { Id, Io, ioSettings } from "../../../../src/general"
import { formatSymbol, JiSymbol } from "../../../../src/sagittal"

describe("formatSymbol", (): void => {
    const symbolId: Id<JiSymbol> = 117 as Id<JiSymbol>

    it("returns the symbol in long ASCII form by default (or configured for display on a terminal)", (): void => {
        const actual = formatSymbol(symbolId, ioSettings)

        const expected = "  ,(/|  " as Io
        expect(actual).toBe(expected)
    })

    it("returns the symbol in smiley form if configured for pasting to the forum", (): void => {
        const actual = formatSymbol(symbolId, { forForum: true })

        const expected = ":,::(/|:" as Io
        expect(actual).toBe(expected)
    })
})
