import {Monzo} from "../../../../../src/general/math/numeric/monzo"
import {Comma} from "../../../../../src/general/music/ji"
import {computeCommaFromCommaNameQuotientAndSizeCategoryName} from "../../../../../src/sagittal"
import {CommaNameQuotient, SizeCategoryName} from "../../../../../src/sagittal/ji/name/types"

describe("computeCommaFromCommaNameQuotientAndSizeCategoryName", (): void => {
    it("gives you the monzo for the comma with the given name", (): void => {
        const commaNameQuotient: CommaNameQuotient = [1, 91] as CommaNameQuotient
        const sizeCategoryName: SizeCategoryName = SizeCategoryName.SCHISMA

        const actual = computeCommaFromCommaNameQuotientAndSizeCategoryName({commaNameQuotient, sizeCategoryName})

        const expected = {monzo: [-3, 6, 0, -1, 0, -1]} as Comma
        expect(actual).toEqual(expected)
    })

    it("an edge case with large N2D3P9", (): void => {
        const commaNameQuotient: CommaNameQuotient = [77, 185] as CommaNameQuotient
        const sizeCategoryName: SizeCategoryName = SizeCategoryName.SCHISMINA

        const actual = computeCommaFromCommaNameQuotientAndSizeCategoryName({commaNameQuotient, sizeCategoryName})

        const expected = {monzo: [-13, 9, -1, 1, 1, 0, 0, 0, 0, 0, 0, -1] as Monzo<{rational: true}>} as Comma
        expect(actual).toEqual(expected)
    })

    it("can handle something as simple as the syntonic comma", (): void => {
        const commaNameQuotient: CommaNameQuotient = [1, 5] as CommaNameQuotient
        const sizeCategoryName: SizeCategoryName = SizeCategoryName.COMMA

        const actual = computeCommaFromCommaNameQuotientAndSizeCategoryName({commaNameQuotient, sizeCategoryName})

        const expected = {monzo: [-4, 4, -1] as Monzo<{rational: true}>} as Comma
        expect(actual).toEqual(expected)
    })

    it("and also this one", (): void => {
        const commaNameQuotient: CommaNameQuotient = [17, 1] as CommaNameQuotient
        const sizeCategoryName: SizeCategoryName = SizeCategoryName.COMMA

        const actual = computeCommaFromCommaNameQuotientAndSizeCategoryName({commaNameQuotient, sizeCategoryName})

        const expected = {monzo: [-12, 5, 0, 0, 0, 0, 1] as Monzo<{rational: true}>} as Comma
        expect(actual).toEqual(expected)
    })
})
