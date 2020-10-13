import { Cents, computePitchFromCents, Multiplier } from "../../../../../../src/general"
import { Ina, JiNotationLevel } from "../../../../../../src/sagittal"
import { HIGHINA } from "../../../../../../src/sagittal/notations/ji/intervals"
import { computeBoundClassEventInaDistance } from "../../../../../../src/scripts/jiNotationBoundClass/history/events/eventInaDistance"
import { boundClassEventFixture } from "../../../../../helpers/src/scripts/jiNotationBoundClass/fixtures"

describe("computeBoundClassEventInaDistance", (): void => {
    it("returns the difference in position between the bound class event and the previous bound class event in the bound class history                  ", (): void => {
        const boundClassEvent = {
            ...boundClassEventFixture,
            pitch: computePitchFromCents(5 as Cents),
            jiNotationLevel: JiNotationLevel.HIGH,
        }
        const boundClassHistory = [
            {
                ...boundClassEventFixture,
                pitch: computePitchFromCents(3 as Cents),
            },
            boundClassEvent,
        ]
        const index = 1

        const actual = computeBoundClassEventInaDistance(boundClassEvent, index, boundClassHistory)

        const expected = 2 / HIGHINA as Multiplier<Ina>
        expect(actual).toBeCloseToTyped(expected)
    })
})
