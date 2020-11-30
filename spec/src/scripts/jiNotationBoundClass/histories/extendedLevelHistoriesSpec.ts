import {APOTOME, HALF_SCALER, Name, Scamon} from "../../../../../src/general"
import {BoundType, JiNotationBound, JiNotationBoundClass, JiNotationLevelId} from "../../../../../src/sagittal"
import {EXTREME_EDA, HIGH_EDA, MEDIUM_EDA} from "../../../../../src/sagittal/notations/ji/levelEdas"
import {BoundEvent, BoundHistory} from "../../../../../src/scripts/jiNotationBoundClass/histories"
import {computeExtendedJiNotationLevelBoundHistories} from "../../../../../src/scripts/jiNotationBoundClass/histories/extendedLevelHistories"
import {jiNotationBoundClassFixture} from "../../../../helpers/src/scripts/jiNotationBoundClass/fixtures"

describe("computeExtendedJiNotationLevelBoundHistories", (): void => {
    it("given the histories for a bound up to the current JI notation level, returns the histories extended for all possible events at this JI notation level", (): void => {
        const historyPriorEventA: BoundEvent = {
            jiNotationLevel: JiNotationLevelId.MEDIUM,
            boundType: BoundType.INA_MIDPOINT,
            name: "1.5°21" as Name<JiNotationBound>,
            pitch: {
                monzo: APOTOME.monzo,
                scaler: [1.5, MEDIUM_EDA],
            } as Scamon<{rational: false}>,
        }
        const historyPriorEventB: BoundEvent = {
            jiNotationLevel: JiNotationLevelId.MEDIUM,
            boundType: BoundType.COMMA_MEAN,
            name: "|( )|(" as Name<JiNotationBound>,
            pitch: {
                monzo: [],
                scaler: HALF_SCALER,
            } as Scamon<{rational: false}>,
        }
        const histories: BoundHistory[] = [
            [historyPriorEventA],
            [historyPriorEventB],
        ]
        const jiNotationLevel = JiNotationLevelId.HIGH
        const jiNotationBoundClass: JiNotationBoundClass = {
            ...jiNotationBoundClassFixture,
            pitch: {
                monzo: APOTOME.monzo,
                scaler: [16.5, EXTREME_EDA],
            } as Scamon<{rational: false}>,
            jiNotationLevels: [JiNotationLevelId.MEDIUM, JiNotationLevelId.HIGH, JiNotationLevelId.ULTRA],
        }

        const actual =
            computeExtendedJiNotationLevelBoundHistories(histories, jiNotationLevel, jiNotationBoundClass)

        const expected = [
            [
                historyPriorEventA,
                {
                    jiNotationLevel: JiNotationLevelId.HIGH,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "2.5°47" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: [2.5, HIGH_EDA]} as Scamon<{rational: false}>,
                },
            ],
            [
                historyPriorEventA,
                {
                    jiNotationLevel: JiNotationLevelId.HIGH,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "3.5°47" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: [3.5, HIGH_EDA]} as Scamon<{rational: false}>,
                },
            ],
            [
                historyPriorEventA,
                {
                    jiNotationLevel: JiNotationLevelId.HIGH,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( ~|" as Name<JiNotationBound>,
                    pitch: {monzo: [3, 1, 1, -1, 0, 0, -1], scaler: HALF_SCALER} as Scamon<{rational: false}>,
                },
            ],
            [
                historyPriorEventB,
                {
                    jiNotationLevel: JiNotationLevelId.HIGH,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "2.5°47" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: [2.5, HIGH_EDA]} as Scamon<{rational: false}>,
                },
            ],
            [
                historyPriorEventB,
                {
                    jiNotationLevel: JiNotationLevelId.HIGH,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "3.5°47" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: [3.5, HIGH_EDA]} as Scamon<{rational: false}>,
                },
            ],
            [
                historyPriorEventB,
                {
                    jiNotationLevel: JiNotationLevelId.HIGH,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( ~|" as Name<JiNotationBound>,
                    pitch: {monzo: [3, 1, 1, -1, 0, 0, -1], scaler: HALF_SCALER} as Scamon<{rational: false}>,
                },
            ],
        ]
        expect(actual).toEqual(expected)
    })
})
