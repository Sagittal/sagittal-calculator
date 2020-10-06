import { Id, Io, ioSettings, TableFormat } from "../../../../src/general"
import { formatSymbolClass, SymbolClass } from "../../../../src/sagittal"

describe("formatSymbolClass", (): void => {
    const symbolClassId: Id<SymbolClass> = 116 as Id<SymbolClass>

    it("returns the symbol class as its representative symbol's long ASCII form by default (or configured for display on a terminal)", (): void => {
        const actual = formatSymbolClass(symbolClassId, ioSettings)

        const expected = "  ,(/|  " as Io
        expect(actual).toBe(expected)
    })

    it("returns the symbol class as its representative symbols' smiley form if configured for pasting to the forum            ", (): void => {
        ioSettings.tableFormat = TableFormat.FORUM
        const actual = formatSymbolClass(symbolClassId, ioSettings)

        const expected = ":,::(/|:" as Io
        expect(actual).toBe(expected)
    })

    it("returns the symbol class as its representative symbols' unicode if configured for importing into a spreadsheet program on a computer which might have Bravura installed", (): void => {
        ioSettings.tableFormat = TableFormat.SPREADSHEET
        const actual = formatSymbolClass(symbolClassId, ioSettings)

        const expected = "" as Io
        expect(actual).toBe(expected)
    })

    it("does not align the parenthetical natural symbol in the same way - just centers it", (): void => {
        const actual = formatSymbolClass(0 as Id<SymbolClass>, ioSettings)

        const expected = " (|//|) " as Io
        expect(actual).toBe(expected)
    })
})
