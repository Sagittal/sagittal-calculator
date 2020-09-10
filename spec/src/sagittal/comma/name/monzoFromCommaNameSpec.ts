import { Monzo, Ratio } from "../../../../../src/general"
import { computeMonzoFrom23FreeClassAndSizeCategoryName } from "../../../../../src/sagittal"
import { SizeCategoryName } from "../../../../../src/sagittal/comma/name/types"

describe("computeMonzoFrom23FreeClassAndSizeCategoryName", () => {
    it("gives you the monzo for the comma with the given name", () => {
        const twoThreeFreeRatio: Ratio = [1, 91] as Ratio
        const sizeCategoryName: SizeCategoryName = SizeCategoryName.SCHISMA

        const actual = computeMonzoFrom23FreeClassAndSizeCategoryName({ twoThreeFreeRatio, sizeCategoryName })

        const expected = [-3, 6, 0, -1, 0, -1] as Monzo
        expect(actual).toEqual(expected)
    })
})
