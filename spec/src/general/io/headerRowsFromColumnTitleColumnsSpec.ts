import { Column, Row } from "../../../../src/general"
import { computeHeaderRowsFromColumnTitleColumns } from "../../../../src/general/io"

describe("computeHeaderRowsFromColumnTitleColumns", () => {
    it("takes column titles which are long enough that they should be split across multiple header rows; they are already in the form of mini-columns, but this re-slices-and-dices them into header rows", () => {
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
        ] as Column[]

        const actual = computeHeaderRowsFromColumnTitleColumns(columnTitleColumns)

        const expected = [
            ["", "initial"],
            ["", "comma"],
            ["bound", "mean"],
            ["index", "pos (¢)"],
        ] as Row[]
        expect(actual).toEqual(expected)
    })
})
