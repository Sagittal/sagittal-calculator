import {Column, Row} from "../../../../../src/general"
import {computeHeaderRowsFromColumnTitleColumns} from "../../../../../src/general/io/table/headerRowsFromColumnTitleColumns"

describe("computeHeaderRowsFromColumnTitleColumns", (): void => {
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
    ] as Array<Column<{of: string, header: true}>>

    it("takes column titles which are long enough that they should be split across multiple header rows; they are already in the form of mini-columns, but this re-slices-and-dices them into header rows", (): void => {
        const actual = computeHeaderRowsFromColumnTitleColumns(columnTitleColumns)

        const expected = [
            ["", "initial"],
            ["", "comma"],
            ["bound", "mean"],
            ["index", "pos (¢)"],
        ] as Array<Row<{of: string, header: true}>>
        expect(actual).toEqual(expected)
    })

    it("can include a spacer row", (): void => {
        const actual = computeHeaderRowsFromColumnTitleColumns(columnTitleColumns, {includeSpacerRow: true})

        const expected = [
            ["", "initial"],
            ["", "comma"],
            ["bound", "mean"],
            ["index", "pos (¢)"],
            ["", ""],
        ] as Array<Row<{of: string, header: true}>>
        expect(actual).toEqual(expected)
    })
})
