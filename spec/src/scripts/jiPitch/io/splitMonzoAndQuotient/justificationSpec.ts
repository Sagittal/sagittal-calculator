import {Justification, Row} from "../../../../../../src/general/io/table"
import {JiPitchAnalysis} from "../../../../../../src/sagittal/ji/analyze"
import {computeMonzoAndQuotientJustification} from "../../../../../../src/scripts/jiPitch/io/splitMonzoAndQuotient"

describe("computeMonzoAndQuotientJustification", (): void => {
    it("justifies quotients to center on the vinculum, and monzos so that the square bracket is closer to the rest of the materials", (): void => {
        const headerRows = [
            ["comma", "quotient", "", "", "monzo", "", "", "", "apotome"],
            ["name", "n", "/", "d", "[", "2", "3", "⟩", "slope"],
        ] as Array<Row<{of: JiPitchAnalysis, header: true}>>

        const actual = computeMonzoAndQuotientJustification(headerRows)

        const expected = [
            Justification.LEFT,     // Comma name
            Justification.RIGHT,    // Quotient numerator
            Justification.CENTER,   // Quotient vinculum
            Justification.LEFT,     // Quotient denominator
            Justification.RIGHT,    // Monzo [
            Justification.CENTER,   // Monzo 2
            Justification.CENTER,   // Monzo 3
            Justification.LEFT,     // Monzo ⟩
            Justification.LEFT,     // Apotome slope
        ]
        expect(actual).toEqual(expected)
    })

    it("also works for 2,3-free class tables", (): void => {
        const headerRows = [
            ["2,3-free", "2,3-free", "", "", "", "2,3-free"],
            ["prime", "class", "", "", "", "class"],
            ["limit", "n", "/", "d", "₂,₃", "CoPFR"],
        ] as Array<Row<{of: JiPitchAnalysis, header: true}>>

        const actual = computeMonzoAndQuotientJustification(headerRows)

        const expected = [
            Justification.LEFT,     // 2,3-free prime limit
            Justification.RIGHT,    // 2,3-free class numinator
            Justification.CENTER,   // 2,3-free class vinculum
            Justification.LEFT,     // 2,3-free class diminuator
            Justification.LEFT,     // 2,3-free class sign
            Justification.LEFT,     // 2,3-free class CoPFR
        ]
        expect(actual).toEqual(expected)
    })
})
