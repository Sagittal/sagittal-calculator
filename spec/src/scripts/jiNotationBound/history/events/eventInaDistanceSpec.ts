import { Cents, Multiplier } from "../../../../../../src/general"
import { Ina, JiNotationLevel } from "../../../../../../src/sagittal"
import { HIGHINA } from "../../../../../../src/sagittal/notations/ji/intervals"
import { computeEventInaDistance } from "../../../../../../src/scripts/jiNotationBound/history/events/eventInaDistance"
import { eventFixture } from "../../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("computeEventInaDistance", (): void => {
    it("returns the difference in position between the event and the previous event in the history", (): void => {
        const event = { ...eventFixture, cents: 5 as Cents, jiNotationLevel: JiNotationLevel.HIGH }
        const history = [{ ...eventFixture, cents: 3 as Cents }, event]
        const index = 1

        const actual = computeEventInaDistance(event, index, history)

        const expected = 2 / HIGHINA as Multiplier<Ina>
        expect(actual).toBeCloseToTyped(expected)
    })
})
