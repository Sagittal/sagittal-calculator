import { Cents, computePitchFromCents, Monzo, Name, Pitch, SQRT_SCALER } from "../../../../../src/general"
import { APOTOME } from "../../../../../src/sagittal"
import { Bound, BoundType, JiNotationLevel } from "../../../../../src/sagittal/notations/ji"
import { HIGH_EDA, ULTRA_EDA } from "../../../../../src/sagittal/notations/ji/levelEdas"
import { BoundEvent, BoundHistory } from "../../../../../src/scripts/jiNotationBound/histories"
import { computeExtendedHistories } from "../../../../../src/scripts/jiNotationBound/histories/extendedHistories"
import { jiNotationBoundFixture } from "../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("computeExtendedHistories", (): void => {
    let boundHistory: BoundHistory

    let passedInBoundEvent: BoundEvent = {
        jiNotationLevel: JiNotationLevel.HIGH,
        boundType: BoundType.INA_MIDPOINT,
        name: "16.5°47" as Name<Bound>,
        pitch: { monzo: APOTOME.monzo, scaler: [16.5, HIGH_EDA] } as Pitch<{ rational: false }>,

    }
    beforeEach((): void => {
        boundHistory = [
            passedInBoundEvent,
        ]
    })

    it("returns an array with potentially many elements: for each bound position of any bound type, a new bound history which is like the passed-in history extended with a new event of snapping to that position, and its rank updated if necessary", (): void => {
        const actualJiNotationBoundDecimal = 45.4 as Cents

        const actual = computeExtendedHistories(boundHistory, JiNotationLevel.ULTRA, {
            ...jiNotationBoundFixture,
            pitch: computePitchFromCents(actualJiNotationBoundDecimal),
            jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME],
        })

        const expected: BoundHistory[] = [
            [
                passedInBoundEvent,
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "23.5°58" as Name<Bound>,
                    pitch: { monzo: APOTOME.monzo, scaler: [23.5, ULTRA_EDA] } as Pitch<{ rational: false }>,
                },
            ],
            [
                passedInBoundEvent,
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "'//| )//|" as Name<Bound>,
                    pitch: {
                        monzo: [4, -3, -1, 0, 0, 2, 0, -1] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                passedInBoundEvent,
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "S|M" as Name<Bound>,
                    pitch: {
                        monzo: [8, -5] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
            ],
        ]
        expect(actual).toEqual(expected)
    })
})
