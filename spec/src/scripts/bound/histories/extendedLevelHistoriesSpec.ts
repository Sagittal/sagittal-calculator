import { Cents, Name, Pitch } from "../../../../../src/general"
import { Bound, Level } from "../../../../../src/sagittal/notations/ji"
import { EventType, HistoricalEvent, History } from "../../../../../src/scripts/bound/histories"
import { computeExtendedLevelHistories } from "../../../../../src/scripts/bound/histories/extendedLevelHistories"
import { boundFixture } from "../../../../helpers/src/scripts/bound/fixtures"

describe("computeExtendedLevelHistories", (): void => {
    it("given the histories for a bound up to the current level, returns the histories extended for all possible events at this level", (): void => {
        const firstHistoryPriorEvent: HistoricalEvent = {
            level: Level.MEDIUM,
            type: EventType.INA,
            name: "1.5°21" as Name<Pitch>,
            cents: 8.120357 as Cents,
        }
        const secondHistoryPriorEvent: HistoricalEvent = {
            level: Level.MEDIUM,
            type: EventType.MEAN,
            name: "|( )|(" as Name<Pitch>,
            cents: 7.722881 as Cents,
        }
        const histories: History[] = [
            [firstHistoryPriorEvent],
            [secondHistoryPriorEvent],
        ]
        const level = Level.HIGH
        const bound: Bound = {
            ...boundFixture,
            cents: 8.100000 as Cents,
            levels: [Level.MEDIUM, Level.HIGH, Level.ULTRA],
        }

        const actual = computeExtendedLevelHistories(histories, level, bound)

        const expected = [
            [
                firstHistoryPriorEvent,
                {
                    level: Level.HIGH,
                    type: EventType.INA,
                    name: "2.5°47" as Name<Pitch>,
                    cents: 6.047074 as Cents,
                },
            ],
            [
                firstHistoryPriorEvent,
                {
                    level: Level.HIGH,
                    type: EventType.INA,
                    name: "3.5°47" as Name<Pitch>,
                    cents: 8.465904 as Cents,
                },
            ],
            [
                firstHistoryPriorEvent,
                {
                    level: Level.HIGH,
                    type: EventType.MEAN,
                    name: "|( ~|" as Name<Pitch>,
                    cents: 7.243699 as Cents,
                },
            ],
            [
                secondHistoryPriorEvent,
                {
                    level: Level.HIGH,
                    type: EventType.INA,
                    name: "2.5°47" as Name<Pitch>,
                    cents: 6.047074 as Cents,
                },
            ],
            [
                secondHistoryPriorEvent,
                {
                    level: Level.HIGH,
                    type: EventType.INA,
                    name: "3.5°47" as Name<Pitch>,
                    cents: 8.465904 as Cents,
                },
            ],
            [
                secondHistoryPriorEvent,
                {
                    level: Level.HIGH,
                    type: EventType.MEAN,
                    name: "|( ~|" as Name<Pitch>,
                    cents: 7.243699 as Cents,
                },
            ],
        ]
        expect(actual).toBeCloseToObject(expected)
    })
})
