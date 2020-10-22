import {ioSettings, TableFormat} from "../../../../../src/general/io"
import {formatCents, Formatted} from "../../../../../src/general/io/format"
import {Cents} from "../../../../../src/general/music"

describe("formatCents", (): void => {
    const cents = 884.358713 as Cents

    it("formats cents", (): void => {
        const actual = formatCents(cents)

        const expected = "884.359¢" as Formatted<Cents>
        expect(actual).toBe(expected)
    })

    it("can return the cents aligned (such as for tables)", (): void => {
        const actual = formatCents(cents, {align: true})

        const expected = "       884.359¢" as Formatted<Cents>
        expect(actual).toBe(expected)
    })

    it("does not align the cents, even when asked to, when formatting for a spreadsheet", (): void => {
        ioSettings.tableFormat = TableFormat.SPREADSHEET
        const actual = formatCents(cents, {align: true})

        const expected = "884.359¢" as Formatted<Cents>
        expect(actual).toBe(expected)
    })
})
