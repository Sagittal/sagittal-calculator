import { RationalMonzo } from "../../../../../../src/general"
import { Comma } from "../../../../../../src/general/music/ji"
import { computeCommaFromCommaNameQuotientAndSizeCategoryName } from "../../../../../../src/sagittal"
import { CommaNameQuotient, SizeCategoryName } from "../../../../../../src/sagittal/ji/comma/name/types"

describe("computeCommaFromCommaNameQuotientAndSizeCategoryName", (): void => {
    it("gives you the monzo for the comma with the given name", (): void => {
        const commaNameQuotient: CommaNameQuotient = [1, 91] as CommaNameQuotient
        const sizeCategoryName: SizeCategoryName = SizeCategoryName.SCHISMA

        const actual = computeCommaFromCommaNameQuotientAndSizeCategoryName({ commaNameQuotient, sizeCategoryName })

        const expected = { monzo: [-3, 6, 0, -1, 0, -1] as RationalMonzo } as Comma
        expect(actual).toEqual(expected)
    })
})
