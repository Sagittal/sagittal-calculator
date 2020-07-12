import { computeEventDistance } from "../../../../src/scripts/analyzeBounds/eventDistance"
import { HistoricalEvent } from "../../../../src/scripts/analyzeBounds/types"
import { Cents } from "../../../../src/utilities/types"
import { eventFixture } from "../../../helpers/scripts/analyzeBounds/fixtures"

describe("computeEventDistance", () => {
    it("returns the difference in position between the event and the previous event in the history", () => {
        const event: HistoricalEvent = { ...eventFixture, position: 5 as Cents }
        const history = [{ ...eventFixture, position: 3 as Cents }, event]
        const index = 1

        const result = computeEventDistance(event, index, history)

        expect(result).toBe(2 as Cents)
    })
})
