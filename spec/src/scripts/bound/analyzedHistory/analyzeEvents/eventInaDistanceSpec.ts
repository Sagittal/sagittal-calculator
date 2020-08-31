import { ACCURACY_THRESHOLD, Cents, Multiplier } from "../../../../../../src/general"
import { Ina, Level } from "../../../../../../src/sagittal"
import { HIGHINA } from "../../../../../../src/sagittal/notations/ji/intervals"
import { computeEventInaDistance } from "../../../../../../src/scripts/bound/analyzedHistory/analyzeEvents/eventInaDistance"
import { eventFixture } from "../../../../../helpers/src/scripts/bound/fixtures"

describe("computeEventInaDistance", () => {
    it("returns the difference in position between the event and the previous event in the history", () => {
        const event = { ...eventFixture, cents: 5 as Cents, level: Level.HIGH }
        const history = [{ ...eventFixture, cents: 3 as Cents }, event]
        const index = 1

        const actual = computeEventInaDistance(event, index, history)

        const expected = 2 / HIGHINA as Multiplier<Ina>
        expect(actual).toBeCloseToTyped(expected, ACCURACY_THRESHOLD)
    })
})
