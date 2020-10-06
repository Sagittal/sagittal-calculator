import { Abs } from "../../../../../../src/general/math"
import { Cents } from "../../../../../../src/general/music"
import { BoundEvent } from "../../../../../../src/scripts/jiNotationBound/histories"
import { computeBoundEventDistance } from "../../../../../../src/scripts/jiNotationBound/history/events/eventDistance"
import { boundEventFixture } from "../../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("computeBoundEventDistance", (): void => {
    it("returns the difference in position between the bound event and the previous bound event in the bound history          ", (): void => {
        const boundEvent: BoundEvent = { ...boundEventFixture, cents: 5 as Cents }
        const boundHistory = [{ ...boundEventFixture, cents: 3 as Cents }, boundEvent]
        const index = 1

        const actual = computeBoundEventDistance(boundEvent, index, boundHistory)

        const expected = 2 as Abs<Cents>
        expect(actual).toBe(expected)
    })
})
