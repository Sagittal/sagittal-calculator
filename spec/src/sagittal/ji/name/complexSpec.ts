import {BLANK, Comma} from "../../../../../src/general"
import {SizeCategory} from "../../../../../src/sagittal/ji/name"
import {computeMaybeComplex} from "../../../../../src/sagittal/ji/name/complex"
import {onlyRunInCi} from "../../../../helpers/onlyRunInCi"

describe("computeMaybeComplex", (): void => {
    it("returns blank for a comma which is the simplest comma with its (undirected) quotient and size category           ", (): void => {
        const comma = {monzo: [-4, 4, -1]} as Comma
        const sizeCategory = SizeCategory.COMMA
        const abbreviated = false

        const actual = computeMaybeComplex(comma, {sizeCategory, abbreviated})

        expect(actual).toBe(BLANK)
    })

    it("works for a comma that is more complex than another with its same (undirected) quotient and size category          ", (): void => {
        const comma = {monzo: [-34, 20, 1]} as Comma
        const sizeCategory = SizeCategory.COMMA
        const abbreviated = false

        const actual = computeMaybeComplex(comma, {sizeCategory, abbreviated})

        expect(actual).toBe("complex-")
    })

    it("works for a supercomplex comma", (): void => {
        const comma = {monzo: [50, -33, 1]} as Comma
        const sizeCategory = SizeCategory.COMMA
        const abbreviated = true

        const actual = computeMaybeComplex(comma, {sizeCategory, abbreviated})

        expect(actual).toBe("sc")
    })

    it("works for a hypercomplex comma", (): void => {
        const comma = {monzo: [80, -49, -1]} as Comma
        const sizeCategory = SizeCategory.COMMA
        const abbreviated = true

        const actual = computeMaybeComplex(comma, {sizeCategory, abbreviated})

        expect(actual).toBe("hc")
    })

    it("works for an ultracomplex comma", (): void => {
        const comma = {monzo: [-88, 57, -1]} as Comma
        const sizeCategory = SizeCategory.COMMA
        const abbreviated = true

        const actual = computeMaybeComplex(comma, {sizeCategory, abbreviated})

        expect(actual).toBe("uc")
    })

    it("works for a 5-complex comma", (): void => {
        const comma = {monzo: [-118, 73, 1]} as Comma
        const sizeCategory = SizeCategory.COMMA
        const abbreviated = true

        const actual = computeMaybeComplex(comma, {sizeCategory, abbreviated})

        expect(actual).toBe("5c")
    })

    it("works for a 6-complex comma", (): void => {
        onlyRunInCi()

        const comma = {monzo: [134, -86, 1]} as Comma
        const sizeCategory = SizeCategory.COMMA
        const abbreviated = true

        const actual = computeMaybeComplex(comma, {sizeCategory, abbreviated})

        expect(actual).toBe("6c")
    })

    it("returns blank for a comma which is the simplest 3-limit comma in its size category", (): void => {
        const comma = {monzo: [-84, 53]} as Comma
        const sizeCategory = SizeCategory.SCHISMA
        const abbreviated = false

        const actual = computeMaybeComplex(comma, {sizeCategory, abbreviated})

        expect(actual).toBe(BLANK)
    })

    it("works for a comma that is more complex than another 3-limit comma in its size category, prefixing it with the EDO which tempers it out (which is equal to the 3-exponent)", (): void => {
        onlyRunInCi()

        const comma = {monzo: [-569, 359]} as Comma
        const sizeCategory = SizeCategory.SCHISMA
        const abbreviated = false

        const actual = computeMaybeComplex(comma, {sizeCategory, abbreviated})

        expect(actual).toBe("359-EDO-")
    })

    it("can abbreviate the complexity for 3-limit commas", (): void => {
        onlyRunInCi()

        const comma = {monzo: [970, -612]} as Comma
        const sizeCategory = SizeCategory.SCHISMA
        const abbreviated = true

        const actual = computeMaybeComplex(comma, {sizeCategory, abbreviated})

        expect(actual).toBe("612e")
    })
})
