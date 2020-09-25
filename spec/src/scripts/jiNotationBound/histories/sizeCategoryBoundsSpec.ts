import { Cents, max } from "../../../../../src/general"
import { MAX_SYMBOL_CLASS_CENTS, SizeCategoryBound } from "../../../../../src/sagittal"
import { computeSizeCategoryBoundsWithinMaximumPosition } from "../../../../../src/scripts/jiNotationBound/histories/sizeCategoryBounds"

describe("computeSizeCategoryBoundsWithinMaximumPosition", (): void => {
    it("only returns the size category bounds that are less than or equal to the max position", (): void => {
        const actual = computeSizeCategoryBoundsWithinMaximumPosition()

        expect(max(...actual.map((sizeCategoryBound: SizeCategoryBound): Cents => sizeCategoryBound.cents)))
            .toEqual(MAX_SYMBOL_CLASS_CENTS)
        // TODO: it would be cool if you could take the cents of a pitch which was Max<Pitch> and it would come out as
        //  Max<Cents>, but I won't hold my breath
    })
})
