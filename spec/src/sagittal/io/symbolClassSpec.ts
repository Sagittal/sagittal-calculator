import { Id, Io, ioSettings } from "../../../../src/general"
import { formatSymbolClass, SymbolClass } from "../../../../src/sagittal"

describe("formatSymbolClass", (): void => {
    const symbolClassId: Id<SymbolClass> = 117 as Id<SymbolClass>

    it("returns the symbol class as its representative symbol's long ASCII form by default (or configured for display on a terminal)", (): void => {
        const actual = formatSymbolClass(symbolClassId, ioSettings)

        const expected = "  ,(/|  " as Io
        expect(actual).toBe(expected)
    })

    it(
        "returns the symbol class as its representative symbols' smiley form if configured for pasting to the forum",
        (): void => {
            const actual = formatSymbolClass(symbolClassId, { forForum: true })

            const expected = ":,::(/|:" as Io
            expect(actual).toBe(expected)
        },
    )
})
