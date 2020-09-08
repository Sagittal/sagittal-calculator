import { computeMonzoInZone, Integer, Max, Min, Monzo } from "../../../../src/general"
import { Cents } from "../../../../src/general/music"

describe("computeMonzoInZone", () => {
    it("given a 3-monzo (3-sliced monzo), finds the (2-)monzo which is within the cents range", () => {
        const threeSlicedMonzo = [-6, 3, 5, -1] as Monzo<Integer, 3>
        const minCents = 40.0 as Min<Cents>
        const maxCents = 40.1 as Max<Cents>

        const actual = computeMonzoInZone(threeSlicedMonzo, [minCents, maxCents])

        const expected = [-8, -6, 3, 5, -1] as Monzo
        expect(actual).toEqual(expected)
    })

    it("returns undefined if no (2-)monzo is within the cents range", () => {
        const threeSlicedMonzo = [-6, 3, 5, -1] as Monzo<Integer, 3>
        const minCents = 40.1 as Min<Cents>
        const maxCents = 40.2 as Max<Cents>

        const actual = computeMonzoInZone(threeSlicedMonzo, [minCents, maxCents])

        expect(actual).toBeUndefined()
    })
})
