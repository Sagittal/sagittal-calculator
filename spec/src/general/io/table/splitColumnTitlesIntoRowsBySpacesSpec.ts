import { Io, Row } from "../../../../../src/general/io"
import { splitColumnTitlesIntoRowsBySpaces } from "../../../../../src/general/io/table"

describe("splitColumnTitlesIntoRowsBySpaces", () => {
    const titles: Io[] = [
        "2,3- free class",
        "N2D3P9 rank",
        "best notating comma cents",
        "best notating comma monzo",
        "best notating comma symbol",
    ] as Io[]

    it("splits the column titles into rows by spaces", () => {
        const actual = splitColumnTitlesIntoRowsBySpaces(titles)

        const expected = [
            ["", "", "best", "best", "best"],
            ["2,3-", "", "notating", "notating", "notating"],
            ["free", "N2D3P9", "comma", "comma", "comma"],
            ["class", "rank", "cents", "monzo", "symbol"],
        ] as Array<Row<{ header: true }>>
        expect(actual).toEqual(expected)
    })

    it("can include a spacer row", () => {
        const actual = splitColumnTitlesIntoRowsBySpaces(titles, { includeSpacerRow: true })

        const expected = [
            ["", "", "best", "best", "best"],
            ["2,3-", "", "notating", "notating", "notating"],
            ["free", "N2D3P9", "comma", "comma", "comma"],
            ["class", "rank", "cents", "monzo", "symbol"],
            ["", "", "", "", ""],
        ] as Array<Row<{ header: true }>>
        expect(actual).toEqual(expected)
    })
})
