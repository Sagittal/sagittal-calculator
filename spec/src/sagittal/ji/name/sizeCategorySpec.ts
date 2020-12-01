// tslint:disable max-line-length

import {Cents, Comma, computePitchFromCents, Scamon} from "../../../../../src/general"
import {computeSizeCategory} from "../../../../../src/sagittal/ji/name/sizeCategory"
import {SizeCategory} from "../../../../../src/sagittal/ji/name/types"

describe("computeSizeCategory", (): void => {
    it("returns the correct size category for the pitch size", (): void => {
        expect(computeSizeCategory(computePitchFromCents(0 as Cents) as Scamon as Comma)).toBe(SizeCategory.UNISON)
        expect(computeSizeCategory(computePitchFromCents(1 as Cents) as Scamon as Comma)).toBe(SizeCategory.SCHISMINA)
        expect(computeSizeCategory(computePitchFromCents(2 as Cents) as Scamon as Comma)).toBe(SizeCategory.SCHISMA)
        expect(computeSizeCategory(computePitchFromCents(10 as Cents) as Scamon as Comma)).toBe(SizeCategory.KLEISMA)
        expect(computeSizeCategory(computePitchFromCents(20 as Cents) as Scamon as Comma)).toBe(SizeCategory.COMMA)
        expect(computeSizeCategory(computePitchFromCents(40 as Cents) as Scamon as Comma)).toBe(SizeCategory.SMALL_DIESIS)
        expect(computeSizeCategory(computePitchFromCents(50 as Cents) as Scamon as Comma)).toBe(SizeCategory.MEDIUM_DIESIS)
        expect(computeSizeCategory(computePitchFromCents(60 as Cents) as Scamon as Comma)).toBe(SizeCategory.LARGE_DIESIS)
        expect(computeSizeCategory(computePitchFromCents(80 as Cents) as Scamon as Comma)).toBe(SizeCategory.SMALL_SEMITONE)
        expect(computeSizeCategory(computePitchFromCents(100 as Cents) as Scamon as Comma)).toBe(SizeCategory.MEDIUM_SEMITONE)
        expect(computeSizeCategory(computePitchFromCents(110 as Cents) as Scamon as Comma)).toBe(SizeCategory.LARGE_SEMITONE)
        expect(computeSizeCategory(computePitchFromCents(115 as Cents) as Scamon as Comma)).toBe(SizeCategory.APOTOME)
        expect(computeSizeCategory(computePitchFromCents(117 as Cents) as Scamon as Comma)).toBe(SizeCategory.SCHISMA_PLUS_APOTOME)
        expect(computeSizeCategory(computePitchFromCents(120 as Cents) as Scamon as Comma)).toBe(SizeCategory.KLEISMA_PLUS_APOTOME)
        expect(computeSizeCategory(computePitchFromCents(135 as Cents) as Scamon as Comma)).toBe(SizeCategory.COMMA_PLUS_APOTOME)
        expect(computeSizeCategory(computePitchFromCents(155 as Cents) as Scamon as Comma)).toBe(SizeCategory.SMALL_DIESIS_PLUS_APOTOME)
        expect(computeSizeCategory(computePitchFromCents(165 as Cents) as Scamon as Comma)).toBe(SizeCategory.MEDIUM_DIESIS_PLUS_APOTOME)
        expect(computeSizeCategory(computePitchFromCents(175 as Cents) as Scamon as Comma)).toBe(SizeCategory.LARGE_DIESIS_PLUS_APOTOME)
        expect(computeSizeCategory(computePitchFromCents(190 as Cents) as Scamon as Comma)).toBe(SizeCategory.SMALL_SEMITONE_PLUS_APOTOME)
        expect(computeSizeCategory(computePitchFromCents(200 as Cents) as Scamon as Comma)).toBe(SizeCategory.MEDIUM_SEMITONE_PLUS_APOTOME)
        expect(computeSizeCategory(computePitchFromCents(220 as Cents) as Scamon as Comma)).toBe(SizeCategory.LARGE_SEMITONE_PLUS_APOTOME)
        expect(computeSizeCategory(computePitchFromCents(227 as Cents) as Scamon as Comma)).toBe(SizeCategory.DOUBLE_APOTOME)
    })

    it("throws an error if the size category of an pitch which is too big is requested", (): void => {
        expect((): void => {
            computeSizeCategory(computePitchFromCents(230 as Cents) as Scamon as Comma)
        }).toThrowError("230.000¢ is beyond the maximum size category's bounds.")
    })
})
