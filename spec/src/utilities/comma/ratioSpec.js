const {parseRatio} = require("../../../../src/utilities/comma/ratio")

describe("parseRatio", () => {
    it("works for directed ratios", () => {
        const ratio = "5/4"

        const result = parseRatio(ratio)

        expect(result).toEqual([5, 4])
    })

    it("works for directed ratios", () => {
        const ratio = "5:4"

        const result = parseRatio(ratio)

        expect(result).toEqual([4, 5])
    })
})
