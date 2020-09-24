import { formatPitch, Formatted } from "../../../../../src/general/io/format"
import { Decimal } from "../../../../../src/general/math"
import { Monzo } from "../../../../../src/general/math/rational/monzo"
import { Ratio } from "../../../../../src/general/math/rational/ratio"
import { Cents, Pitch } from "../../../../../src/general/music"

describe("formatPitch", (): void => {
    it("if only the ratio is present, returns it formatted", (): void => {
        const pitch = { ratio: [5, 3] as Ratio }

        const actual = formatPitch(pitch)

        const expected = "5/3" as Formatted<Pitch>
        expect(actual).toBe(expected)
    })

    it("if the ratio and monzo are present, returns the ratio formatted", (): void => {
        const pitch = { ratio: [5, 3] as Ratio, monzo: [0, -1, 1] as Monzo }

        const actual = formatPitch(pitch)

        const expected = "5/3" as Formatted<Pitch>
        expect(actual).toBe(expected)
    })

    it("if the ratio and cents are present, returns the ratio formatted", (): void => {
        const pitch = { ratio: [5, 3] as Ratio, cents: 884.358713 as Cents }

        const actual = formatPitch(pitch)

        const expected = "5/3" as Formatted<Pitch>
        expect(actual).toBe(expected)
    })

    it("if the ratio and decimal are present, returns the ratio formatted", (): void => {
        const pitch = { ratio: [5, 3] as Ratio, decimal: 1.666667 as Decimal }

        const actual = formatPitch(pitch)

        const expected = "5/3" as Formatted<Pitch>
        expect(actual).toBe(expected)
    })

    it("if only the monzo is present, returns the monzo formatted", (): void => {
        const pitch = { monzo: [0, -1, 1] as Monzo }

        const actual = formatPitch(pitch)

        const expected = "[   0  -1   1 ⟩" as Formatted<Pitch>
        expect(actual).toBe(expected)
    })

    it("if the monzo and cents are present, returns the monzo formatted", (): void => {
        const pitch = { monzo: [0, -1, 1] as Monzo, cents: 884.358713 as Cents }

        const actual = formatPitch(pitch)

        const expected = "[   0  -1   1 ⟩" as Formatted<Pitch>
        expect(actual).toBe(expected)
    })

    it("if the monzo and decimal are present, returns the monzo formatted", (): void => {
        const pitch = { monzo: [0, -1, 1] as Monzo, decimal: 1.666667 as Decimal }

        const actual = formatPitch(pitch)

        const expected = "[   0  -1   1 ⟩" as Formatted<Pitch>
        expect(actual).toBe(expected)
    })

    it("if only the cents are present, returns the cents formatted", (): void => {
        const pitch = { cents: 884.358713 as Cents }

        const actual = formatPitch(pitch)

        const expected = "       884.359¢" as Formatted<Pitch>
        expect(actual).toBe(expected)
    })

    it("if the cents and decimal are present, returns the cents formatted", (): void => {
        const pitch = { cents: 884.358713 as Cents, decimal: 1.666667 as Decimal }

        const actual = formatPitch(pitch)

        const expected = "       884.359¢" as Formatted<Pitch>
        expect(actual).toBe(expected)
    })

    // todo: DECIMAL & CENTS
    //  this is bundled up with those other related to-dos
    //  currently a pitch can't only have a decimal. because the non-JI pitch forces cents.
    // Not actually a situation for pitches right now, but should be!
    // it("if only the decimal is present, returns the decimal formatted", (): void => {
    //     const pitch = { decimal: 1.666667 as Decimal }
    //
    //     const actual = formatPitch(pitch)
    //
    //     const expected = "  1.667" as Formatted<Pitch>
    //     expect(actual).toBe(expected)
    // })

    it("can return the pitch unaligned (such as for in error messages, rather than in tables)", (): void => {
        const pitch = { cents: 884.358713 as Cents }

        const actual = formatPitch(pitch, { align: false })

        const expected = "884.359¢" as Formatted<Pitch>
        expect(actual).toBe(expected)
    })
})
