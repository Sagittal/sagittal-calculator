import {
    computeScamonFromDecimal,
    Decimal,
    EMPTY_MONZO,
    Max,
    Min,
    Monzo,
    Scamon,
} from "../../../../../src/general/math"
import {computeRationalMonzoInZone} from "../../../../../src/sagittal/ji/find/monzoInZone"

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

    it("works for the empty two-free monzo when unison is on the cusp of the search range", (): void => {
        const twoFreeMonzo = [0, 0] as Monzo<{rational: true, rough: 3}>
        const lowerBound = computeScamonFromDecimal(1.000000 as Decimal) as Min<Scamon>
        const upperBound = computeScamonFromDecimal(1.023433 as Decimal) as Max<Scamon>

        const actual = computeRationalMonzoInZone(twoFreeMonzo, [lowerBound, upperBound])

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
})
