import { Name, Scamon, SQRT_SCALER } from "../../../../../src/general"
import { APOTOME } from "../../../../../src/sagittal"
import { Bound, BoundType, JiNotationBound, JiNotationLevel } from "../../../../../src/sagittal/notations/ji"
import { EXTREME_EDA, HIGH_EDA, MEDIUM_EDA } from "../../../../../src/sagittal/notations/ji/levelEdas"
import { BoundEvent, BoundHistory } from "../../../../../src/scripts/jiNotationBound/histories"
import { computeExtendedJiNotationLevelBoundHistories } from "../../../../../src/scripts/jiNotationBound/histories/extendedLevelHistories"
import { jiNotationBoundFixture } from "../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("computeExtendedJiNotationLevelBoundHistories", (): void => {
    it("given the histories for a bound up to the current JI notation level, returns the histories extended for all possible events at this JI notation level", (): void => {
        const historyPriorEventA: BoundEvent = {
            jiNotationLevel: JiNotationLevel.MEDIUM,
            boundType: BoundType.INA_MIDPOINT,
            name: "1.5°21" as Name<Bound>,
            pitch: {
                monzo: APOTOME.monzo,
                scaler: [1.5, MEDIUM_EDA],
            } as Scamon<{ rational: false }>,
        }
        const historyPriorEventB: BoundEvent = {
            jiNotationLevel: JiNotationLevel.MEDIUM,
            boundType: BoundType.COMMA_MEAN,
            name: "|( )|(" as Name<Bound>,
            pitch: {
                monzo: [],
                scaler: SQRT_SCALER,
            } as Scamon<{ rational: false }>,
        }
        const histories: BoundHistory[] = [
            [historyPriorEventA],
            [historyPriorEventB],
        ]
        const jiNotationLevel = JiNotationLevel.HIGH
        const jiNotationBound: JiNotationBound = {
            ...jiNotationBoundFixture,
            pitch: {
                monzo: APOTOME.monzo,
                scaler: [16.5, EXTREME_EDA],
            } as Scamon<{ rational: false }>,
            jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.HIGH, JiNotationLevel.ULTRA],
        }

        const actual = computeExtendedJiNotationLevelBoundHistories(histories, jiNotationLevel, jiNotationBound)

        const expected = [
            [
                historyPriorEventA,
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "2.5°47" as Name<Bound>,
                    pitch: { monzo: APOTOME.monzo, scaler: [2.5, HIGH_EDA] } as Scamon<{ rational: false }>,
                },
            ],
            [
                historyPriorEventA,
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "3.5°47" as Name<Bound>,
                    pitch: { monzo: APOTOME.monzo, scaler: [3.5, HIGH_EDA] } as Scamon<{ rational: false }>,
                },
            ],
            [
                historyPriorEventA,
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( ~|" as Name<Bound>,
                    pitch: { monzo: [3, 1, 1, -1, 0, 0, -1], scaler: SQRT_SCALER } as Scamon<{ rational: false }>,
                },
            ],
            [
                historyPriorEventB,
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "2.5°47" as Name<Bound>,
                    pitch: { monzo: APOTOME.monzo, scaler: [2.5, HIGH_EDA] } as Scamon<{ rational: false }>,
                },
            ],
            [
                historyPriorEventB,
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "3.5°47" as Name<Bound>,
                    pitch: { monzo: APOTOME.monzo, scaler: [3.5, HIGH_EDA] } as Scamon<{ rational: false }>,
                },
            ],
            [
                historyPriorEventB,
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( ~|" as Name<Bound>,
                    pitch: { monzo: [3, 1, 1, -1, 0, 0, -1], scaler: SQRT_SCALER } as Scamon<{ rational: false }>,
                },
            ],
        ]
        expect(actual).toEqual(expected)
    })
})
