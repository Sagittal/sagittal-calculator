import { computeEventInaDistance } from "../../../../src/scripts/analyzeBounds/eventInaDistance"
import { HIGHINA } from "../../../../src/notations/ji/intervals"
import { ACCURACY_THRESHOLD } from "../../../../src/utilities/constants"
import { Level } from "../../../../src/notations/ji/types"
import { Cents } from "../../../../src/utilities/types"
import { eventFixture } from "../../../helpers/scripts/analyzeBounds/fixtures"

describe("computeEventInaDistance", () => {
    it("returns the difference in position between the event and the previous event in the history", () => {
        const event = { ...eventFixture, position: 5 as Cents, level: Level.HIGH }
        const history = [{ ...eventFixture, position: 3 as Cents }, event]
        const index = 1

        const result = computeEventInaDistance(event, index, history)

        expect(result).toBeCloseTo(2 / HIGHINA, ACCURACY_THRESHOLD)
    })
})
