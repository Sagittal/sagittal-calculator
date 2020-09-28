import { RationalMonzo } from "../../../../../../src/general"
import { computeMonzoFrom23FreeClassAndSizeCategoryName } from "../../../../../../src/sagittal"
import { CommaNameQuotient, SizeCategoryName } from "../../../../../../src/sagittal/ji/comma/name/types"

describe("computeMonzoFrom23FreeClassAndSizeCategoryName", (): void => {
    it("gives you the monzo for the comma with the given name", (): void => {
        const commaNameQuotient: CommaNameQuotient = [1, 91] as CommaNameQuotient
        const sizeCategoryName: SizeCategoryName = SizeCategoryName.SCHISMA

        const actual = computeMonzoFrom23FreeClassAndSizeCategoryName({ commaNameQuotient, sizeCategoryName })

        const expected = [-3, 6, 0, -1, 0, -1] as RationalMonzo
        expect(actual).toEqual(expected)
    })
})
