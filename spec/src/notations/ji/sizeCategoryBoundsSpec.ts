import { max } from "../../../../src/general"
import { computeSizeCategoryBoundsWithinMaximumPosition, MAX_POSITION } from "../../../../src/notations/ji"

describe("computeSizeCategoryBoundsWithinMaximumPosition", () => {
    it("only returns the size category bounds that are less than or equal to the max position", () => {
        const actual = computeSizeCategoryBoundsWithinMaximumPosition()

        expect(max(...actual.map(sizeCategoryBound => sizeCategoryBound.cents))).toEqual(MAX_POSITION)
    })
})
