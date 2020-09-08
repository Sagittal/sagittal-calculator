import { Monzo, Ratio } from "../../../../../src/general"
import { computeMonzoFrom23FreeRatioAndSizeCategoryName, TwoThreeFreeClass } from "../../../../../src/sagittal"
import { SizeCategoryName } from "../../../../../src/sagittal/comma/name/types"

describe("computeMonzoFrom23FreeRatioAndSizeCategoryName", () => {
    it("gives you the monzo for the comma with the given name", () => {

        const twoThreeFreeClass: TwoThreeFreeClass = [1, 91] as TwoThreeFreeClass
        const sizeCategoryName: SizeCategoryName = SizeCategoryName.SCHISMA

        const actual = computeMonzoFrom23FreeRatioAndSizeCategoryName({ twoThreeFreeClass, sizeCategoryName })

        const expected = [-3, 6, 0, -1, 0, -1] as Monzo
        expect(actual).toEqual(expected)
    })
})
