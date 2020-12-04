import {Alignment, Row, TableAlignment} from "../../../../../../src/general"
import {computeSplitMonzoAndQuotientTableAlignment} from "../../../../../../src/scripts/jiPitch/io/splitMonzoAndQuotient"
import {
    INVISIBLE_MONZO_CLOSING_ANGLE_BRACKET_COLUMN_TITLE,
    INVISIBLE_MONZO_OPENING_SQUARE_BRACKET_COLUMN_TITLE,
} from "../../../../../../src/scripts/jiPitch/io/splitMonzoAndQuotient/constants"

describe("computeSplitMonzoAndQuotientTableAlignment", (): void => {
    it("aligns quotients to center on the vinculum, and monzos so that the square bracket is closer to the rest of the materials", (): void => {
        const headerRows = [
            ["comma", "quotient", "", "", "monzo", "", "", "", "apotome"],
            // tslint:disable-next-line max-line-length
            ["name", "n", "/", "d", INVISIBLE_MONZO_OPENING_SQUARE_BRACKET_COLUMN_TITLE, "2", "3", INVISIBLE_MONZO_CLOSING_ANGLE_BRACKET_COLUMN_TITLE, "slope"],
        ] as Array<Row<{header: true}>>

        const actual = computeSplitMonzoAndQuotientTableAlignment(headerRows)

        const expected = [
            undefined,          // Comma name
            Alignment.RIGHT,    // Quotient numerator
            Alignment.CENTER,   // Quotient vinculum
            Alignment.LEFT,     // Quotient denominator
            Alignment.RIGHT,    // Monzo [
            Alignment.CENTER,   // Monzo 2
            Alignment.CENTER,   // Monzo 3
            Alignment.LEFT,     // Monzo ⟩
            undefined,          // Apotome slope
        ]
        expect(actual).toEqual(expected)
    })

    it("also works for 2,3-free class tables", (): void => {
        const headerRows = [
            ["2,3-free", "2,3-free", "", "", "", "2,3-free"],
            ["prime", "class", "", "", "", "class"],
            ["limit", "n", "/", "d", "₂,₃", "CoPFR"],
        ] as Array<Row<{header: true}>>

        const actual = computeSplitMonzoAndQuotientTableAlignment(headerRows)

        const expected = [
            undefined,          // 2,3-free prime limit
            Alignment.RIGHT,    // 2,3-free class numinator
            Alignment.CENTER,   // 2,3-free class vinculum
            Alignment.LEFT,     // 2,3-free class diminuator
            undefined,          // 2,3-free class sign
            undefined,          // 2,3-free class CoPFR
        ]
        expect(actual).toEqual(expected)
    })

    it("doesn't crash when there are no header rows", (): void => {
        const headerRows = [] as Array<Row<{header: true}>>

        const actual = computeSplitMonzoAndQuotientTableAlignment(headerRows)

        expect(actual).toBeUndefined()
    })
})
