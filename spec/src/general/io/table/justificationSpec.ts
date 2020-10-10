import { Count, Range, Table } from "../../../../../src/general"
import { Io } from "../../../../../src/general/io"
import { computeColumnWidths, computeJustifiedCell } from "../../../../../src/general/io/table/justification"
import { Justification } from "../../../../../src/general/io/table/types"
import { Char } from "../../../../../src/general/io/types"

describe("computeJustifiedCell", (): void => {
    it("adds space to justify cells", (): void => {
        const cell = "  7    " as Io

        const actual = computeJustifiedCell(
            cell,
            { columnWidth: 14 as Count<Char>, columnJustification: Justification.LEFT },
        )

        const expected = "  7           "
        expect(actual).toBe(expected)
    })

    it("can justify to the right", (): void => {
        const cell = "  7    " as Io

        const actual = computeJustifiedCell(
            cell,
            { columnWidth: 14 as Count<Char>, columnJustification: Justification.RIGHT },
        )

        const expected = "         7    "
        expect(actual).toBe(expected)
    })

    it("does not justify cells which are for the forum and which have turned off monospacing", (): void => {
        const cell = "[/pre][latex]\\frac{50}{49}[/latex][pre]" as Io

        const actual = computeJustifiedCell(
            cell,
            { columnWidth: 14 as Count<Char>, columnJustification: Justification.LEFT },
        )

        expect(actual).toBe(cell)
    })
})

describe("computeColumnWidths", (): void => {
    it("does not count cells which are for the forum and which have turned off monospacing in its computation              ", (): void => {
        const table = [
            ["a", "ccc", "eeeee"],
            ["dddd", "bb", "ccc"],
        ] as Table

        const actual = computeColumnWidths(table, [0, 1, 2] as Range)

        const expected = [4, 3, 5] as Array<Count<Char>>
        expect(actual).toEqual(expected)
    })

    it("does not count cells which are for the forum and which have turned off monospacing in its computation              ", (): void => {
        const table = [
            ["a", "", "lorde"],
            ["dddd", "bb", "[/pre][latex]\\frac{1}{1}[/latex][pre]"]
        ] as Table

        const actual = computeColumnWidths(table, [0, 1, 2] as Range)

        const expected = [4, 2, 5] as Array<Count<Char>>
        expect(actual).toEqual(expected)
    })
})
