import {Formatted, ioSettings, TableFormat} from "../../../../../../src/general/io"
import {Two3FreeClass} from "../../../../../../src/general/music/ji/two3FreeClass"
import {Two3FreeClassAnalysis} from "../../../../../../src/sagittal/ji/analyze"
import {formatSplit23FreeClass} from "../../../../../../src/scripts/jiPitch/io/splitMonzoAndQuotient"

describe("formatSplit23FreeClass", (): void => {
    const two3FreeClass = {monzo: [0, 0, -1, 1]} as Two3FreeClass

    it("splits the 2,3-free class into the numinator, vinculum, diminuator, and sign", (): void => {
        const actual = formatSplit23FreeClass(two3FreeClass)

        const expected = ["7", "/", "5", "₂,₃"] as Array<Formatted<Two3FreeClassAnalysis>>
        expect(actual).toEqual(expected)
    })

    it("when formatting for the forum, leaves the LaTeX-formatted quotient as a single element in an array to be spread     ", (): void => {
        ioSettings.tableFormat = TableFormat.FORUM
        const actual = formatSplit23FreeClass(two3FreeClass)

        const expected = [
            "[/pre][latex]\\{\\frac{7}{5}\\}_{\\scriptsize{2,3}}[/latex][pre]",
        ] as Array<Formatted<Two3FreeClassAnalysis>>
        expect(actual).toEqual(expected)

    })

    it("when formatting for the forum with split quotient, still uses the LaTeX version of the sign", (): void => {
        ioSettings.tableFormat = TableFormat.FORUM_WITH_SPLIT_QUOTIENTS
        const actual = formatSplit23FreeClass(two3FreeClass)

        const expected = [
            "7",
            "/",
            "5",
            "[/pre][latex]_{\\scriptsize{2,3}}[/latex][pre]",
        ] as Array<Formatted<Two3FreeClassAnalysis>>
        expect(actual).toEqual(expected)
    })
})
