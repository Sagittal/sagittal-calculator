import { analyzeEvents } from "../../../../src/scripts/analyzeBounds/events"
import { EventType, HistoricalEvent, History } from "../../../../src/scripts/analyzeBounds/types"
import { Level } from "../../../../src/notations/ji/types"
import { Cents } from "../../../../src/utilities/types"
import { analyzedEventFixture, eventFixture } from "../../../helpers/scripts/analyzeBounds/fixtures"

describe("analyzeEvents", () => {
    it("adds some analysis properties to each event: rank, distance, and exact", () => {
        const history: History = [
            {
                ...eventFixture,
                type: EventType.INA,
                level: Level.HIGH,
                position: 10.0 as Cents,
            },
            {
                ...eventFixture,
                type: EventType.SIZE,
                level: Level.ULTRA,
                position: 10.2 as Cents,
            },
            {
                ...eventFixture,
                type: EventType.MEAN,
                level: Level.EXTREME,
                position: 10.1 as Cents,
            },
        ]
        const actualBoundPosition = 10.2 as Cents

        const result = analyzeEvents(history, actualBoundPosition)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            {
                ...analyzedEventFixture,
                type: EventType.INA,
                level: Level.HIGH,
                position: 10.0,
                rank: 0,
                exact: false,
                distance: 0,
                inaDistance: 0,
            },
            {
                ...analyzedEventFixture,
                type: EventType.SIZE,
                level: Level.ULTRA,
                position: 10.2,
                rank: 2,
                exact: true,
                distance: 0.1999999999999993,
                inaDistance: 0.10203632301441096,
            },
            {
                ...analyzedEventFixture,
                type: EventType.MEAN,
                level: Level.EXTREME,
                position: 10.1,
                rank: 1,
                exact: false,
                distance: 0.09999999999999964,
                inaDistance: 0.20495226950308407,
            },
        ]))
    })
})
