import { Max, Min } from "../../../../../../src/general/math"
import { Monzo } from "../../../../../../src/general/math/monzo"
import { Cents } from "../../../../../../src/general/music"
import { computeMonzoInZone } from "../../../../../../src/sagittal/ji/comma/find/monzoInZone"

describe("computeMonzoInZone", (): void => {
    it("given a 2-free monzo, finds the correct power of 2 for the monzo which is within the cents range", (): void => {
        const twoFreeMonzo = [0, -6, 3, 5, -1] as Monzo<{ rough: 3 }>
        const minCents = 40.0 as Min<Cents>
        const maxCents = 40.1 as Max<Cents>

        const actual = computeMonzoInZone(twoFreeMonzo, [minCents, maxCents])

        const expected = [-8, -6, 3, 5, -1] as Monzo
        expect(actual).toEqual(expected)
    })

    it("returns undefined if no monzo is within the cents range", (): void => {
        const twoFreeMonzo = [0, -6, 3, 5, -1] as Monzo<{ rough: 3 }>
        const minCents = 40.1 as Min<Cents>
        const maxCents = 40.2 as Max<Cents>

        const actual = computeMonzoInZone(twoFreeMonzo, [minCents, maxCents])

        expect(actual).toBeUndefined()
    })

    it("works for the empty two-free monzo", (): void => {
        const twoFreeMonzo = [0, 0] as Monzo as Monzo<{ rough: 3 }>
        const minCents = 40.1 as Min<Cents>
        const maxCents = 40.2 as Max<Cents>

        const actual = computeMonzoInZone(twoFreeMonzo, [minCents, maxCents])

        expect(actual).toBeUndefined()
    })

    it("works for the empty two-free monzo when unison is within the search range (it comes in untrimmed, but leaves trimmed)", (): void => {
        const twoFreeMonzo = [0, 0] as Monzo as Monzo<{ rough: 3 }>
        const minCents = -40.1 as Min<Cents>
        const maxCents = 40.2 as Max<Cents>

        const actual = computeMonzoInZone(twoFreeMonzo, [minCents, maxCents])

        const expected = [] as Monzo as Monzo
        expect(actual).toEqual(expected)
    })

    it("works for the empty two-free monzo when unison is on the cusp of the search range", (): void => {
        const twoFreeMonzo = [0, 0] as Monzo as Monzo<{ rough: 3 }>
        const minCents = 0 as Min<Cents>
        const maxCents = 40.2 as Max<Cents>

        const actual = computeMonzoInZone(twoFreeMonzo, [minCents, maxCents])

        const expected = [] as Monzo as Monzo
        expect(actual).toEqual(expected)
    })

    it("does not mutate the original monzo", (): void => {
        const twoFreeMonzo = [0, -6, 3, 5, -1] as Monzo<{ rough: 3 }>
        const minCents = 40.0 as Min<Cents>
        const maxCents = 40.1 as Max<Cents>

        computeMonzoInZone(twoFreeMonzo, [minCents, maxCents])

        const expected = [0, -6, 3, 5, -1] as Monzo
        expect(twoFreeMonzo).toEqual(expected)
    })
})
