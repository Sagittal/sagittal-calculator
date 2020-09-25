import { computeDecimalFromMonzo } from "../../../../../../src/general"
import { SizeCategoryBound, SIZE_CATEGORY_BOUNDS } from "../../../../../../src/sagittal"

describe("SIZE_CATEGORY_BOUNDS", (): void => {
    it("monzos match the positions", (): void => {
        SIZE_CATEGORY_BOUNDS.forEach((sizeCategoryBound: SizeCategoryBound): void => {
            expect(computeDecimalFromMonzo(sizeCategoryBound.monzo!))
                .toBeCloseToTyped(sizeCategoryBound.decimal!)
        })
    })
})
