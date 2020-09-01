// tslint:disable max-line-length
import { Io, ioSettings, Monzo, NEWLINE } from "../../../../../src/general"
import { computeNotatingCommasTable } from "../../../../../src/scripts/pitch/io/notatingCommasTable"

describe("computeNotatingCommasTable", () => {
    it("can format the symbols for the terminal", () => {
        const monzo = [-3, -1, 2] as Monzo

        const actual = computeNotatingCommasTable(monzo)

        const expected =
            "" + NEWLINE +
            "   --- notating commas ---" + NEWLINE +
            "" + NEWLINE +
            "symbol  \tname \tratio    \tmonzo          \tcents  \tapotome slope".underline + NEWLINE +
            "   ./|  \t1/25C\t2048/2025\t[  11  -4  -2 ⟩\t 19.553\t -5.204      " + NEWLINE +
            "   //|  \t1/25S\t6561/6400\t[  -8   8  -2 ⟩\t 43.013\t  5.352      " + NEWLINE as Io
        expect(actual).toBe(expected)
    })

    it("can format the symbols for the forum", () => {
        const monzo = [-3, -1, 2] as Monzo

        ioSettings.forForum = true
        const actual = computeNotatingCommasTable(monzo)
        ioSettings.forForum = false

        const expected =
            "" + NEWLINE +
            "   --- notating commas ---" + NEWLINE +
            "" + NEWLINE +
            "[table]" + NEWLINE +
            "[tr][th]symbol[/th][th]name[/th][th]ratio[/th][th]monzo[/th][th]cents[/th][th]apotome slope[/th][/tr]" + NEWLINE +
            "[tr][td]:.::/|:[/td][td]1/25C[/td][td]2048/2025[/td][td][  11  -4  -2 ⟩[/td][td] 19.553[/td][td] -5.204[/td][/tr]" + NEWLINE +
            "[tr][td]:/ /|:[/td][td]1/25S[/td][td]6561/6400[/td][td][  -8   8  -2 ⟩[/td][td] 43.013[/td][td]  5.352[/td][/tr]" + NEWLINE +
            "[/table]" + NEWLINE as Io
        expect(actual).toBe(expected)
    })
})
