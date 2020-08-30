import { Cents } from "../../../../../../src/general/music"
import { computeEventDistance } from "../../../../../../src/scripts/analyzeBounds/analyzedHistory/analyzeEvents/eventDistance"
import { HistoricalEvent } from "../../../../../../src/scripts/analyzeBounds/histories"
import { eventFixture } from "../../../../../helpers/src/scripts/analyzeBounds/fixtures"

describe("computeEventDistance", () => {
    it("returns the difference in position between the event and the previous event in the history", () => {
        const event: HistoricalEvent = { ...eventFixture, cents: 5 as Cents }
        const history = [{ ...eventFixture, cents: 3 as Cents }, event]
        const index = 1

        const actual = computeEventDistance(event, index, history)

        const expected = 2 as Cents
        expect(actual).toBe(expected)
    })
})
