import { ColorMethod, Io, NEWLINE, Table } from "../../../../src/general"
import { formatTableForTerminal } from "../../../../src/general/io/tableForTerminal"
import { Justification } from "../../../../src/general/io/types"

describe("formatTableForTerminal", () => {
    const table = [
        ["comma name", "limit", "5-rough sopfr", "cents", "monzo", "ratio", "apotome slope"],
        ["11M", "11", "11", "45.45", "[0 0 1⟩", "33/32", "-4"],
        ["25/49M", "7", "24", "33.4", "[0 0⟩", "50/49", "-59.333"],
    ] as Table<Io>

    it("makes each column such that each of its cells has the same width", () => {
        const actual = formatTableForTerminal(table)

        const expected =
            "comma name\tlimit\t5-rough sopfr\tcents\tmonzo  \tratio\tapotome slope\n" +
            "11M       \t11   \t11           \t45.45\t[0 0 1⟩\t33/32\t-4           \n" +
            "25/49M    \t7    \t24           \t33.4 \t[0 0⟩  \t50/49\t-59.333      \n" as Io
        expect(actual).toEqual(expected)
    })

    it("can align all columns to the right", () => {
        const actual = formatTableForTerminal(table, { justification: Justification.RIGHT })

        const expected =
            "comma name\tlimit\t5-rough sopfr\tcents\t  monzo\tratio\tapotome slope\n" +
            "       11M\t   11\t           11\t45.45\t[0 0 1⟩\t33/32\t           -4\n" +
            "    25/49M\t    7\t           24\t 33.4\t  [0 0⟩\t50/49\t      -59.333\n" as Io
        expect(actual).toEqual(expected)
    })

    it("can center columns", () => {
        const actual = formatTableForTerminal(table, { justification: Justification.CENTER })

        const expected =
            "comma name\tlimit\t5-rough sopfr\tcents\t monzo \tratio\tapotome slope\n" +
            "   11M    \t  11 \t      11     \t45.45\t[0 0 1⟩\t33/32\t      -4     \n" +
            "  25/49M  \t  7  \t      24     \t 33.4\t [0 0⟩ \t50/49\t   -59.333   \n" as Io
        expect(actual).toEqual(expected)
    })

    it("can align each column individually", () => {
        const justification = [
            Justification.RIGHT,
            Justification.LEFT,
            Justification.CENTER,
            undefined,
            Justification.RIGHT,
        ]

        const actual = formatTableForTerminal(table, { justification })

        const expected =
            "comma name\tlimit\t5-rough sopfr\tcents\t  monzo\tratio\tapotome slope\n" +
            "       11M\t11   \t      11     \t45.45\t[0 0 1⟩\t33/32\t-4           \n" +
            "    25/49M\t7    \t      24     \t33.4 \t  [0 0⟩\t50/49\t-59.333      \n" as Io
        expect(actual).toEqual(expected)
    })

    it("can apply colors to the rows individually", () => {
        const colors: ColorMethod[] = [
            "cyan",
            "blue",
            "yellow",
        ]

        const actual = formatTableForTerminal(table, { colors })

        const expected =
            "comma name\tlimit\t5-rough sopfr\tcents\tmonzo  \tratio\tapotome slope".cyan + NEWLINE +
            "11M       \t11   \t11           \t45.45\t[0 0 1⟩\t33/32\t-4           ".blue + NEWLINE +
            "25/49M    \t7    \t24           \t33.4 \t[0 0⟩  \t50/49\t-59.333      ".yellow + NEWLINE as Io
        expect(actual).toEqual(expected)
    })
})
