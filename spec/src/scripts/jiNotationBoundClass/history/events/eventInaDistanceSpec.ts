import {Cents, computePitchFromCents, Multiplier} from "@sagittal/general"
import {Ina, JiNotationLevelId} from "../../../../../../src/sagittal"
import {HIGHINA_CENTS} from "../../../../../../src/sagittal/notations/ji/intervals"
import {computeBoundEventInaDistance} from "../../../../../../src/scripts/jiNotationBoundClass/history/events/eventInaDistance"
import {boundEventFixture} from "../../../../../helpers/src/scripts/jiNotationBoundClass/fixtures"

describe("computeBoundEventInaDistance", (): void => {
    it("returns the difference in position between the bound class event and the previous bound class event in the bound class history                  ", (): void => {
        const boundEvent = {
            ...boundEventFixture,
            pitch: computePitchFromCents(5 as Cents),
            jiNotationLevel: JiNotationLevelId.HIGH,
        }
        const boundHistory = [
            {
                ...boundEventFixture,
                pitch: computePitchFromCents(3 as Cents),
            },
            boundEvent,
        ]
        const index = 1

        const actual = computeBoundEventInaDistance(boundEvent, index, boundHistory)

        const expected = 2 / HIGHINA_CENTS as Multiplier<Ina>
        expect(actual).toBeCloseToTyped(expected)
    })
})
