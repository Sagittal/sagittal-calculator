import { formatCents, Formatted } from "../../../../../src/general/io/format"
import { Cents } from "../../../../../src/general/music"

describe("formatCents", (): void => {
    it("formats cents", (): void => {
        const cents = 884.358713 as Cents

        const actual = formatCents(cents)

        const expected = "       884.359¢" as Formatted<Cents>
        expect(actual).toBe(expected)
    })

    it("can return the cents unaligned (such as for in error messages, rather than in tables)", (): void => {
        const cents = 884.358713 as Cents

        const actual = formatCents(cents, { align: false })

        const expected = "884.359¢" as Formatted<Cents>
        expect(actual).toBe(expected)
    })
})
