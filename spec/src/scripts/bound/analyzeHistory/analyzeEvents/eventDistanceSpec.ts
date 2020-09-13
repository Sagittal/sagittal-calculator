import { Cents } from "../../../../../../src/general/music"
import { computeEventDistance } from "../../../../../../src/scripts/bound/analyzeHistory/analyzeEvents/eventDistance"
import { HistoricalEvent } from "../../../../../../src/scripts/bound/histories"
import { eventFixture } from "../../../../../helpers/src/scripts/bound/fixtures"

describe("computeEventDistance", (): void => {
    it("returns the difference in position between the event and the previous event in the history", (): void => {
        const event: HistoricalEvent = { ...eventFixture, cents: 5 as Cents }
        const history = [{ ...eventFixture, cents: 3 as Cents }, event]
        const index = 1

        const actual = computeEventDistance(event, index, history)

        const expected = 2 as Cents
        expect(actual).toBe(expected)
    })
})
