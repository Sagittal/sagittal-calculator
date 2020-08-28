import { Cents, Name, Pitch } from "../../../../../src/general"
import { Bound, Level } from "../../../../../src/sagittal/notations/ji"
import { computeExtendedLevelHistories } from "../../../../../src/scripts/analyzeBounds/plot/extendedLevelHistories"
import { EventType, HistoricalEvent, History } from "../../../../../src/scripts/analyzeBounds/types"
import { boundFixture } from "../../../../helpers/src/scripts/analyzeBounds/fixtures"

describe("computeExtendedLevelHistories", () => {
    it("given the histories for a bound up to the current level, returns the histories extended for all possible events at this level", () => {
        const firstHistoryPriorEvent: HistoricalEvent = {
            level: Level.MEDIUM,
            type: EventType.INA,
            name: "1.5°21" as Name<Pitch>,
            cents: 8.120357575550852 as Cents,
        }
        const secondHistoryPriorEvent: HistoricalEvent = {
            level: Level.MEDIUM,
            type: EventType.MEAN,
            name: "|( )|(" as Name<Pitch>,
            cents: 7.72288142310195 as Cents,
        }
        const histories: History[] = [
            [firstHistoryPriorEvent],
            [secondHistoryPriorEvent],
        ]
        const level = Level.HIGH
        const bound: Bound = {
            ...boundFixture,
            cents: 8.1 as Cents,
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
                    cents: 6.047074790303825 as Cents,
                },
            ],
            [
                firstHistoryPriorEvent,
                {
                    level: Level.HIGH,
                    type: EventType.INA,
                    name: "3.5°47" as Name<Pitch>,
                    cents: 8.465904706425356 as Cents,
                },
            ],
            [
                firstHistoryPriorEvent,
                {
                    level: Level.HIGH,
                    type: EventType.MEAN,
                    name: "|( ~|" as Name<Pitch>,
                    cents: 7.243699380344975 as Cents,
                },
            ],
            [
                secondHistoryPriorEvent,
                {
                    level: Level.HIGH,
                    type: EventType.INA,
                    name: "2.5°47" as Name<Pitch>,
                    cents: 6.047074790303825 as Cents,
                },
            ],
            [
                secondHistoryPriorEvent,
                {
                    level: Level.HIGH,
                    type: EventType.INA,
                    name: "3.5°47" as Name<Pitch>,
                    cents: 8.465904706425356 as Cents,
                },
            ],
            [
                secondHistoryPriorEvent,
                {
                    level: Level.HIGH,
                    type: EventType.MEAN,
                    name: "|( ~|" as Name<Pitch>,
                    cents: 7.243699380344975 as Cents,
                },
            ],
        ]
        expect(actual).toEqual(expected)
    })
})
