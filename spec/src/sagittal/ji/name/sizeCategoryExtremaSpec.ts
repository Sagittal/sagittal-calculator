// tslint:disable max-line-length

import {Cents, computeCentsFromPitch} from "../../../../../src/general"
import {computeSizeCategoryExtrema} from "../../../../../src/sagittal/ji/name/sizeCategoryExtrema"
import {SizeCategory} from "../../../../../src/sagittal/ji/name/types"

describe("computeSizeCategoryExtrema", (): void => {
    it("gives the correct extrema for each size category", (): void => {
        expect(computeCentsFromPitch(computeSizeCategoryExtrema(SizeCategory.UNISON)[0].pitch)).toBeCloseToTyped(0.000000 as Cents)
        expect(computeCentsFromPitch(computeSizeCategoryExtrema(SizeCategory.UNISON)[1].pitch)).toBeCloseToTyped(0.000000 as Cents)

        expect(computeCentsFromPitch(computeSizeCategoryExtrema(SizeCategory.SCHISMINA)[0].pitch)).toBeCloseToTyped(0.000000 as Cents)
        expect(computeCentsFromPitch(computeSizeCategoryExtrema(SizeCategory.SCHISMINA)[1].pitch)).toBeCloseToTyped(1.807522 as Cents)

        expect(computeCentsFromPitch(computeSizeCategoryExtrema(SizeCategory.SCHISMA)[0].pitch)).toBeCloseToTyped(1.807522 as Cents)
        expect(computeCentsFromPitch(computeSizeCategoryExtrema(SizeCategory.SCHISMA)[1].pitch)).toBeCloseToTyped(4.499913 as Cents)

        expect(computeCentsFromPitch(computeSizeCategoryExtrema(SizeCategory.KLEISMA)[0].pitch)).toBeCloseToTyped(4.499913 as Cents)
        expect(computeCentsFromPitch(computeSizeCategoryExtrema(SizeCategory.KLEISMA)[1].pitch)).toBeCloseToTyped(11.730005 as Cents)

        expect(computeCentsFromPitch(computeSizeCategoryExtrema(SizeCategory.COMMA)[0].pitch)).toBeCloseToTyped(11.730005 as Cents)
        expect(computeCentsFromPitch(computeSizeCategoryExtrema(SizeCategory.COMMA)[1].pitch)).toBeCloseToTyped(33.382492 as Cents)

        expect(computeCentsFromPitch(computeSizeCategoryExtrema(SizeCategory.SMALL_DIESIS)[0].pitch)).toBeCloseToTyped(33.382492 as Cents)
        expect(computeCentsFromPitch(computeSizeCategoryExtrema(SizeCategory.SMALL_DIESIS)[1].pitch)).toBeCloseToTyped(45.112497 as Cents)

        expect(computeCentsFromPitch(computeSizeCategoryExtrema(SizeCategory.MEDIUM_DIESIS)[0].pitch)).toBeCloseToTyped(45.112497 as Cents)
        expect(computeCentsFromPitch(computeSizeCategoryExtrema(SizeCategory.MEDIUM_DIESIS)[1].pitch)).toBeCloseToTyped(56.842503 as Cents)

        expect(computeCentsFromPitch(computeSizeCategoryExtrema(SizeCategory.LARGE_DIESIS)[0].pitch)).toBeCloseToTyped(56.842503 as Cents)
        expect(computeCentsFromPitch(computeSizeCategoryExtrema(SizeCategory.LARGE_DIESIS)[1].pitch)).toBeCloseToTyped(68.572508 as Cents)
    })
})
