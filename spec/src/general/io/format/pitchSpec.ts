import { formatPitch, Formatted } from "../../../../../src/general/io/format"
import { Decimal, IntegerDecimal, Monzo, Num, Quotient } from "../../../../../src/general/math"
import { Cents } from "../../../../../src/general/music"

describe("formatPitch", (): void => {
    it("if only the quotient is present, returns it formatted", (): void => {
        const pitch = { quotient: [5, 3] as Quotient }

        const actual = formatPitch(pitch)

        const expected = "5/3" as Formatted<Num>
        expect(actual).toBe(expected)
    })

    it("if the quotient and monzo are present, returns the quotient formatted", (): void => {
        const pitch = { quotient: [5, 3] as Quotient, monzo: [0, -1, 1] as Monzo }

        const actual = formatPitch(pitch)

        const expected = "5/3" as Formatted<Num>
        expect(actual).toBe(expected)
    })

    it("if the quotient and decimal are present, returns the quotient formatted", (): void => {
        const pitch = { quotient: [5, 1] as Quotient, decimal: 5 as IntegerDecimal }

        const actual = formatPitch(pitch)

        const expected = "5/1" as Formatted<Num>
        expect(actual).toBe(expected)
    })

    it("if the quotient and cents are present, returns the quotient formatted", (): void => {
        const pitch = { quotient: [5, 3] as Quotient, cents: 884.358713 as Cents }

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
        const pitch = { monzo: [0, 0, 1] as Monzo, decimal: 5 as IntegerDecimal }

        const actual = formatPitch(pitch)

        const expected = "[   0   0   1 ⟩" as Formatted<Num>
        expect(actual).toBe(expected)
    })

    it("if the monzo and cents are present, returns the monzo formatted", (): void => {
        const pitch = { monzo: [0, -1, 1] as Monzo, cents: 884.358713 as Cents }

        const actual = formatPitch(pitch)

        const expected = "[   0  -1   1 ⟩" as Formatted<Num>
        expect(actual).toBe(expected)
    })

    it("if the decimal and cents are present, returns the cents formatted", (): void => {
        const pitch = { decimal: 1.666667 as Decimal, cents: 884.358713 as Cents }

        const actual = formatPitch(pitch)

        const expected = "884.359¢" as Formatted<Num>
        expect(actual).toBe(expected)
    })

    it("if only the decimal is present, returns it as formatted cents", (): void => {
        const pitch = { decimal: 1.666667 as Decimal }

        const actual = formatPitch(pitch)

        const expected = "884.359¢" as Formatted<Num>
        expect(actual).toBe(expected)
    })

    it("can return the pitch aligned (for tables)", (): void => {
        const pitch = { decimal: 1.666667 as Decimal }

        const actual = formatPitch(pitch, { align: true })

        const expected = "       884.359¢" as Formatted<Num>
        expect(actual).toBe(expected)
    })
})
