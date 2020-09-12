import { Column, Row } from "../../../../../src/general"
import { computeHeaderRowsFromColumnTitleColumns } from "../../../../../src/general/io/table/headerRowsFromColumnTitleColumns"

describe("computeHeaderRowsFromColumnTitleColumns", () => {
    const columnTitleColumns = [
        [
            "bound",
            "index",
        ],
        [
            "initial",
            "comma",
            "mean",
            "pos (¢)",
        ],
    ] as Array<Column<{ of: string }>>

    it("takes column titles which are long enough that they should be split across multiple header rows; they are already in the form of mini-columns, but this re-slices-and-dices them into header rows", () => {
        const actual = computeHeaderRowsFromColumnTitleColumns(columnTitleColumns)

        const expected = [
            ["", "initial"],
            ["", "comma"],
            ["bound", "mean"],
            ["index", "pos (¢)"],
        ] as Array<Row<{ header: true}>>
        expect(actual).toEqual(expected)
    })

    it("can include a spacer row", () => {
        const actual = computeHeaderRowsFromColumnTitleColumns(columnTitleColumns, { includeSpacerRow: true })

        const expected = [
            ["", "initial"],
            ["", "comma"],
            ["bound", "mean"],
            ["index", "pos (¢)"],
            ["", ""],
        ] as Array<Row<{ header: true }>>
        expect(actual).toEqual(expected)
    })
})
