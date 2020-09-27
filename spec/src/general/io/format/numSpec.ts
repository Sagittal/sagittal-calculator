import { formatNum, Formatted } from "../../../../../src/general/io/format"
import { Decimal, Monzo, Num, Ratio } from "../../../../../src/general/math"

describe("formatNum", (): void => {
    it("if only the ratio is present, returns it formatted", (): void => {
        const num = { ratio: [5, 3] as Ratio }

        const actual = formatNum(num)

        const expected = "5/3" as Formatted<Num>
        expect(actual).toBe(expected)
    })

    it("if the ratio and monzo are present, returns the ratio formatted", (): void => {
        const num = { ratio: [5, 3] as Ratio, monzo: [0, -1, 1] as Monzo }

        const actual = formatNum(num)

        const expected = "5/3" as Formatted<Num>
        expect(actual).toBe(expected)
    })

    it("if the ratio and decimal are present, returns the ratio formatted", (): void => {
        const num = { ratio: [5, 3] as Ratio, decimal: 1.666667 as Decimal }

        const actual = formatNum(num)

        const expected = "5/3" as Formatted<Num>
        expect(actual).toBe(expected)
    })

    it("if only the monzo is present, returns the monzo formatted", (): void => {
        const num = { monzo: [0, -1, 1] as Monzo }

        const actual = formatNum(num)

        const expected = "[   0  -1   1 ⟩" as Formatted<Num>
        expect(actual).toBe(expected)
    })

    it("if the monzo and decimal are present, returns the monzo formatted", (): void => {
        const num = { monzo: [0, -1, 1] as Monzo, decimal: 1.666667 as Decimal }

        const actual = formatNum(num)

        const expected = "[   0  -1   1 ⟩" as Formatted<Num>
        expect(actual).toBe(expected)
    })

    it("if only the decimal is present, returns the decimal formatted", (): void => {
        const num = { decimal: 1.666667 as Decimal }

        const actual = formatNum(num)

        const expected = "1.667" as Formatted<Num>
        expect(actual).toBe(expected)
    })

    it("return the num aligned (such as for tables)", (): void => {
        const num = { decimal: 1.666667 as Decimal }

        const actual = formatNum(num, { align: true })

        const expected = "  1.667" as Formatted<Num>
        expect(actual).toBe(expected)
    })
})
