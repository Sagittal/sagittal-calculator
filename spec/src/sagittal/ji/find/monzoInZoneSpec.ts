import {computeScamonFromDecimal, Decimal, EMPTY_MONZO, Max, Min, Monzo, Scamon} from "../../../../../src/general"
import {computeRationalMonzoInZone} from "../../../../../src/sagittal/ji/find"
import {n_s_SIZE_CATEGORY_BOUND, u_n_SIZE_CATEGORY_BOUND} from "../../../../../src/sagittal/ji/name/sizeCategoryBounds"
import {onlyRunInCi} from "../../../../helpers/onlyRunInCi"

describe("computeRationalMonzoInZone", (): void => {
    it("given a 2-free monzo, finds the correct power of 2 for the monzo which is in the search bounds", (): void => {
        const twoFreeMonzo = [0, -6, 3, 5, -1] as Monzo<{rational: true, rough: 3}>
        const lowerBound = computeScamonFromDecimal(1.023374 as Decimal) as Min<Scamon>
        const upperBound = computeScamonFromDecimal(1.023433 as Decimal) as Max<Scamon>

        const actual = computeRationalMonzoInZone(twoFreeMonzo, [lowerBound, upperBound])

        const expected = [-8, -6, 3, 5, -1] as Monzo<{rational: true}>
        expect(actual).toEqual(expected)
    })

    it("returns undefined if no monzo is within the search bounds", (): void => {
        const twoFreeMonzo = [0, -6, 3, 5, -1] as Monzo<{rational: true, rough: 3}>
        const lowerBound = computeScamonFromDecimal(1.023433 as Decimal) as Min<Scamon>
        const upperBound = computeScamonFromDecimal(1.023492 as Decimal) as Max<Scamon>

        const actual = computeRationalMonzoInZone(twoFreeMonzo, [lowerBound, upperBound])

        expect(actual).toBeUndefined()
    })

    it("works for the empty two-free monzo", (): void => {
        const twoFreeMonzo = [0, 0] as Monzo<{rational: true, rough: 3}>
        const lowerBound = computeScamonFromDecimal(1.023433 as Decimal) as Min<Scamon>
        const upperBound = computeScamonFromDecimal(1.023492 as Decimal) as Max<Scamon>

        const actual = computeRationalMonzoInZone(twoFreeMonzo, [lowerBound, upperBound])

        expect(actual).toBeUndefined()
    })

    it("works for the empty two-free monzo when unison is within the search range (it comes in untrimmed, but leaves trimmed)", (): void => {
        const twoFreeMonzo = [0, 0] as Monzo<{rational: true, rough: 3}>
        const lowerBound = computeScamonFromDecimal(0.977104 as Decimal) as Min<Scamon>
        const upperBound = computeScamonFromDecimal(1.023492 as Decimal) as Max<Scamon>

        const actual = computeRationalMonzoInZone(twoFreeMonzo, [lowerBound, upperBound])

        const expected = EMPTY_MONZO as Monzo<{rational: true}>
        expect(actual).toEqual(expected)
    })

    it("works for the empty two-free monzo when unison is on the cusp of the search range, if inclusive is specified             ", (): void => {
        const twoFreeMonzo = [0, 0] as Monzo<{rational: true, rough: 3}>
        const lowerBound = computeScamonFromDecimal(1.000000 as Decimal) as Min<Scamon>
        const upperBound = computeScamonFromDecimal(1.023433 as Decimal) as Max<Scamon>

        const actual = computeRationalMonzoInZone(twoFreeMonzo, [lowerBound, upperBound], true)

        const expected = EMPTY_MONZO as Monzo<{rational: true}>
        expect(actual).toEqual(expected)
    })

    it("does not mutate the original monzo", (): void => {
        const twoFreeMonzo = [0, -6, 3, 5, -1] as Monzo<{rational: true, rough: 3}>
        const lowerBound = computeScamonFromDecimal(1.023374 as Decimal) as Min<Scamon>
        const upperBound = computeScamonFromDecimal(1.023433 as Decimal) as Max<Scamon>

        computeRationalMonzoInZone(twoFreeMonzo, [lowerBound, upperBound])

        const expected = [0, -6, 3, 5, -1] as Monzo<{rational: true}>
        expect(twoFreeMonzo).toEqual(expected)
    })

    it("excludes the unison from the smallest size category besides unison (schismina)", (): void => {
        const twoFreeMonzo = [0, -306] as Monzo<{rational: true, rough: 3}>
        const lowerBound = u_n_SIZE_CATEGORY_BOUND.pitch as Scamon as Min<Scamon>
        const upperBound = n_s_SIZE_CATEGORY_BOUND.pitch as Scamon as Max<Scamon>

        const actual = computeRationalMonzoInZone(twoFreeMonzo, [lowerBound, upperBound])

        const expected = [485, -306] as Monzo<{rational: true}>
        expect(actual).toEqual(expected)
    })

    it("excludes the unison from the smallest size category besides unison (schismina), even when the 3-exponent is zero", (): void => {
        const twoFreeMonzo = [0, 0] as Monzo<{rational: true, rough: 3}>
        const lowerBound = u_n_SIZE_CATEGORY_BOUND.pitch as Scamon as Min<Scamon>
        const upperBound = n_s_SIZE_CATEGORY_BOUND.pitch as Scamon as Max<Scamon>

        const actual = computeRationalMonzoInZone(twoFreeMonzo, [lowerBound, upperBound])

        expect(actual).toBeUndefined()
    })

    it("excludes the unison from the smallest size category besides unison (schismina), even when the 3-exponent is zero, unless inclusive is specified", (): void => {
        const twoFreeMonzo = [0, 0] as Monzo<{rational: true, rough: 3}>
        const lowerBound = u_n_SIZE_CATEGORY_BOUND.pitch as Scamon as Min<Scamon>
        const upperBound = n_s_SIZE_CATEGORY_BOUND.pitch as Scamon as Max<Scamon>
        const inclusive = true

        const actual = computeRationalMonzoInZone(twoFreeMonzo, [lowerBound, upperBound], inclusive)

        const expected = [] as unknown[] as Monzo<{rational: true}>
        expect(actual).toEqual(expected)
    })

    it("works for a huge 3-limit monzo", (): void => {
        onlyRunInCi()

        const twoFreeMonzo = [0, 31867] as Monzo<{rational: true, rough: 3}>
        const lowerBound = u_n_SIZE_CATEGORY_BOUND.pitch as Scamon as Min<Scamon>
        const upperBound = n_s_SIZE_CATEGORY_BOUND.pitch as Scamon as Max<Scamon>

        const actual = computeRationalMonzoInZone(twoFreeMonzo, [lowerBound, upperBound])

        const expected = [-50508, 31867] as Monzo<{rational: true}>
        expect(actual).toEqual(expected)
    })
})
