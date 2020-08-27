import { computeMonzoInZone, Max, Min, Monzo } from "../../../../src/general"
import { Cents } from "../../../../src/general/music"

describe("computeMonzoInZone", () => {
    it("given a 3-monzo, finds the (2-)monzo which is within the cents range", () => {
        const threeRoughMonzo = [-6, 3, 5, -1] as Monzo<3>
        const minCents = 40.0 as Min<Cents>
        const maxCents = 40.1 as Max<Cents>

        const actual = computeMonzoInZone(threeRoughMonzo, [minCents, maxCents])

        const expected = [-8, -6, 3, 5, -1] as Monzo
        expect(actual).toEqual(expected)
    })

    it("returns undefined if no (2-)monzo is within the cents range", () => {
        const threeRoughMonzo = [-6, 3, 5, -1] as Monzo<3>
        const minCents = 40.1 as Min<Cents>
        const maxCents = 40.2 as Max<Cents>

        const actual = computeMonzoInZone(threeRoughMonzo, [minCents, maxCents])

        expect(actual).toBeUndefined()
    })

    it("throws an error if the cents range is greater than an octave (therefore more than one two monzo could be in range)", () => {
        const threeRoughMonzo = [-6, 3, 5, -1] as Monzo<3>
        const minCents = 40.0 as Min<Cents>
        const maxCents = 1240.1 as Max<Cents>

        expect(() => computeMonzoInZone(threeRoughMonzo, [minCents, maxCents])).toThrowError("Cents range must be less than 1200.")
    })
})
