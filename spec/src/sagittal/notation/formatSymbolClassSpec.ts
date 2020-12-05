import {Io, ioSettings, TableFormat} from "@sagittal/general"
import {formatSymbolClass, SymbolClassId} from "../../../../src/sagittal"

describe("formatSymbolClass", (): void => {
    const symbolClassId = SymbolClassId.ANTIWING_AND_LEFT_ARC_AND_BARB

    it("returns the symbol class as its flacco's sagittal long ASCII form by default (or configured for display on a terminal)", (): void => {
        const actual = formatSymbolClass(symbolClassId)

        const expected = "  ,(/|  " as Io
        expect(actual).toBe(expected)
    })

    it("returns the symbol class as its flacco's sagittal smiley form if configured for pasting to the forum, including a disabling of the monospacing pre tag", (): void => {
        ioSettings.tableFormat = TableFormat.FORUM
        const actual = formatSymbolClass(symbolClassId)

        const expected = ":,::(/|:" as Io
        expect(actual).toBe(expected)
    })

    it("returns the symbol class as its flacco's sagittal unicode if configured for importing into a spreadsheet program on a computer which might have Bravura installed", (): void => {
        ioSettings.tableFormat = TableFormat.SPREADSHEET
        const actual = formatSymbolClass(symbolClassId)

        const expected = "" as Io
        expect(actual).toBe(expected)
    })

    it("does not align the parenthetical natural symbol in the same way - just centers it", (): void => {
        const actual = formatSymbolClass(SymbolClassId.NULL)

        const expected = " (|//|) " as Io
        expect(actual).toBe(expected)
    })

    it("can turn off alignment", (): void => {
        const actual = formatSymbolClass(symbolClassId, {align: false})

        const expected = ",(/|" as Io
        expect(actual).toBe(expected)
    })

    it("can output the comma name too if requested", (): void => {
        const actual = formatSymbolClass(symbolClassId, {align: false, name: true})

        const expected = ",(/| 65/7M" as Io
        expect(actual).toBe(expected)
    })

    it("can output only the comma name too if requested", (): void => {
        const actual = formatSymbolClass(symbolClassId, {align: false, glyph: false, name: true})

        const expected = "65/7M" as Io
        expect(actual).toBe(expected)
    })
})
