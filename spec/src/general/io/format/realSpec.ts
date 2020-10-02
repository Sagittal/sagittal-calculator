import { formatReal, Formatted } from "../../../../../src/general/io/format"
import { Real, RealDecimal, RealMonzo, RealQuotient } from "../../../../../src/general/math"

describe("formatReal", (): void => {
    it("if only the quotient is present, returns it formatted", (): void => {
        const real = { quotient: [5, 3] as RealQuotient }

        const actual = formatReal(real)

        const expected = "5/3" as Formatted<Real>
        expect(actual).toBe(expected)
    })

    it("if the quotient and monzo are present, returns the quotient formatted", (): void => {
        const real = { quotient: [5, 3] as RealQuotient, monzo: [0, -1, 1] as RealMonzo }

        const actual = formatReal(real)

        const expected = "5/3" as Formatted<Real>
        expect(actual).toBe(expected)
    })

    it("if the quotient and decimal are present, returns the quotient formatted", (): void => {
        const real = { quotient: [5, 3] as RealQuotient, decimal: 1.666667 as RealDecimal }

        const actual = formatReal(real)

        const expected = "5/3" as Formatted<Real>
        expect(actual).toBe(expected)
    })

    it("if only the monzo is present, returns the monzo formatted", (): void => {
        const real = { monzo: [0, -1, 1] as RealMonzo }

        const actual = formatReal(real)

        const expected = "[   0  -1   1 ⟩" as Formatted<Real>
        expect(actual).toBe(expected)
    })

    it("if the monzo and decimal are present, returns the monzo formatted", (): void => {
        const real = { monzo: [0, -1, 1] as RealMonzo, decimal: 1.666667 as RealDecimal }

        const actual = formatReal(real)

        const expected = "[   0  -1   1 ⟩" as Formatted<Real>
        expect(actual).toBe(expected)
    })

    it("if only the decimal is present, returns the decimal formatted", (): void => {
        const real = { decimal: 1.666667 as RealDecimal }

        const actual = formatReal(real)

        const expected = "1.667" as Formatted<Real>
        expect(actual).toBe(expected)
    })

    it("if provided as a direct decimal, returns the decimal formatted", (): void => {
        const realDecimal = 1.666667 as RealDecimal

        const actual = formatReal(realDecimal)

        const expected = "1.667" as Formatted<Real>
        expect(actual).toBe(expected)
    })

    it("return the real aligned (such as for tables)", (): void => {
        const real = { decimal: 1.666667 as RealDecimal }

        const actual = formatReal(real, { align: true })

        const expected = "  1.667" as Formatted<Real>
        expect(actual).toBe(expected)
    })
})
