import "colors"
import { ColorMethod, Count, Io, NEWLINE, Row, Table } from "../../../../../src/general"
import { formatTableForTerminal } from "../../../../../src/general/io/table/tableForTerminal"
import { Justification } from "../../../../../src/general/io/table/types"

describe("formatTableForTerminal", (): void => {
    const table = [
        ["comma name", "prime limit", "2,3-free SoPFR", "cents", "monzo", "ratio", "apotome slope"],
        ["11M", "11", "11", "45.45", "[0 0 1⟩", "33/32", "-4"],
        ["25/49M", "7", "24", "33.4", "[0 0⟩", "50/49", "-59.333"],
    ] as Table<Io>

    it("makes each column such that each of its cells has the same width", (): void => {
        const actual = formatTableForTerminal(table)

        const expected =
            "comma name\tprime limit\t2,3-free SoPFR\tcents\tmonzo  \tratio\tapotome slope".underline + NEWLINE +
            "11M       \t11         \t11            \t45.45\t[0 0 1⟩\t33/32\t-4           " + NEWLINE +
            "25/49M    \t7          \t24            \t33.4 \t[0 0⟩  \t50/49\t-59.333      " + NEWLINE as Io
        expect(actual).toEqual(expected)
    })

    it("can justify all columns to the right", (): void => {
        const actual = formatTableForTerminal(table, { justification: Justification.RIGHT })

        const expected =
            "comma name\tprime limit\t2,3-free SoPFR\tcents\t  monzo\tratio\tapotome slope".underline + NEWLINE +
            "       11M\t         11\t            11\t45.45\t[0 0 1⟩\t33/32\t           -4" + NEWLINE +
            "    25/49M\t          7\t            24\t 33.4\t  [0 0⟩\t50/49\t      -59.333" + NEWLINE as Io
        expect(actual).toEqual(expected)
    })

    it("can center columns", (): void => {
        const actual = formatTableForTerminal(table, { justification: Justification.CENTER })

        const expected =
            "comma name\tprime limit\t2,3-free SoPFR\tcents\t monzo \tratio\tapotome slope".underline + NEWLINE +
            "   11M    \t     11    \t      11      \t45.45\t[0 0 1⟩\t33/32\t      -4     " + NEWLINE +
            "  25/49M  \t     7     \t      24      \t 33.4\t [0 0⟩ \t50/49\t   -59.333   " + NEWLINE as Io
        expect(actual).toEqual(expected)
    })

    it("can justify each column individually", (): void => {
        const justification = [
            Justification.RIGHT,
            Justification.LEFT,
            Justification.CENTER,
            undefined,
            Justification.RIGHT,
        ]

        const actual = formatTableForTerminal(table, { justification })

        const expected =
            "comma name\tprime limit\t2,3-free SoPFR\tcents\t  monzo\tratio\tapotome slope".underline + NEWLINE +
            "       11M\t11         \t      11      \t45.45\t[0 0 1⟩\t33/32\t-4           " + NEWLINE +
            "    25/49M\t7          \t      24      \t33.4 \t  [0 0⟩\t50/49\t-59.333      " + NEWLINE as Io
        expect(actual).toEqual(expected)
    })

    it("can apply colors to the rows individually", (): void => {
        const colors: ColorMethod[] = [
            "cyan",
            "blue",
            "yellow",
        ]

        const actual = formatTableForTerminal(table, { colors })

        const expected =
            "comma name\tprime limit\t2,3-free SoPFR\tcents\tmonzo  \tratio\tapotome slope".cyan.underline + NEWLINE +
            "11M       \t11         \t11            \t45.45\t[0 0 1⟩\t33/32\t-4           ".blue + NEWLINE +
            "25/49M    \t7          \t24            \t33.4 \t[0 0⟩  \t50/49\t-59.333      ".yellow + NEWLINE as Io
        expect(actual).toEqual(expected)
    })

    it("can move the boundary between the header rows and the data rows", (): void => {
        const table = [
            ["comma", "prime", "2,3-free", "", "", "", "apotome"],
            ["name", "limit", "SoPFR", "cents", "monzo", "ratio", "slope"],
            ["11M", "11", "11", "45.45", "[0 0 1⟩", "33/32", "-4"],
            ["25/49M", "7", "24", "33.4", "[0 0⟩", "50/49", "-59.333"],
        ] as Table<Io>

        const actual = formatTableForTerminal(table, { headerRowCount: 2 as Count<Row<{ of: Io, header: true }>> })

        const expected =
            "comma \tprime\t2,3-free\t     \t       \t     \tapotome" + NEWLINE +
            "name  \tlimit\tSoPFR   \tcents\tmonzo  \tratio\tslope  ".underline + NEWLINE +
            "11M   \t11   \t11      \t45.45\t[0 0 1⟩\t33/32\t-4     " + NEWLINE +
            "25/49M\t7    \t24      \t33.4 \t[0 0⟩  \t50/49\t-59.333" + NEWLINE as Io
        expect(actual).toEqual(expected)
    })
})
