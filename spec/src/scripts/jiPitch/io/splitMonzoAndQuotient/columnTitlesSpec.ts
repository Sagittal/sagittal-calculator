import {Count, Exponent, ioSettings, Prime, TableFormat} from "../../../../../../src/general"
import {Io} from "../../../../../../src/general/io"
import {Max} from "../../../../../../src/general/math"
import {splitMonzoAndQuotientColumnTitles} from "../../../../../../src/scripts/jiPitch/io/splitMonzoAndQuotient"

describe("splitMonzoAndQuotientColumnTitles", (): void => {
    const columnTitles = [
        "quotient",
        "monzo",
        "cents",
        "apotome slope",
    ] as Io[]
    const maxMonzoLength = 3 as Max<Count<Exponent<Prime>>>

    it("expands the quotient and monzo headers to match the data", (): void => {
        const actual = splitMonzoAndQuotientColumnTitles(columnTitles, {maxMonzoLength})

        const expected = [
            "quotient n",
            "/",
            "d",
            "monzo  ",
            "2",
            "3",
            "5",
            " ",
            "cents",
            "apotome slope",
        ] as Io[]
        expect(actual).toEqual(expected)
    })

    it("does not split up quotients on the forum (because there they get LaTeX formatted), and includes instructions to merge cells for the monzo title", (): void => {
        ioSettings.tableFormat = TableFormat.FORUM
        const actual = splitMonzoAndQuotientColumnTitles(columnTitles, {maxMonzoLength})

        const expected = [
            "quotient",
            "monzo  ",
            "⤝ 2",
            "⤝ 3",
            "⤝ 5",
            "⤝  ",
            "cents",
            "apotome slope",
        ] as Io[]
        expect(actual).toEqual(expected)
    })

    describe("also works for 2,3-free class info", (): void => {
        const columnTitles = [
            "2,3-free prime limit",
            "2,3-free class name",
            "2,3-free class CoPFR",
        ] as Io[]

        it("expands the 2,3-free class name headers to match the split up data", (): void => {
            const actual = splitMonzoAndQuotientColumnTitles(columnTitles, {maxMonzoLength})

            const expected = [
                "2,3-free prime limit",
                "2,3-free class n",
                "/",
                "d",
                "₂,₃",
                "2,3-free class CoPFR",
            ] as Io[]
            expect(actual).toEqual(expected)
        })

        it("does not split up 2,3-free classes on the forum (because there they get LaTeX formatted)", (): void => {
            ioSettings.tableFormat = TableFormat.FORUM
            const actual = splitMonzoAndQuotientColumnTitles(columnTitles, {maxMonzoLength})

            expect(actual).toEqual(columnTitles)
        })

        it("uses the LaTeX-formatted sign when for the forum yet splitting is still requested", (): void => {
            ioSettings.tableFormat = TableFormat.FORUM_WITH_SPLIT_QUOTIENTS
            const actual = splitMonzoAndQuotientColumnTitles(columnTitles, {maxMonzoLength})

            const expected = [
                "2,3-free prime limit",
                "2,3-free class n",
                "⤝ ⤝ /",
                "⤝ ⤝ d",
                "⤝ ⤝ [latex]_{\\scriptsize{2,3}}[/latex]",
                "2,3-free class CoPFR",
            ] as Io[]
            expect(actual).toEqual(expected)
        })
    })

    describe("also works for the 2,3-free class table as part of the analyze-ji-pitch script", (): void => {
        const columnTitles = [
            "prime limit",
            "name",
            "CoPFR",
        ] as Io[]
        const recognizeNameTitleAsBeingFor23FreeClass = true

        it("can recognize the 'name' title as being for a 2,3-free class and split it (can't simply always split 'name' because it is also used in the notating commas table for the comma name)", (): void => {
            const actual = splitMonzoAndQuotientColumnTitles(
                columnTitles,
                {maxMonzoLength, recognizeNameTitleAsBeingFor23FreeClass},
            )

            const expected = [
                "prime limit",
                "name n",
                "/",
                "d",
                "₂,₃",
                "CoPFR",
            ] as Io[]
            expect(actual).toEqual(expected)
        })
    })
})
