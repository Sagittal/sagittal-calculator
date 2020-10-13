import { Scamon } from "../../../../../src/general/math/numeric/scamon"
import { maxScamon } from "../../../../../src/general/math/numeric/scamon/typedOperations"
import { MAX_SINGLE_SHAFT_POSITION, SizeCategoryBound } from "../../../../../src/sagittal"
import { computeSizeCategoryBoundsWithinMaximumPosition } from "../../../../../src/scripts/jiNotationBoundClass/histories/sizeCategoryBounds"

describe("computeSizeCategoryBoundsWithinMaximumPosition", (): void => {
    it("only returns the size category bounds that are less than or equal to the max position", (): void => {
        const actual = computeSizeCategoryBoundsWithinMaximumPosition()
            .map((sizeCategoryBound: SizeCategoryBound): Scamon => sizeCategoryBound.pitch)

        expect(maxScamon(...actual)).toEqualPitch(MAX_SINGLE_SHAFT_POSITION)
    })
})
