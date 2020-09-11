import { computeCentsFromPitch, Monzo } from "../../../../../src/general"
import { SIZE_CATEGORY_BOUNDS } from "../../../../../src/sagittal"

describe("SIZE_CATEGORY_BOUNDS", () => {
    it("monzos match the positions", () => {
        SIZE_CATEGORY_BOUNDS.forEach(sizeCategoryBound => {
            expect(computeCentsFromPitch({ monzo: sizeCategoryBound.monzo as Monzo }))
                .toBeCloseToTyped(sizeCategoryBound.cents)
        })
    })
})
