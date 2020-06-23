const {computeSizeCategoryBounds} = require("../../../../src/notations/ji/sizeCategoryBounds")
const {MAXIMUM_POSITION} = require("../../../../src/notations/ji/intervals")

describe("computeSizeCategoryBounds", () => {
    it("only returns the size category bounds that are less than or equal to the maximum position", () => {
        const result = computeSizeCategoryBounds()

        expect(Math.max(...result.map(r => r.position))).toEqual(MAXIMUM_POSITION)
    })
})
