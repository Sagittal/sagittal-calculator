import { Cents, Multiplier } from "../../../../../../src/general"
import { Ina, JiNotationLevel } from "../../../../../../src/sagittal"
import { HIGHINA } from "../../../../../../src/sagittal/notations/ji/intervals"
import { computeBoundEventInaDistance } from "../../../../../../src/scripts/jiNotationBound/history/events/eventInaDistance"
import { boundEventFixture } from "../../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("computeBoundEventInaDistance", (): void => {
    it("returns the difference in position between the bound event and the previous bound event in the bound history                  ", (): void => {
        const boundEvent = { ...boundEventFixture, cents: 5 as Cents, jiNotationLevel: JiNotationLevel.HIGH }
        const boundHistory = [{ ...boundEventFixture, cents: 3 as Cents }, boundEvent]
        const index = 1

        const actual = computeBoundEventInaDistance(boundEvent, index, boundHistory)

        const expected = 2 / HIGHINA as Multiplier<Ina>
        expect(actual).toBeCloseToTyped(expected)
    })
})
