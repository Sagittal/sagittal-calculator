import { Abs } from "../../../../../../src/general/math"
import { Cents, computePitchFromCents } from "../../../../../../src/general/music"
import { BoundClassEvent } from "../../../../../../src/scripts/jiNotationBoundClass/histories"
import { computeBoundClassEventDistance } from "../../../../../../src/scripts/jiNotationBoundClass/history/events/eventDistance"
import { boundClassEventFixture } from "../../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("computeBoundClassEventDistance", (): void => {
    it("returns the difference in position between the bound class event and the previous bound class event in the bound class history          ", (): void => {
        const boundClassEvent: BoundClassEvent = { ...boundClassEventFixture, pitch: computePitchFromCents(5 as Cents) }
        const boundClassHistory = [
            { ...boundClassEventFixture, pitch: computePitchFromCents(3 as Cents) },
            boundClassEvent,
        ]
        const index = 1

        const actual = computeBoundClassEventDistance(boundClassEvent, index, boundClassHistory)

        const expected = 2 as Abs<Cents>
        expect(actual).toBeCloseTo(expected)
    })
})
