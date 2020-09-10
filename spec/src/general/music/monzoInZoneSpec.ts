import { computeMonzoInZone, Max, Min, Monzo } from "../../../../src/general"
import { Cents } from "../../../../src/general/music"

describe("computeMonzoInZone", () => {
    it("given a 2-free monzo, finds the right power of 2 for the monzo which is within the cents range", () => {
        const threeSlicedMonzo = [0, -6, 3, 5, -1] as Monzo<{ rough: 3 }>
        const minCents = 40.0 as Min<Cents>
        const maxCents = 40.1 as Max<Cents>

        const actual = computeMonzoInZone(threeSlicedMonzo, [minCents, maxCents])

        const expected = [-8, -6, 3, 5, -1] as Monzo
        expect(actual).toEqual(expected)
    })

    it("returns undefined if no monzo is within the cents range", () => {
        const threeSlicedMonzo = [0, -6, 3, 5, -1] as Monzo<{ rough: 3 }>
        const minCents = 40.1 as Min<Cents>
        const maxCents = 40.2 as Max<Cents>

        const actual = computeMonzoInZone(threeSlicedMonzo, [minCents, maxCents])

        expect(actual).toBeUndefined()
    })

    it("works for the empty two-free monzo", () => {
        const threeSlicedMonzo = [] as Monzo as Monzo<{ rough: 3 }>
        const minCents = 40.1 as Min<Cents>
        const maxCents = 40.2 as Max<Cents>

        const actual = computeMonzoInZone(threeSlicedMonzo, [minCents, maxCents])

        expect(actual).toBeUndefined()
    })

    it("works for the empty two-free monzo when unison is within the search range", () => {
        const threeSlicedMonzo = [] as Monzo as Monzo<{ rough: 3 }>
        const minCents = -40.1 as Min<Cents>
        const maxCents = 40.2 as Max<Cents>

        const actual = computeMonzoInZone(threeSlicedMonzo, [minCents, maxCents])

        const expected = [] as Monzo
        expect(actual).toEqual(expected)
    })
})
