import {computeEventInaDistance} from "../../../../src/scripts/analyzeBounds/eventInaDistance"
import {HIGHINA} from "../../../../src/notations/ji/intervals"
import {ACCURACY_THRESHOLD} from "../../../../src/utilities/constants"

describe("computeEventInaDistance", () => {
    it("returns the difference in position between the event and the previous event in the history", () => {
        const event = {position: 5, level: "HIGH"}
        const history = [{position: 3}, event]
        const index = 1

        const result = computeEventInaDistance(event, index, history)

        expect(result).toBeCloseTo(2 / HIGHINA, ACCURACY_THRESHOLD)
    })
})
