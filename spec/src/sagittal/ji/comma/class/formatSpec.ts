import {Id, Io, ioSettings, TableFormat} from "../../../../../../src/general"
import {CommaClass, formatCommaClass} from "../../../../../../src/sagittal/ji/comma/class"

describe("formatCommaClass", (): void => {
    const commaClassId: Id<CommaClass> = 116 as Id<CommaClass>

    it("returns the comma class as its representative symbol's long ASCII form by default (or configured for display on a terminal)", (): void => {
        const actual = formatCommaClass(commaClassId)

        const expected = "  ,(/|  " as Io
        expect(actual).toBe(expected)
    })

    it("returns the comma class as its representative symbols' smiley form if configured for pasting to the forum, including a disabling of the monospacing pre tag", (): void => {
        ioSettings.tableFormat = TableFormat.FORUM
        const actual = formatCommaClass(commaClassId)

        const expected = "[/pre]:,::(/|:[pre]" as Io
        expect(actual).toBe(expected)
    })

    it("returns the comma class as its representative symbols' unicode if configured for importing into a spreadsheet program on a computer which might have Bravura installed", (): void => {
        ioSettings.tableFormat = TableFormat.SPREADSHEET
        const actual = formatCommaClass(commaClassId)

        const expected = "" as Io
        expect(actual).toBe(expected)
    })

    it("does not align the parenthetical natural symbol in the same way - just centers it", (): void => {
        const actual = formatCommaClass(0 as Id<CommaClass>)

        const expected = " (|//|) " as Io
        expect(actual).toBe(expected)
    })
})
