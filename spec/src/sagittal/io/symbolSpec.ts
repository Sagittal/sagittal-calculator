import { Id, Io } from "../../../../src/general"
import { formatSymbol, JiSymbol } from "../../../../src/sagittal"

describe("formatSymbol", () => {
    const symbolId: Id<JiSymbol> = 117 as Id<JiSymbol>

    it("returns the symbol in long ASCII form by default (or configured for display on a terminal)", () => {
        const actual = formatSymbol(symbolId)

        const expected = "  ,(/|  " as Io
        expect(actual).toBe(expected)
    })

    it("returns the symbol in smiley form if configured for pasting to the forum", () => {
        const actual = formatSymbol(symbolId, { forForum: true })

        const expected = ":,::(/|:" as Io
        expect(actual).toBe(expected)
    })
})
