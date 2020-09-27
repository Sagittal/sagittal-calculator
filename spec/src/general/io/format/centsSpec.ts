import { formatCents, Formatted } from "../../../../../src/general/io/format"
import { Cents } from "../../../../../src/general/music"

describe("formatCents", (): void => {
    it("formats cents", (): void => {
        const cents = 884.358713 as Cents

        const actual = formatCents(cents)

        const expected = "884.359¢" as Formatted<Cents>
        expect(actual).toBe(expected)
    })

    it("can return the cents aligned (such as for tables)", (): void => {
        const cents = 884.358713 as Cents

        const actual = formatCents(cents, { align: true })

        const expected = "       884.359¢" as Formatted<Cents>
        expect(actual).toBe(expected)
    })
})
