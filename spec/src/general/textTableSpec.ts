import { alignTable } from "../../../src/general"
import { Justification } from "../../../src/general/types"

describe("alignTable", () => {
    it("gets each column to have the same width", () => {
        const data = [
            "comma name\tlimit\t5-rough sopfr\tcents\tmonzo\tratio\tapotome slope",
            "11M\t11\t11\t45.45\t[0 0 1⟩\t33/32\t-4",
            "25/49M\t7\t24\t33.4\t[0 0⟩\t50/49\t-59.333",
        ]

        const actual = alignTable(data)

        const expected = [
            "comma name\tlimit\t5-rough sopfr\tcents\tmonzo  \tratio\tapotome slope",
            "11M       \t11   \t11           \t45.45\t[0 0 1⟩\t33/32\t-4           ",
            "25/49M    \t7    \t24           \t33.4 \t[0 0⟩  \t50/49\t-59.333      ",
        ]
        expect(actual).toEqual(expected)
    })

    it("can align all columns to the right", () => {
        const data = [
            "comma name\tlimit\t5-rough sopfr\tcents\tmonzo\tratio\tapotome slope",
            "11M\t11\t11\t45.45\t[0 0 1⟩\t33/32\t-4",
            "25/49M\t7\t24\t33.4\t[0 0⟩\t50/49\t-59.333",
        ]

        const actual = alignTable(data, { justification: Justification.RIGHT })

        const expected = [
            "comma name\tlimit\t5-rough sopfr\tcents\t  monzo\tratio\tapotome slope",
            "       11M\t   11\t           11\t45.45\t[0 0 1⟩\t33/32\t           -4",
            "    25/49M\t    7\t           24\t 33.4\t  [0 0⟩\t50/49\t      -59.333",
        ]
        expect(actual).toEqual(expected)
    })

    it("can center columns", () => {
        const data = [
            "comma name\tlimit\t5-rough sopfr\tcents\tmonzo\tratio\tapotome slope",
            "11M\t11\t11\t45.45\t[0 0 1⟩\t33/32\t-4",
            "25/49M\t7\t24\t33.4\t[0 0⟩\t50/49\t-59.333",
        ]

        const actual = alignTable(data, { justification: Justification.CENTER })

        const expected = [
            "comma name\tlimit\t5-rough sopfr\tcents\t monzo \tratio\tapotome slope",
            "   11M    \t  11 \t      11     \t45.45\t[0 0 1⟩\t33/32\t      -4     ",
            "  25/49M  \t  7  \t      24     \t 33.4\t [0 0⟩ \t50/49\t   -59.333   ",
        ]
        expect(actual).toEqual(expected)
    })

    it("can align each column individually", () => {
        const data = [
            "comma name\tlimit\t5-rough sopfr\tcents\tmonzo\tratio\tapotome slope",
            "11M\t11\t11\t45.45\t[0 0 1⟩\t33/32\t-4",
            "25/49M\t7\t24\t33.4\t[0 0⟩\t50/49\t-59.333",
        ]

        const actual = alignTable(data, { justification: [Justification.RIGHT, Justification.LEFT, Justification.CENTER, undefined, Justification.RIGHT] })

        const expected = [
            "comma name\tlimit\t5-rough sopfr\tcents\t  monzo\tratio\tapotome slope",
            "       11M\t11   \t      11     \t45.45\t[0 0 1⟩\t33/32\t-4           ",
            "    25/49M\t7    \t      24     \t33.4 \t  [0 0⟩\t50/49\t-59.333      ",
        ]
        expect(actual).toEqual(expected)
    })
})
