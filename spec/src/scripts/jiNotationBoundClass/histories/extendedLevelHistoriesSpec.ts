import { Name, Scamon, HALF_SCALER } from "../../../../../src/general"
import { APOTOME } from "../../../../../src/sagittal"
import { BoundClass, BoundType, JiNotationBoundClass, JiNotationLevel } from "../../../../../src/sagittal/notations/ji"
import { EXTREME_EDA, HIGH_EDA, MEDIUM_EDA } from "../../../../../src/sagittal/notations/ji/levelEdas"
import { BoundClassEvent, BoundClassHistory } from "../../../../../src/scripts/jiNotationBoundClass/histories"
import { computeExtendedJiNotationLevelBoundClassHistories } from "../../../../../src/scripts/jiNotationBoundClass/histories/extendedLevelHistories"
import { jiNotationBoundClassFixture } from "../../../../helpers/src/scripts/jiNotationBoundClass/fixtures"

describe("computeExtendedJiNotationLevelBoundClassHistories", (): void => {
    it("given the histories for a bound up to the current JI notation level, returns the histories extended for all possible events at this JI notation level", (): void => {
        const historyPriorEventA: BoundClassEvent = {
            jiNotationLevel: JiNotationLevel.MEDIUM,
            boundType: BoundType.INA_MIDPOINT,
            name: "1.5°21" as Name<BoundClass>,
            pitch: {
                monzo: APOTOME.monzo,
                scaler: [1.5, MEDIUM_EDA],
            } as Scamon<{ rational: false }>,
        }
        const historyPriorEventB: BoundClassEvent = {
            jiNotationLevel: JiNotationLevel.MEDIUM,
            boundType: BoundType.COMMA_MEAN,
            name: "|( )|(" as Name<BoundClass>,
            pitch: {
                monzo: [],
                scaler: HALF_SCALER,
            } as Scamon<{ rational: false }>,
        }
        const histories: BoundClassHistory[] = [
            [historyPriorEventA],
            [historyPriorEventB],
        ]
        const jiNotationLevel = JiNotationLevel.HIGH
        const jiNotationBoundClass: JiNotationBoundClass = {
            ...jiNotationBoundClassFixture,
            pitch: {
                monzo: APOTOME.monzo,
                scaler: [16.5, EXTREME_EDA],
            } as Scamon<{ rational: false }>,
            jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.HIGH, JiNotationLevel.ULTRA],
        }

        const actual =
            computeExtendedJiNotationLevelBoundClassHistories(histories, jiNotationLevel, jiNotationBoundClass)

        const expected = [
            [
                historyPriorEventA,
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "2.5°47" as Name<BoundClass>,
                    pitch: { monzo: APOTOME.monzo, scaler: [2.5, HIGH_EDA] } as Scamon<{ rational: false }>,
                },
            ],
            [
                historyPriorEventA,
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "3.5°47" as Name<BoundClass>,
                    pitch: { monzo: APOTOME.monzo, scaler: [3.5, HIGH_EDA] } as Scamon<{ rational: false }>,
                },
            ],
            [
                historyPriorEventA,
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( ~|" as Name<BoundClass>,
                    pitch: { monzo: [3, 1, 1, -1, 0, 0, -1], scaler: HALF_SCALER } as Scamon<{ rational: false }>,
                },
            ],
            [
                historyPriorEventB,
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "2.5°47" as Name<BoundClass>,
                    pitch: { monzo: APOTOME.monzo, scaler: [2.5, HIGH_EDA] } as Scamon<{ rational: false }>,
                },
            ],
            [
                historyPriorEventB,
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "3.5°47" as Name<BoundClass>,
                    pitch: { monzo: APOTOME.monzo, scaler: [3.5, HIGH_EDA] } as Scamon<{ rational: false }>,
                },
            ],
            [
                historyPriorEventB,
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( ~|" as Name<BoundClass>,
                    pitch: { monzo: [3, 1, 1, -1, 0, 0, -1], scaler: HALF_SCALER } as Scamon<{ rational: false }>,
                },
            ],
        ]
        expect(actual).toEqual(expected)
    })
})
