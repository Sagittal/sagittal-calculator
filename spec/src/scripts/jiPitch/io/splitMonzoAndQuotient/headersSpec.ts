import {Row} from "../../../../../../src/general/io/table"
import {formatPrimeHeaders} from "../../../../../../src/scripts/jiPitch/io/splitMonzoAndQuotient"

describe("formatPrimeHeaders", (): void => {
    it("aligns the headers for the prime headers of monzos", (): void => {
        const headerRows = [
            ["comma", "quotient", "", "", "monzo", "", "", "", "apotome"],
            ["name", "n", "/", "d", "[", "2", "3", "⟩", "slope"],
        ] as Array<Row<{header: true}>>

        const actual = formatPrimeHeaders(headerRows)

        const expected = [
            ["comma", "quotient", "", "", "monzo", "", "", "", "apotome"],
            ["name", "n", "/", "d", "[", "  2    ", "  3    ", "⟩", "slope"],
        ] as Array<Row<{header: true}>>
        expect(actual).toEqual(expected)
    })
})
