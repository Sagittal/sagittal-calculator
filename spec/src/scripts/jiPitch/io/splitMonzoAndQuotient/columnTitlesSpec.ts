import { Count, Exponent, ioSettings, Prime, TableFormat } from "../../../../../../src/general"
import { Io } from "../../../../../../src/general/io"
import { Max } from "../../../../../../src/general/math"
import { splitMonzoAndQuotientColumnTitles } from "../../../../../../src/scripts/jiPitch/io/splitMonzoAndQuotient"

describe("splitMonzoAndQuotientColumnTitles", (): void => {
    const columnTitles = [
        "quotient",
        "monzo",
        "cents",
        "apotome slope",
    ] as Io[]
    const maxMonzoLength = 3 as Max<Count<Exponent<Prime>>>

    it("expands the quotient and monzo headers to match the data when formatting for a spreadsheet", (): void => {
        const actual = splitMonzoAndQuotientColumnTitles(columnTitles, maxMonzoLength)

        const expected = [
            "quotient n",
            "/",
            "d",
            "monzo [",
            "2",
            "3",
            "5",
            "⟩",
            "cents",
            "apotome slope",
        ] as Io[]
        expect(actual).toEqual(expected)
    })

    it("does not split up quotients on the forum (because there they get LaTeX formatted)", (): void => {
        ioSettings.tableFormat = TableFormat.FORUM
        const actual = splitMonzoAndQuotientColumnTitles(columnTitles, maxMonzoLength)

        const expected = [
            "quotient",
            "monzo [",
            "2",
            "3",
            "5",
            "⟩",
            "cents",
            "apotome slope",
        ] as Io[]
        expect(actual).toEqual(expected)
    })
})
