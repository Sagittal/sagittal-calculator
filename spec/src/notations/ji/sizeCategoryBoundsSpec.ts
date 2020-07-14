import { computeSizeCategoryBounds, MAXIMUM_POSITION } from "../../../../src/notations/ji"

describe("computeSizeCategoryBounds", () => {
    it("only returns the size category bounds that are less than or equal to the maximum position", () => {
        const result = computeSizeCategoryBounds()

        expect(Math.max(...result.map(r => r.cents))).toEqual(MAXIMUM_POSITION)
    })
})
