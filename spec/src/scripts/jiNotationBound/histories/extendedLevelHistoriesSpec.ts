import { Cents, Name } from "../../../../../src/general"
import { BoundType, JiNotationBound, JiNotationLevel } from "../../../../../src/sagittal/notations/ji"
import { BoundEvent, BoundHistory, BoundPosition } from "../../../../../src/scripts/jiNotationBound/histories"
import { computeExtendedJiNotationLevelBoundHistories } from "../../../../../src/scripts/jiNotationBound/histories/extendedLevelHistories"
import { jiNotationBoundFixture } from "../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("computeExtendedJiNotationLevelBoundHistories", (): void => {
    it("given the histories for a bound up to the current JI notation level, returns the histories extended for all possible events at this JI notation level", (): void => {
        const firstHistoryPriorEvent: BoundEvent = {
            jiNotationLevel: JiNotationLevel.MEDIUM,
            boundType: BoundType.INA_MIDPOINT,
            name: "1.5°21" as Name<BoundPosition>,
            cents: 8.120357 as Cents,
        }
        const secondHistoryPriorEvent: BoundEvent = {
            jiNotationLevel: JiNotationLevel.MEDIUM,
            boundType: BoundType.COMMA_MEAN,
            name: "|( )|(" as Name<BoundPosition>,
            cents: 7.722881 as Cents,
        }
        const histories: BoundHistory[] = [
            [firstHistoryPriorEvent],
            [secondHistoryPriorEvent],
        ]
        const jiNotationLevel = JiNotationLevel.HIGH
        const jiNotationBound: JiNotationBound = {
            ...jiNotationBoundFixture,
            cents: 8.100000 as Cents,
            jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.HIGH, JiNotationLevel.ULTRA],
        }

        const actual = computeExtendedJiNotationLevelBoundHistories(histories, jiNotationLevel, jiNotationBound)

        const expected = [
            [
                firstHistoryPriorEvent,
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "2.5°47" as Name<BoundPosition>,
                    cents: 6.047074 as Cents,
                },
            ],
            [
                firstHistoryPriorEvent,
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "3.5°47" as Name<BoundPosition>,
                    cents: 8.465904 as Cents,
                },
            ],
            [
                firstHistoryPriorEvent,
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( ~|" as Name<BoundPosition>,
                    cents: 7.243699 as Cents,
                },
            ],
            [
                secondHistoryPriorEvent,
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "2.5°47" as Name<BoundPosition>,
                    cents: 6.047074 as Cents,
                },
            ],
            [
                secondHistoryPriorEvent,
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "3.5°47" as Name<BoundPosition>,
                    cents: 8.465904 as Cents,
                },
            ],
            [
                secondHistoryPriorEvent,
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( ~|" as Name<BoundPosition>,
                    cents: 7.243699 as Cents,
                },
            ],
        ]
        expect(actual).toBeCloseToObject(expected)
    })
})
