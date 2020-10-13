import { Cents, computePitchFromCents, HALF_SCALER, Monzo, Name, Scamon } from "../../../../../src/general"
import { APOTOME } from "../../../../../src/sagittal"
import { BoundClass, BoundType, JiNotationLevel } from "../../../../../src/sagittal/notations/ji"
import { HIGH_EDA, ULTRA_EDA } from "../../../../../src/sagittal/notations/ji/levelEdas"
import { BoundClassEvent, BoundClassHistory } from "../../../../../src/scripts/jiNotationBoundClass/histories"
import { computeExtendedHistories } from "../../../../../src/scripts/jiNotationBoundClass/histories/extendedHistories"
import { jiNotationBoundClassFixture } from "../../../../helpers/src/scripts/jiNotationBoundClass/fixtures"

describe("computeExtendedHistories", (): void => {
    let boundClassHistory: BoundClassHistory

    const passedInBoundClassEvent: BoundClassEvent = {
        jiNotationLevel: JiNotationLevel.HIGH,
        boundType: BoundType.INA_MIDPOINT,
        name: "16.5°47" as Name<BoundClass>,
        pitch: { monzo: APOTOME.monzo, scaler: [16.5, HIGH_EDA] } as Scamon<{ rational: false }>,
    }
    
    beforeEach((): void => {
        boundClassHistory = [
            passedInBoundClassEvent,
        ]
    })

    it("returns an array with potentially many elements: for each bound position of any bound type, a new bound class history which is like the passed-in history extended with a new event of snapping to that position, and its rank updated if necessary", (): void => {
        const actualJiNotationBoundDecimal = 45.4 as Cents

        const actual = computeExtendedHistories(boundClassHistory, JiNotationLevel.ULTRA, {
            ...jiNotationBoundClassFixture,
            pitch: computePitchFromCents(actualJiNotationBoundDecimal),
            jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME],
        })

        const expected: BoundClassHistory[] = [
            [
                passedInBoundClassEvent,
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "23.5°58" as Name<BoundClass>,
                    pitch: { monzo: APOTOME.monzo, scaler: [23.5, ULTRA_EDA] } as Scamon<{ rational: false }>,
                },
            ],
            [
                passedInBoundClassEvent,
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "'//| )//|" as Name<BoundClass>,
                    pitch: {
                        monzo: [4, -3, -1, 0, 0, 2, 0, -1] as Monzo<{ rational: true }>,
                        scaler: HALF_SCALER,
                    } as Scamon<{ rational: false }>,
                },
            ],
            [
                passedInBoundClassEvent,
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "S|M" as Name<BoundClass>,
                    pitch: {
                        monzo: [8, -5] as Monzo<{ rational: true }>,
                        scaler: HALF_SCALER,
                    } as Scamon<{ rational: false }>,
                },
            ],
        ]
        expect(actual).toEqual(expected)
    })
})
