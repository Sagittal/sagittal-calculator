import { formatPitch, Formatted } from "../../../../../src/general/io/format"
import { Decimal, Integer, Num } from "../../../../../src/general/math"
import { Monzo } from "../../../../../src/general/math/rational/monzo"
import { Ratio } from "../../../../../src/general/math/rational/ratio"
import { Cents } from "../../../../../src/general/music"

describe("formatPitch", (): void => {
    it("if only the ratio is present, returns it formatted", (): void => {
        const pitch = { ratio: [5, 3] as Ratio }

        const actual = formatPitch(pitch)

        const expected = "5/3" as Formatted<Num>
        expect(actual).toBe(expected)
    })

    it("if the ratio and monzo are present, returns the ratio formatted", (): void => {
        const pitch = { ratio: [5, 3] as Ratio, monzo: [0, -1, 1] as Monzo }

        const actual = formatPitch(pitch)

        const expected = "5/3" as Formatted<Num>
        expect(actual).toBe(expected)
    })

    it("if the ratio and decimal are present, returns the ratio formatted", (): void => {
        const pitch = { ratio: [5, 1] as Ratio, decimal: 5 as Integer }

        const actual = formatPitch(pitch)

        const expected = "5/1" as Formatted<Num>
        expect(actual).toBe(expected)
    })

    it("if the ratio and cents are present, returns the ratio formatted", (): void => {
        const pitch = { ratio: [5, 3] as Ratio, cents: 884.358712999 as Cents }

        const actual = formatPitch(pitch)

        const expected = "5/3" as Formatted<Num>
        expect(actual).toBe(expected)
    })

    it("if only the monzo is present, returns the monzo formatted", (): void => {
        const pitch = { monzo: [0, -1, 1] as Monzo }

        const actual = formatPitch(pitch)

        const expected = "[   0  -1   1 ⟩" as Formatted<Num>
        expect(actual).toBe(expected)
    })

    it("if the monzo and decimal are present, returns the monzo formatted", (): void => {
        const pitch = { monzo: [0, 0, 1] as Monzo, decimal: 5 as Integer }

        const actual = formatPitch(pitch)

        const expected = "[   0   0   1 ⟩" as Formatted<Num>
        expect(actual).toBe(expected)
    })

    it("if the monzo and cents are present, returns the monzo formatted", (): void => {
        const pitch = { monzo: [0, -1, 1] as Monzo, cents: 884.358712999 as Cents }

        const actual = formatPitch(pitch)

        const expected = "[   0  -1   1 ⟩" as Formatted<Num>
        expect(actual).toBe(expected)
    })

    it("if the decimal and cents are present, returns the cents formatted", (): void => {
        const pitch = { decimal: 1.666667 as Decimal, cents: 884.358712999 as Cents }

        const actual = formatPitch(pitch)

        const expected = "       884.359¢" as Formatted<Num>
        expect(actual).toBe(expected)
    })

    it("if only the decimal is present, returns it as formatted cents", (): void => {
        const pitch = { decimal: 1.666667 as Decimal }

        const actual = formatPitch(pitch)

        const expected = "       884.359¢" as Formatted<Num>
        expect(actual).toBe(expected)
    })

    it("can return the pitch unaligned (such as for in error messages, rather than in tables)", (): void => {
        const pitch = { decimal: 1.666667 as Decimal }

        const actual = formatPitch(pitch, { align: false })

        const expected = "884.359¢" as Formatted<Num>
        expect(actual).toBe(expected)
    })
})
