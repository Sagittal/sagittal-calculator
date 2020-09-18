import { Cents, Extrema } from "../../../../../../src/general"
import { computeSizeCategoryExtrema } from "../../../../../../src/sagittal/ji/comma/name/sizeCategoryExtrema"
import { SizeCategoryName } from "../../../../../../src/sagittal/ji/comma/name/types"

describe("computeSizeCategoryExtrema", (): void => {
    it("gives the correct extrema for each size category", (): void => {
        expect(computeSizeCategoryExtrema(SizeCategoryName.UNISON))
            .toBeCloseToArray([0.000000, 0.000000] as Extrema<Cents>)
        expect(computeSizeCategoryExtrema(SizeCategoryName.SCHISMINA))
            .toBeCloseToArray([0.000000, 1.807522] as Extrema<Cents>)
        expect(computeSizeCategoryExtrema(SizeCategoryName.SCHISMA))
            .toBeCloseToArray([1.807522, 4.499913] as Extrema<Cents>)
        expect(computeSizeCategoryExtrema(SizeCategoryName.KLEISMA))
            .toBeCloseToArray([4.499913, 11.730005] as Extrema<Cents>)
        expect(computeSizeCategoryExtrema(SizeCategoryName.COMMA))
            .toBeCloseToArray([11.730005, 33.382492] as Extrema<Cents>)
        expect(computeSizeCategoryExtrema(SizeCategoryName.SMALL_DIESIS))
            .toBeCloseToArray([33.382492, 45.112497] as Extrema<Cents>)
        expect(computeSizeCategoryExtrema(SizeCategoryName.MEDIUM_DIESIS))
            .toBeCloseToArray([45.112497, 56.842503] as Extrema<Cents>)
        expect(computeSizeCategoryExtrema(SizeCategoryName.LARGE_DIESIS))
            .toBeCloseToArray([56.842503, 68.572508] as Extrema<Cents>)
    })
})
