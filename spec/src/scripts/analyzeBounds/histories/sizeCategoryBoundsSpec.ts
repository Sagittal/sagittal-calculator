import { max } from "../../../../../src/general"
import { MAX_SINGLE_SHAFT_CENTS } from "../../../../../src/sagittal"
import { computeSizeCategoryBoundsWithinMaximumPosition } from "../../../../../src/scripts/analyzeBounds/histories/sizeCategoryBounds"

describe("computeSizeCategoryBoundsWithinMaximumPosition", () => {
    it("only returns the size category bounds that are less than or equal to the max position", () => {
        const actual = computeSizeCategoryBoundsWithinMaximumPosition()

        expect(max(...actual.map(sizeCategoryBound => sizeCategoryBound.cents))).toEqual(MAX_SINGLE_SHAFT_CENTS)
    })
})
