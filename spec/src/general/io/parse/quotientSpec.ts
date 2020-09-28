import { Formatted, parseQuotient, RationalQuotient } from "../../../../../src/general"

describe("parseQuotient", (): void => {
    it("works for directed quotients", (): void => {
        const quotient = "5/4" as Formatted<RationalQuotient>

        const actual = parseQuotient(quotient)

        const expected = [5, 4] as RationalQuotient
        expect(actual).toEqual(expected)
    })

    it("works for directed quotients", (): void => {
        const quotient = "5:4" as Formatted<RationalQuotient>

        const actual = parseQuotient(quotient)

        const expected = [4, 5] as RationalQuotient
        expect(actual).toEqual(expected)
    })

    it("works for quotients which are implictly over 1", (): void => {
        const quotient = "275" as Formatted<RationalQuotient>

        const actual = parseQuotient(quotient)

        const expected = [275, 1] as RationalQuotient
        expect(actual).toEqual(expected)
    })

    it("works for factored quotients", (): void => {
        const quotient = "5².11" as Formatted<RationalQuotient>

        const actual = parseQuotient(quotient)

        const expected = [275, 1] as RationalQuotient
        expect(actual).toEqual(expected)
    })

    it("does not do the work of reducing quotients", (): void => {
        const quotient = "25/20" as Formatted<RationalQuotient>

        const actual = parseQuotient(quotient)

        const expected = [25, 20] as RationalQuotient
        expect(actual).toEqual(expected)
    })
})
