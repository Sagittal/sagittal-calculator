import { Monzo, Ratio } from "../../../../../src/general"
import { computeMonzoFromFiveRoughRatioAndSizeCategoryName } from "../../../../../src/sagittal"
import { SizeCategoryName } from "../../../../../src/sagittal/comma/name/types"

describe("computeMonzoFromFiveRoughRatioAndSizeCategoryName", () => {
    it("gives you the monzo for the comma with the given name", () => {

        const fiveRoughRatio: Ratio = [1, 91] as Ratio
        const sizeCategoryName: SizeCategoryName = SizeCategoryName.SCHISMA

        const actual = computeMonzoFromFiveRoughRatioAndSizeCategoryName({ fiveRoughRatio, sizeCategoryName })

        const expected = [-3, 6, 0, -1, 0, -1] as Monzo
        expect(actual).toEqual(expected)
    })
})
