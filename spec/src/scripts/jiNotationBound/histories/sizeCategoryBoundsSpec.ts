import { Cents, CentsPosition, max } from "../../../../../src/general"
import { MAX_SYMBOL_CLASS_CENTS } from "../../../../../src/sagittal"
import { computeSizeCategoryBoundsWithinMaximumPosition } from "../../../../../src/scripts/jiNotationBound/histories/sizeCategoryBounds"

describe("computeSizeCategoryBoundsWithinMaximumPosition", (): void => {
    it("only returns the size category bounds that are less than or equal to the max position", (): void => {
        const actual = computeSizeCategoryBoundsWithinMaximumPosition()

        expect(max(...actual.map((sizeCategoryBound: CentsPosition): Cents => sizeCategoryBound.cents)))
            .toEqual(MAX_SYMBOL_CLASS_CENTS)
    })
})
