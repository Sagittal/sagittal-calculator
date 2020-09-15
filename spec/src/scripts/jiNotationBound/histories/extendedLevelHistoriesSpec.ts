import { Cents, Name, Pitch } from "../../../../../src/general"
import { JiNotationBound, JiNotationLevel } from "../../../../../src/sagittal/notations/ji"
import { EventType, HistoricalEvent, History } from "../../../../../src/scripts/jiNotationBound/histories"
import { computeExtendedJiNotationLevelHistories } from "../../../../../src/scripts/jiNotationBound/histories/extendedLevelHistories"
import { jiNotationBoundFixture } from "../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("computeExtendedJiNotationLevelHistories", (): void => {
    it("given the histories for a bound up to the current JI notation level, returns the histories extended for all possible events at this JI notation level", (): void => {
        const firstHistoryPriorEvent: HistoricalEvent = {
            jiNotationLevel: JiNotationLevel.MEDIUM,
            type: EventType.INA,
            name: "1.5°21" as Name<Pitch>,
            cents: 8.120357 as Cents,
        }
        const secondHistoryPriorEvent: HistoricalEvent = {
            jiNotationLevel: JiNotationLevel.MEDIUM,
            type: EventType.MEAN,
            name: "|( )|(" as Name<Pitch>,
            cents: 7.722881 as Cents,
        }
        const histories: History[] = [
            [firstHistoryPriorEvent],
            [secondHistoryPriorEvent],
        ]
        const jiNotationLevel = JiNotationLevel.HIGH
        const jiNotationBound: JiNotationBound = {
            ...jiNotationBoundFixture,
            cents: 8.100000 as Cents,
            jiNotationLevels: [JiNotationLevel.MEDIUM, JiNotationLevel.HIGH, JiNotationLevel.ULTRA],
        }

        const actual = computeExtendedJiNotationLevelHistories(histories, jiNotationLevel, jiNotationBound)

        const expected = [
            [
                firstHistoryPriorEvent,
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    type: EventType.INA,
                    name: "2.5°47" as Name<Pitch>,
                    cents: 6.047074 as Cents,
                },
            ],
            [
                firstHistoryPriorEvent,
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    type: EventType.INA,
                    name: "3.5°47" as Name<Pitch>,
                    cents: 8.465904 as Cents,
                },
            ],
            [
                firstHistoryPriorEvent,
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    type: EventType.MEAN,
                    name: "|( ~|" as Name<Pitch>,
                    cents: 7.243699 as Cents,
                },
            ],
            [
                secondHistoryPriorEvent,
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    type: EventType.INA,
                    name: "2.5°47" as Name<Pitch>,
                    cents: 6.047074 as Cents,
                },
            ],
            [
                secondHistoryPriorEvent,
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    type: EventType.INA,
                    name: "3.5°47" as Name<Pitch>,
                    cents: 8.465904 as Cents,
                },
            ],
            [
                secondHistoryPriorEvent,
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    type: EventType.MEAN,
                    name: "|( ~|" as Name<Pitch>,
                    cents: 7.243699 as Cents,
                },
            ],
        ]
        expect(actual).toBeCloseToObject(expected)
    })
})
