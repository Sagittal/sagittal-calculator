import { Cents } from "../../../../src/general/music"
import { Level } from "../../../../src/notations/ji"
import { analyzeEvents } from "../../../../src/scripts/analyzeBounds/events"
import { EventType, History } from "../../../../src/scripts/analyzeBounds/types"
import { analyzedEventFixture, eventFixture } from "../../../helpers/scripts/analyzeBounds/fixtures"

describe("analyzeEvents", () => {
    it("adds some analysis properties to each event: rank, distance, and exact", () => {
        const history: History = [
            {
                ...eventFixture,
                type: EventType.INA,
                level: Level.HIGH,
                cents: 10.0 as Cents,
            },
            {
                ...eventFixture,
                type: EventType.SIZE,
                level: Level.ULTRA,
                cents: 10.2 as Cents,
            },
            {
                ...eventFixture,
                type: EventType.MEAN,
                level: Level.EXTREME,
                cents: 10.1 as Cents,
            },
        ]
        const actualBoundCents = 10.2 as Cents

        const result = analyzeEvents(history, actualBoundCents)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            {
                ...analyzedEventFixture,
                type: EventType.INA,
                level: Level.HIGH,
                cents: 10.0,
                rank: 0,
                exact: false,
                distance: 0,
                inaDistance: 0,
            },
            {
                ...analyzedEventFixture,
                type: EventType.SIZE,
                level: Level.ULTRA,
                cents: 10.2,
                rank: 2,
                exact: true,
                distance: 0.1999999999999993,
                inaDistance: 0.10203632301441096,
            },
            {
                ...analyzedEventFixture,
                type: EventType.MEAN,
                level: Level.EXTREME,
                cents: 10.1,
                rank: 1,
                exact: false,
                distance: 0.09999999999999964,
                inaDistance: 0.20495226950308407,
            },
        ]))
    })
})