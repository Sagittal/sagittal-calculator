import { computeSizeCategoryBounds, MAXIMUM_POSITION } from "../../../../src/notations/ji"

describe("computeSizeCategoryBounds", () => {
    it("only returns the size category bounds that are less than or equal to the maximum position", () => {
        const actual = computeSizeCategoryBounds()

        expect(Math.max(...actual.map(r => r.cents))).toEqual(MAXIMUM_POSITION)
    })
})
