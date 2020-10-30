import {Formatted, ioSettings, TableFormat} from "../../../../../src/general/io"
import {HeadId} from "../../../../../src/sagittal/accidental/flacco"
import {Compatible} from "../../../../../src/sagittal/accidental/flavor"
import {formatAccidental, Glyph} from "../../../../../src/sagittal/accidental/glyph"
import {computeAccidental} from "../../../../helpers/src/sagittal/accidental/accidental"

describe("formatAccidental", (): void => {
    const accidental = computeAccidental({headId: HeadId.LEFT_SCROLL_DOUBLE_RIGHT_BARB, compatible: Compatible.SHARP})

    it("returns ASCII when formatting for the terminal, and aligns it unless requested otherwise", (): void => {
        ioSettings.tableFormat = TableFormat.TERMINAL

        const actual = formatAccidental(accidental)

        const expected = "    )|\\\\#" as Formatted<Glyph>
        expect(actual).toBe(expected)
    })

    it("returns Unicode when formatting for spreadsheets", (): void => {
        ioSettings.tableFormat = TableFormat.SPREADSHEET

        const actual = formatAccidental(accidental)

        const expected = "" as Formatted<Glyph>
        expect(actual).toBe(expected)
    })

    it("returns smiley when formatting for the forum", (): void => {
        ioSettings.tableFormat = TableFormat.FORUM

        const actual = formatAccidental(accidental)

        const expected = "[/pre]:)|\\ \\::#:[pre]" as Formatted<Glyph>
        expect(actual).toBe(expected)
    })
})