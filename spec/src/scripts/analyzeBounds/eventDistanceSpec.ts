import {computeEventDistance} from "../../../../src/scripts/analyzeBounds/eventDistance"

describe("computeEventDistance", () => {
    it("returns the difference in position between the event and the previous event in the history", () => {
        const event = {position: 5}
        const history = [{position: 3}, event]
        const index = 1

        const result = computeEventDistance(event, index, history)

        expect(result).toBe(2)
    })
})
