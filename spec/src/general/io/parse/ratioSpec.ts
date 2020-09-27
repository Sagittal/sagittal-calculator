import { Formatted, parseRatio, Ratio } from "../../../../../src/general"

describe("parseRatio", (): void => {
    it("works for directed ratios", (): void => {
        const ratio = "5/4" as Formatted<Ratio>

        const actual = parseRatio(ratio)

        const expected = [5, 4] as Ratio
        expect(actual).toEqual(expected)
    })

    it("works for directed ratios", (): void => {
        const ratio = "5:4" as Formatted<Ratio>

        const actual = parseRatio(ratio)

        const expected = [4, 5] as Ratio
        expect(actual).toEqual(expected)
    })

    it("works for ratios which are implictly over 1", (): void => {
        const ratio = "275" as Formatted<Ratio>

        const actual = parseRatio(ratio)

        const expected = [275, 1] as Ratio
        expect(actual).toEqual(expected)
    })

    it("works for factored ratios", (): void => {
        const ratio = "5².11" as Formatted<Ratio>

        const actual = parseRatio(ratio)

        const expected = [275, 1] as Ratio
        expect(actual).toEqual(expected)
    })

    it("does not do the work of reducing ratios", (): void => {
        const ratio = "25/20" as Formatted<Ratio>

        const actual = parseRatio(ratio)

        const expected = [25, 20] as Ratio
        expect(actual).toEqual(expected)
    })

    // I suggest we do not support parsing irrational ratios, because it conflicts with factorized form e.g. 5².11
    // and factorized form is more important.
    // perhaps if you really wanted an irrational ratio, you could use commas, or some other indicator...
    // but I'm not going to bother figuring this out at this time.
    // it("can handle irrational ratios", (): void => {
    //     const ratio = "11.1/4.3" as Formatted<Ratio>
    //
    //     const actual = parseRatio(ratio)
    //
    //     const expected = [11.1, 4.3] as Ratio
    //     expect(actual).toEqual(expected)
    // })
})
