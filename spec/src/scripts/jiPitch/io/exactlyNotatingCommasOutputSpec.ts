// tslint:disable max-line-length
import { Io, ioSettings, Monzo, NEWLINE } from "../../../../../src/general"
import { computeExactlyNotatingCommasOutput } from "../../../../../src/scripts/jiPitch/io"

describe("computeExactlyNotatingCommasOutput", (): void => {
    it("can format the symbols for the terminal", (): void => {
        const monzo = [-3, -1, 2] as Monzo

        const actual = computeExactlyNotatingCommasOutput({ monzo })

        const expected =
            "   --- exactly notating commas ---" + NEWLINE +
            "" + NEWLINE +
            "symbol  \tname \tratio    \tmonzo          \tcents  \tapotome slope".underline + NEWLINE +
            "   ./|  \t1/25C\t2048/2025\t[  11  -4  -2 ⟩\t 19.553\t -5.204      " + NEWLINE +
            "   //|  \t1/25S\t6561/6400\t[  -8   8  -2 ⟩\t 43.013\t  5.352      " + NEWLINE as Io
        expect(actual).toBe(expected)
    })

    it("can format the symbols for the forum", (): void => {
        const monzo = [-3, -1, 2] as Monzo

        ioSettings.forForum = true
        const actual = computeExactlyNotatingCommasOutput({ monzo })

        const expected =
            "   --- exactly notating commas ---" + NEWLINE +
            "" + NEWLINE +
            "[table]" + NEWLINE +
            "[tr][th][pre]symbol  [/pre][/th][th][pre]name[/pre][/th][th][pre]ratio[/pre][/th][th][pre]monzo[/pre][/th][th][pre]cents[/pre][/th][th][pre]apotome slope[/pre][/th][/tr]" + NEWLINE +
            "[tr][td][pre]:.::/|:[/pre][/td][td][pre]1/25C[/pre][/td][td][pre]2048/2025[/pre][/td][td][pre][  11  -4  -2 ⟩[/pre][/td][td][pre] 19.553[/pre][/td][td][pre] -5.204[/pre][/td][/tr]" + NEWLINE +
            "[tr][td][pre]:/ /|:[/pre][/td][td][pre]1/25S[/pre][/td][td][pre]6561/6400[/pre][/td][td][pre][  -8   8  -2 ⟩[/pre][/td][td][pre] 43.013[/pre][/td][td][pre]  5.352[/pre][/td][/tr]" + NEWLINE +
            "[/table]" + NEWLINE as Io
        expect(actual).toBe(expected)
    })
})
