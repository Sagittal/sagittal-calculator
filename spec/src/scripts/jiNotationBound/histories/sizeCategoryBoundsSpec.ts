import { Pitch } from "../../../../../src/general/music/pitch"
import { maxPitches } from "../../../../../src/general/music/pitch/typedOperations"
import { MAX_SYMBOL_CLASS_POSITION, SizeCategoryBound } from "../../../../../src/sagittal"
import { computeSizeCategoryBoundsWithinMaximumPosition } from "../../../../../src/scripts/jiNotationBound/histories/sizeCategoryBounds"

describe("computeSizeCategoryBoundsWithinMaximumPosition", (): void => {
    it("only returns the size category bounds that are less than or equal to the max position", (): void => {
        const actual = computeSizeCategoryBoundsWithinMaximumPosition()
            .map((sizeCategoryBound: SizeCategoryBound): Pitch => sizeCategoryBound.pitch)

        expect(maxPitches(...actual)).toEqualPitch(MAX_SYMBOL_CLASS_POSITION)
    })
})
