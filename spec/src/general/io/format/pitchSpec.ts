import { formatPitch, Formatted } from "../../../../../src/general/io/format"
import { Monzo } from "../../../../../src/general/math/numeric/monzo"
import { Quotient } from "../../../../../src/general/math/numeric/quotient"
import { Pitch } from "../../../../../src/general/music/pitch"

describe("formatPitch", (): void => {
    it("if only the monzo is present, returns the monzo formatted", (): void => {
        const pitch = { monzo: [0, -1, 1] } as Pitch<{ rational: true }>

        const actual = formatPitch(pitch)

        const expected = "[   0  -1   1 ⟩" as Formatted<Pitch>
        expect(actual).toBe(expected)
    })

    it("if the scaler is present and rational, shows it in parens out to the right of the monzo", (): void => {
        const pitch = {
            monzo: [0, -1, 1] as Monzo<{ rational: true }>,
            scaler: [1, 2] as Quotient,
        } as Pitch<{ rational: false }>

        const actual = formatPitch(pitch)

        const expected = "[   0  -1   1 ⟩(1/2)" as Formatted<Pitch>
        expect(actual).toBe(expected)
    })

    it("if the scaler is present but not rational, shows a cents representation of the whole thing", (): void => {
        const pitch = {
            monzo: [0, -1, 1] as Monzo<{ rational: true }>,
            scaler: [1.238923, 1] as Quotient,
        } as Pitch<{ rational: false }>

        const actual = formatPitch(pitch)

        const expected = "1095.652¢" as Formatted<Pitch>
        expect(actual).toBe(expected)
    })

    it("can return the decimal aligned (for tables)", (): void => {
        const pitch = {
            monzo: [0, -1, 1] as Monzo<{ rational: true }>,
            scaler: [1.238923, 1] as Quotient,
        } as Pitch<{ rational: false }>

        const actual = formatPitch(pitch, { align: true })

        const expected = "      1095.652¢" as Formatted<Pitch>
        expect(actual).toBe(expected)
    })
})
