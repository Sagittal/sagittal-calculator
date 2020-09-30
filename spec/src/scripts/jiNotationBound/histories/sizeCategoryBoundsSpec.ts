import { maxReals } from "../../../../../src/general/math/real/typedOperations"
import { MAX_SYMBOL_CLASS_POSITION } from "../../../../../src/sagittal"
import { computeSizeCategoryBoundsWithinMaximumPosition } from "../../../../../src/scripts/jiNotationBound/histories/sizeCategoryBounds"

describe("computeSizeCategoryBoundsWithinMaximumPosition", (): void => {
    it("only returns the size category bounds that are less than or equal to the max position", (): void => {
        const actual = computeSizeCategoryBoundsWithinMaximumPosition()

        expect(maxReals(...actual)).toEqualReal(MAX_SYMBOL_CLASS_POSITION)
    })
})
