import { Max, Min } from "../../../../../../src/general/math"
import { Monzo } from "../../../../../../src/general/math/rational/monzo"
import { Cents, Pitch } from "../../../../../../src/general/music"
import { computeMonzoInZone } from "../../../../../../src/sagittal/ji/comma/find/monzoInZone"

describe("computeMonzoInZone", (): void => {
    it("given a 2-free monzo, finds the correct power of 2 for the monzo which is in the search bounds", (): void => {
        const twoFreeMonzo = [0, -6, 3, 5, -1] as Monzo<{ rough: 3 }>
        const lowerBound = { cents: 40.0 as Cents } as Min<Pitch>
        const upperBound = { cents: 40.1 as Cents } as Max<Pitch>

        const actual = computeMonzoInZone(twoFreeMonzo, [lowerBound, upperBound])

        const expected = [-8, -6, 3, 5, -1] as Monzo
        expect(actual).toEqual(expected)
    })

    it("returns undefined if no monzo is within the search bounds", (): void => {
        const twoFreeMonzo = [0, -6, 3, 5, -1] as Monzo<{ rough: 3 }>
        const lowerBound = { cents: 40.1 as Cents } as Min<Pitch>
        const upperBound = { cents: 40.2 as Cents } as Max<Pitch>

        const actual = computeMonzoInZone(twoFreeMonzo, [lowerBound, upperBound])

        expect(actual).toBeUndefined()
    })

    it("works for the empty two-free monzo", (): void => {
        const twoFreeMonzo = [0, 0] as Monzo as Monzo<{ rough: 3 }>
        const lowerBound = { cents: 40.1 as Cents } as Min<Pitch>
        const upperBound = { cents: 40.2 as Cents } as Max<Pitch>

        const actual = computeMonzoInZone(twoFreeMonzo, [lowerBound, upperBound])

        expect(actual).toBeUndefined()
    })

    it("works for the empty two-free monzo when unison is within the search range (it comes in untrimmed, but leaves trimmed)", (): void => {
        const twoFreeMonzo = [0, 0] as Monzo as Monzo<{ rough: 3 }>
        const lowerBound = { cents: -40.1 as Cents } as Min<Pitch>
        const upperBound = { cents: 40.2 as Cents } as Max<Pitch>

        const actual = computeMonzoInZone(twoFreeMonzo, [lowerBound, upperBound])

        const expected = [] as Monzo as Monzo
        expect(actual).toEqual(expected)
    })

    it("works for the empty two-free monzo when unison is on the cusp of the search range", (): void => {
        const twoFreeMonzo = [0, 0] as Monzo as Monzo<{ rough: 3 }>
        const lowerBound = { cents: 0.0 as Cents } as Min<Pitch>
        const upperBound = { cents: 40.2 as Cents } as Max<Pitch>

        const actual = computeMonzoInZone(twoFreeMonzo, [lowerBound, upperBound])

        const expected = [] as Monzo as Monzo
        expect(actual).toEqual(expected)
    })

    it("does not mutate the original monzo", (): void => {
        const twoFreeMonzo = [0, -6, 3, 5, -1] as Monzo<{ rough: 3 }>
        const lowerBound = { cents: 40.0 as Cents } as Min<Pitch>
        const upperBound = { cents: 40.1 as Cents } as Max<Pitch>

        computeMonzoInZone(twoFreeMonzo, [lowerBound, upperBound])

        const expected = [0, -6, 3, 5, -1] as Monzo
        expect(twoFreeMonzo).toEqual(expected)
    })
})
