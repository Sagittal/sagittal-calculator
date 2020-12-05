import {BLANK, Comma, Quotient} from "../../../../../src/general"
import {CommaClassId, getCommaClass} from "../../../../../src/sagittal"
import {SizeCategory} from "../../../../../src/sagittal/ji/name"
import {computeMaybeComplex} from "../../../../../src/sagittal/ji/name/complex"

describe("computeMaybeComplex", (): void => {
    it("returns blank for a comma which is the simplest comma with its (undirected) quotient and size category           ", (): void => {
        const comma = getCommaClass(CommaClassId._1_V_5_C).pitch
        const two3FreeQuotient = [1, 5] as Quotient<{rational: true, rough: 5}>
        const sizeCategory = SizeCategory.COMMA
        const abbreviated = false

        const actual = computeMaybeComplex(comma, {two3FreeQuotient, sizeCategory, abbreviated})

        expect(actual).toBe(BLANK)
    })

    it("works for a comma that is more complex than another with its same (undirected) quotient and size category          ", (): void => {
        const comma = {monzo: [-34, 20, 1]} as Comma
        const two3FreeQuotient = [5, 1] as Quotient<{rational: true, rough: 5}>
        const sizeCategory = SizeCategory.COMMA
        const abbreviated = false

        const actual = computeMaybeComplex(comma, {two3FreeQuotient, sizeCategory, abbreviated})

        expect(actual).toBe("complex-")
    })
})
