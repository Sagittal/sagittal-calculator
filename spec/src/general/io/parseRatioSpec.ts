import { parseRatio, Ratio } from "../../../../src/general"

describe("parseRatio", () => {
    it("works for directed ratios", () => {
        const ratio = "5/4"

        const actual = parseRatio(ratio)

        const expected = [5, 4] as Ratio
        expect(actual).toEqual(expected)
    })

    it("works for directed ratios", () => {
        const ratio = "5:4"

        const actual = parseRatio(ratio)

        const expected = [4, 5] as Ratio
        expect(actual).toEqual(expected)
    })
})
