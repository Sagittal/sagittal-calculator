// tslint:disable max-line-length

import {Cents, computeCentsFromPitch} from "../../../../../src/general"
import {SizeCategory} from "../../../../../src/sagittal/ji/name"
import {computeSizeCategoryZone} from "../../../../../src/sagittal/ji/name/sizeCategoryZone"

describe("computeSizeCategoryZone", (): void => {
    it("gives the correct extrema for each size category", (): void => {
        expect(computeCentsFromPitch(computeSizeCategoryZone(SizeCategory.UNISON).extrema[0]!)).toBeCloseToTyped(0.000000 as Cents)
        expect(computeCentsFromPitch(computeSizeCategoryZone(SizeCategory.UNISON).extrema[1]!)).toBeCloseToTyped(0.000000 as Cents)

        expect(computeCentsFromPitch(computeSizeCategoryZone(SizeCategory.SCHISMINA).extrema[0]!)).toBeCloseToTyped(0.000000 as Cents)
        expect(computeCentsFromPitch(computeSizeCategoryZone(SizeCategory.SCHISMINA).extrema[1]!)).toBeCloseToTyped(1.807522 as Cents)

        expect(computeCentsFromPitch(computeSizeCategoryZone(SizeCategory.SCHISMA).extrema[0]!)).toBeCloseToTyped(1.807522 as Cents)
        expect(computeCentsFromPitch(computeSizeCategoryZone(SizeCategory.SCHISMA).extrema[1]!)).toBeCloseToTyped(4.499913 as Cents)

        expect(computeCentsFromPitch(computeSizeCategoryZone(SizeCategory.KLEISMA).extrema[0]!)).toBeCloseToTyped(4.499913 as Cents)
        expect(computeCentsFromPitch(computeSizeCategoryZone(SizeCategory.KLEISMA).extrema[1]!)).toBeCloseToTyped(11.730005 as Cents)

        expect(computeCentsFromPitch(computeSizeCategoryZone(SizeCategory.COMMA).extrema[0]!)).toBeCloseToTyped(11.730005 as Cents)
        expect(computeCentsFromPitch(computeSizeCategoryZone(SizeCategory.COMMA).extrema[1]!)).toBeCloseToTyped(33.382492 as Cents)

        expect(computeCentsFromPitch(computeSizeCategoryZone(SizeCategory.SMALL_DIESIS).extrema[0]!)).toBeCloseToTyped(33.382492 as Cents)
        expect(computeCentsFromPitch(computeSizeCategoryZone(SizeCategory.SMALL_DIESIS).extrema[1]!)).toBeCloseToTyped(45.112497 as Cents)

        expect(computeCentsFromPitch(computeSizeCategoryZone(SizeCategory.MEDIUM_DIESIS).extrema[0]!)).toBeCloseToTyped(45.112497 as Cents)
        expect(computeCentsFromPitch(computeSizeCategoryZone(SizeCategory.MEDIUM_DIESIS).extrema[1]!)).toBeCloseToTyped(56.842503 as Cents)

        expect(computeCentsFromPitch(computeSizeCategoryZone(SizeCategory.LARGE_DIESIS).extrema[0]!)).toBeCloseToTyped(56.842503 as Cents)
        expect(computeCentsFromPitch(computeSizeCategoryZone(SizeCategory.LARGE_DIESIS).extrema[1]!)).toBeCloseToTyped(68.572508 as Cents)
    })
})
