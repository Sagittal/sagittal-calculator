import { Decimal, Max, Min, Num, RationalMonzo } from "../../../../../../src/general/math"
import { computeRationalMonzoInZone } from "../../../../../../src/sagittal/ji/comma/find/monzoInZone"

describe("computeRationalMonzoInZone", (): void => {
    it("given a 2-free monzo, finds the correct power of 2 for the monzo which is in the search bounds", (): void => {
        const twoFreeMonzo = [0, -6, 3, 5, -1] as RationalMonzo<{ rough: 3 }>
        const lowerBound = { decimal: 1.023374 as Decimal } as Min<Num>
        const upperBound = { decimal: 1.023433 as Decimal } as Max<Num>

        const actual = computeRationalMonzoInZone(twoFreeMonzo, [lowerBound, upperBound])

        const expected = [-8, -6, 3, 5, -1] as RationalMonzo
        expect(actual).toEqual(expected)
    })

    it("returns undefined if no monzo is within the search bounds", (): void => {
        const twoFreeMonzo = [0, -6, 3, 5, -1] as RationalMonzo<{ rough: 3 }>
        const lowerBound = { decimal: 1.023433 as Decimal } as Min<Num>
        const upperBound = { decimal: 1.023492 as Decimal } as Max<Num>

        const actual = computeRationalMonzoInZone(twoFreeMonzo, [lowerBound, upperBound])

        expect(actual).toBeUndefined()
    })

    it("works for the empty two-free monzo", (): void => {
        const twoFreeMonzo = [0, 0] as RationalMonzo as RationalMonzo<{ rough: 3 }>
        const lowerBound = { decimal: 1.023433 as Decimal } as Min<Num>
        const upperBound = { decimal: 1.023492 as Decimal } as Max<Num>

        const actual = computeRationalMonzoInZone(twoFreeMonzo, [lowerBound, upperBound])

        expect(actual).toBeUndefined()
    })

    it("works for the empty two-free monzo when unison is within the search range (it comes in untrimmed, but leaves trimmed)", (): void => {
        const twoFreeMonzo = [0, 0] as RationalMonzo as RationalMonzo<{ rough: 3 }>
        const lowerBound = { decimal: 0.977104 as Decimal } as Min<Num>
        const upperBound = { decimal: 1.023492 as Decimal } as Max<Num>

        const actual = computeRationalMonzoInZone(twoFreeMonzo, [lowerBound, upperBound])

        const expected = [] as unknown[] as RationalMonzo as RationalMonzo
        expect(actual).toEqual(expected)
    })

    it("works for the empty two-free monzo when unison is on the cusp of the search range", (): void => {
        const twoFreeMonzo = [0, 0] as RationalMonzo as RationalMonzo<{ rough: 3 }>
        const lowerBound = { decimal: 1.000000 as Decimal } as Min<Num>
        const upperBound = { decimal: 1.023433 as Decimal } as Max<Num>

        const actual = computeRationalMonzoInZone(twoFreeMonzo, [lowerBound, upperBound])

        const expected = [] as unknown[] as RationalMonzo as RationalMonzo
        expect(actual).toEqual(expected)
    })

    it("does not mutate the original monzo", (): void => {
        const twoFreeMonzo = [0, -6, 3, 5, -1] as RationalMonzo<{ rough: 3 }>
        const lowerBound = { decimal: 1.023374 as Decimal } as Min<Num>
        const upperBound = { decimal: 1.023433 as Decimal } as Max<Num>

        computeRationalMonzoInZone(twoFreeMonzo, [lowerBound, upperBound])

        const expected = [0, -6, 3, 5, -1] as RationalMonzo
        expect(twoFreeMonzo).toEqual(expected)
    })
})
