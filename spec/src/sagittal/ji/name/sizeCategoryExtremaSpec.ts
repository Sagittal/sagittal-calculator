// tslint:disable max-line-length

import {Cents, computeCentsFromPitch} from "../../../../../src/general"
import {computeSizeCategoryExtrema} from "../../../../../src/sagittal/ji/name/sizeCategoryExtrema"
import {SizeCategoryName} from "../../../../../src/sagittal/ji/name/types"

describe("computeSizeCategoryExtrema", (): void => {
    it("gives the correct extrema for each size category", (): void => {
        expect(computeCentsFromPitch(computeSizeCategoryExtrema(SizeCategoryName.UNISON)[0].pitch)).toBeCloseToTyped(0.000000 as Cents)
        expect(computeCentsFromPitch(computeSizeCategoryExtrema(SizeCategoryName.UNISON)[1].pitch)).toBeCloseToTyped(0.000000 as Cents)

        expect(computeCentsFromPitch(computeSizeCategoryExtrema(SizeCategoryName.SCHISMINA)[0].pitch)).toBeCloseToTyped(0.000000 as Cents)
        expect(computeCentsFromPitch(computeSizeCategoryExtrema(SizeCategoryName.SCHISMINA)[1].pitch)).toBeCloseToTyped(1.807522 as Cents)

        expect(computeCentsFromPitch(computeSizeCategoryExtrema(SizeCategoryName.SCHISMA)[0].pitch)).toBeCloseToTyped(1.807522 as Cents)
        expect(computeCentsFromPitch(computeSizeCategoryExtrema(SizeCategoryName.SCHISMA)[1].pitch)).toBeCloseToTyped(4.499913 as Cents)

        expect(computeCentsFromPitch(computeSizeCategoryExtrema(SizeCategoryName.KLEISMA)[0].pitch)).toBeCloseToTyped(4.499913 as Cents)
        expect(computeCentsFromPitch(computeSizeCategoryExtrema(SizeCategoryName.KLEISMA)[1].pitch)).toBeCloseToTyped(11.730005 as Cents)

        expect(computeCentsFromPitch(computeSizeCategoryExtrema(SizeCategoryName.COMMA)[0].pitch)).toBeCloseToTyped(11.730005 as Cents)
        expect(computeCentsFromPitch(computeSizeCategoryExtrema(SizeCategoryName.COMMA)[1].pitch)).toBeCloseToTyped(33.382492 as Cents)

        expect(computeCentsFromPitch(computeSizeCategoryExtrema(SizeCategoryName.SMALL_DIESIS)[0].pitch)).toBeCloseToTyped(33.382492 as Cents)
        expect(computeCentsFromPitch(computeSizeCategoryExtrema(SizeCategoryName.SMALL_DIESIS)[1].pitch)).toBeCloseToTyped(45.112497 as Cents)

        expect(computeCentsFromPitch(computeSizeCategoryExtrema(SizeCategoryName.MEDIUM_DIESIS)[0].pitch)).toBeCloseToTyped(45.112497 as Cents)
        expect(computeCentsFromPitch(computeSizeCategoryExtrema(SizeCategoryName.MEDIUM_DIESIS)[1].pitch)).toBeCloseToTyped(56.842503 as Cents)

        expect(computeCentsFromPitch(computeSizeCategoryExtrema(SizeCategoryName.LARGE_DIESIS)[0].pitch)).toBeCloseToTyped(56.842503 as Cents)
        expect(computeCentsFromPitch(computeSizeCategoryExtrema(SizeCategoryName.LARGE_DIESIS)[1].pitch)).toBeCloseToTyped(68.572508 as Cents)
    })
})
