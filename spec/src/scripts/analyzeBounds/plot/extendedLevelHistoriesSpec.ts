import { computeExtendedLevelHistories } from "../../../../../src/scripts/analyzeBounds/plot/extendedLevelHistories"
import { EventName, EventType, HistoricalEvent, History } from "../../../../../src/scripts/analyzeBounds/types"
import { Bound, BoundId, Level } from "../../../../../src/notations/ji/types"
import { Cents } from "../../../../../src/utilities/types"

describe("computeExtendedLevelHistories", () => {
    it("given the histories for a bound up to the current level, returns the histories extended for all possible events at this level", () => {
        const firstHistoryPriorEvent: HistoricalEvent = {
            level: Level.MEDIUM,
            type: EventType.INA,
            name: "1.5°21" as EventName,
            position: 8.120357575550852 as Cents,
        }
        const secondHistoryPriorEvent: HistoricalEvent = {
            level: Level.MEDIUM,
            type: EventType.MEAN,
            name: "|( )|(" as EventName,
            position: 7.72288142310195 as Cents,
        }
        const histories: History[] = [
            [firstHistoryPriorEvent],
            [secondHistoryPriorEvent],
        ]
        const level = Level.HIGH
        const bound: Bound = {
            position: 8.1 as Cents,
            levels: [Level.MEDIUM, Level.HIGH, Level.ULTRA],
            id: 0 as BoundId
        }

        const result = computeExtendedLevelHistories(histories, level, bound)

        expect(result).toEqual([
            [
                firstHistoryPriorEvent,
                { level: Level.HIGH, type: EventType.INA, name: "2.5°47", position: 6.047074790303825 },
            ] as History,
            [
                firstHistoryPriorEvent,
                { level: Level.HIGH, type: EventType.INA, name: "3.5°47", position: 8.465904706425356 },
            ] as History,
            [
                firstHistoryPriorEvent,
                { level: Level.HIGH, type: EventType.MEAN, name: "|( ~|", position: 7.243699380344975 },
            ] as History,
            [
                secondHistoryPriorEvent,
                { level: Level.HIGH, type: EventType.INA, name: "2.5°47", position: 6.047074790303825 },
            ] as History,
            [
                secondHistoryPriorEvent,
                { level: Level.HIGH, type: EventType.INA, name: "3.5°47", position: 8.465904706425356 },
            ] as History,
            [
                secondHistoryPriorEvent,
                { level: Level.HIGH, type: EventType.MEAN, name: "|( ~|", position: 7.243699380344975 },
            ] as History,
        ])
    })
})
