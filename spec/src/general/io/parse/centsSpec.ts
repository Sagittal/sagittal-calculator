import { Formatted } from "../../../../../src/general/io/format"
import { parseCents } from "../../../../../src/general/io/parse"
import { Cents } from "../../../../../src/general/music"

describe("parseCents", (): void => {
    it("works when provided cents directly, with the cents symbol", (): void => {
        const formattedCents = "45.3¢" as Formatted<Cents>

        const actual = parseCents(formattedCents)

        const expected = 45.3 as Cents
        expect(actual).toBe(expected)
    })

    it("works when provided cents directly, with a 'c'", (): void => {
        const formattedCents = "50c" as Formatted<Cents>

        const actual = parseCents(formattedCents)

        const expected = 50 as Cents
        expect(actual).toBe(expected)
    })
})
