import {Scamon} from "../../../../../src/general"
import {maxScamon} from "../../../../../src/general/math/numeric/scamon/typedOperations"
import {HALF_APOTOME, SizeCategoryBound} from "../../../../../src/sagittal"
import {computeSizeCategoryBoundsUpToHalfApotome} from "../../../../../src/scripts/jiNotationBoundClass/histories/sizeCategoryBounds"

describe("computeSizeCategoryBoundsUpToHalfApotome", (): void => {
    it("only returns the size category bounds that are less than or equal to the max position", (): void => {
        const actual = computeSizeCategoryBoundsUpToHalfApotome()
            .map((sizeCategoryBound: SizeCategoryBound): Scamon => sizeCategoryBound.pitch)

        expect(maxScamon(...actual) as Scamon).toEqualScamon(HALF_APOTOME)
    })
})
