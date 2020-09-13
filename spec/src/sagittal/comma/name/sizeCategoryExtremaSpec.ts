import { Cents, Extrema } from "../../../../../src/general"
import { computeSizeCategoryExtrema } from "../../../../../src/sagittal/comma/name/sizeCategoryExtrema"
import { SizeCategoryName } from "../../../../../src/sagittal/comma/name/types"

describe("computeSizeCategoryExtrema", (): void => {
    it("gives the correct extrema for each size category", (): void => {
        expect(computeSizeCategoryExtrema(SizeCategoryName.UNISON))
            .toEqual([0, 0] as Extrema<Cents>)
        expect(computeSizeCategoryExtrema(SizeCategoryName.SCHISMINA))
            .toEqual([0, 1.80752293276652] as Extrema<Cents>)
        expect(computeSizeCategoryExtrema(SizeCategoryName.SCHISMA))
            .toEqual([1.80752293276652, 4.49991346125848] as Extrema<Cents>)
        expect(computeSizeCategoryExtrema(SizeCategoryName.KLEISMA))
            .toEqual([4.49991346125848, 11.7300051923244] as Extrema<Cents>)
        expect(computeSizeCategoryExtrema(SizeCategoryName.COMMA))
            .toEqual([11.7300051923244, 33.3824926442071] as Extrema<Cents>)
        expect(computeSizeCategoryExtrema(SizeCategoryName.SMALL_DIESIS))
            .toEqual([33.3824926442071, 45.1124978365313] as Extrema<Cents>)
        expect(computeSizeCategoryExtrema(SizeCategoryName.MEDIUM_DIESIS))
            .toEqual([45.1124978365313, 56.8425030288559] as Extrema<Cents>)
        expect(computeSizeCategoryExtrema(SizeCategoryName.LARGE_DIESIS))
            .toEqual([56.8425030288559, 68.5725082211804] as Extrema<Cents>)
    })
})
