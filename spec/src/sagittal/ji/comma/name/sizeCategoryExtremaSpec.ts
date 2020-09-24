// tslint:disable max-line-length

import { Cents } from "../../../../../../src/general"
import { computeSizeCategoryExtrema } from "../../../../../../src/sagittal/ji/comma/name/sizeCategoryExtrema"
import { SizeCategoryName } from "../../../../../../src/sagittal/ji/comma/name/types"

describe("computeSizeCategoryExtrema", (): void => {
    it("gives the correct extrema for each size category", (): void => {
        expect(computeSizeCategoryExtrema(SizeCategoryName.UNISON)[ 0 ].cents).toBeCloseToTyped(0.000000 as Cents)
        expect(computeSizeCategoryExtrema(SizeCategoryName.UNISON)[ 1 ].cents).toBeCloseToTyped(0.000000 as Cents)

        expect(computeSizeCategoryExtrema(SizeCategoryName.SCHISMINA)[ 0 ].cents).toBeCloseToTyped(0.000000 as Cents)
        expect(computeSizeCategoryExtrema(SizeCategoryName.SCHISMINA)[ 1 ].cents).toBeCloseToTyped(1.807522 as Cents)

        expect(computeSizeCategoryExtrema(SizeCategoryName.SCHISMA)[ 0 ].cents).toBeCloseToTyped(1.807522 as Cents)
        expect(computeSizeCategoryExtrema(SizeCategoryName.SCHISMA)[ 1 ].cents).toBeCloseToTyped(4.499913 as Cents)

        expect(computeSizeCategoryExtrema(SizeCategoryName.KLEISMA)[ 0 ].cents).toBeCloseToTyped(4.499913 as Cents)
        expect(computeSizeCategoryExtrema(SizeCategoryName.KLEISMA)[ 1 ].cents).toBeCloseToTyped(11.730005 as Cents)

        expect(computeSizeCategoryExtrema(SizeCategoryName.COMMA)[ 0 ].cents).toBeCloseToTyped(11.730005 as Cents)
        expect(computeSizeCategoryExtrema(SizeCategoryName.COMMA)[ 1 ].cents).toBeCloseToTyped(33.382492 as Cents)

        expect(computeSizeCategoryExtrema(SizeCategoryName.SMALL_DIESIS)[ 0 ].cents).toBeCloseToTyped(33.382492 as Cents)
        expect(computeSizeCategoryExtrema(SizeCategoryName.SMALL_DIESIS)[ 1 ].cents).toBeCloseToTyped(45.112497 as Cents)

        expect(computeSizeCategoryExtrema(SizeCategoryName.MEDIUM_DIESIS)[ 0 ].cents).toBeCloseToTyped(45.112497 as Cents)
        expect(computeSizeCategoryExtrema(SizeCategoryName.MEDIUM_DIESIS)[ 1 ].cents).toBeCloseToTyped(56.842503 as Cents)

        expect(computeSizeCategoryExtrema(SizeCategoryName.LARGE_DIESIS)[ 0 ].cents).toBeCloseToTyped(56.842503 as Cents)
        expect(computeSizeCategoryExtrema(SizeCategoryName.LARGE_DIESIS)[ 1 ].cents).toBeCloseToTyped(68.572508 as Cents)
    })
})
