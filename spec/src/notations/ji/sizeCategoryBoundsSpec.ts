import { computeSizeCategoryBounds, MAX_POSITION } from "../../../../src/notations/ji"

describe("computeSizeCategoryBounds", () => {
    it("only returns the size category bounds that are less than or equal to the max position", () => {
        const actual = computeSizeCategoryBounds()

        expect(Math.max(...actual.map(r => r.cents))).toEqual(MAX_POSITION)
    })
})
