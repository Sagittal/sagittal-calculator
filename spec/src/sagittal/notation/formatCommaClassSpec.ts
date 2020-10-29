import {Io, ioSettings, TableFormat} from "../../../../src/general"
import {CommaClassId, formatCommaClass} from "../../../../src/sagittal/notation"

describe("formatCommaClass", (): void => {
    const commaClassId = CommaClassId._65_7_M

    it("returns the comma class as its representative sagittal's long ASCII form by default (or configured for display on a terminal)", (): void => {
        const actual = formatCommaClass(commaClassId)

        const expected = "  ,(/|  " as Io
        expect(actual).toBe(expected)
    })

    it("returns the comma class as its representative sagittals' smiley form if configured for pasting to the forum, including a disabling of the monospacing pre tag", (): void => {
        ioSettings.tableFormat = TableFormat.FORUM
        const actual = formatCommaClass(commaClassId)

        const expected = "[/pre]:,::(/|:[pre]" as Io
        expect(actual).toBe(expected)
    })

    it("returns the comma class as its representative sagittals' unicode if configured for importing into a spreadsheet program on a computer which might have Bravura installed", (): void => {
        ioSettings.tableFormat = TableFormat.SPREADSHEET
        const actual = formatCommaClass(commaClassId)

        const expected = "" as Io
        expect(actual).toBe(expected)
    })

    it("does not align the parenthetical natural symbol in the same way - just centers it", (): void => {
        const actual = formatCommaClass(CommaClassId._1_u)

        const expected = " (|//|) " as Io
        expect(actual).toBe(expected)
    })

    it("can turn off alignment", (): void => {
        const actual = formatCommaClass(commaClassId, { align: false })

        const expected = ",(/|" as Io
        expect(actual).toBe(expected)
    })

    it("can output the comma name too if requested", (): void => {
        const actual = formatCommaClass(commaClassId, { align: false, name: true })

        const expected = ",(/| 65/7M" as Io
        expect(actual).toBe(expected)
    })

    it("can output only the comma name too if requested", (): void => {
        const actual = formatCommaClass(commaClassId, { align: false, glyph: false, name: true })

        const expected = "65/7M" as Io
        expect(actual).toBe(expected)
    })
})
