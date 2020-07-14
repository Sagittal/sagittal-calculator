import { Cents } from "../../../../src/general/music"
import { Level } from "../../../../src/notations/ji"
import { computeRank } from "../../../../src/scripts/analyzeBounds/rank"
import { AnalyzedEvent, EventRank, EventType } from "../../../../src/scripts/analyzeBounds/types"
import { analyzedEventFixture } from "../../../helpers/scripts/analyzeBounds/fixtures"

describe("computeRank", () => {
    it("returns the worst rank of any of the events in the history", () => {
        const analyzedEvents: AnalyzedEvent[] = [
            {
                ...analyzedEventFixture,
                type: EventType.INA,
                level: Level.HIGH,
                cents: 10.0 as Cents,
                rank: 1 as EventRank,
            },
            {
                ...analyzedEventFixture,
                type: EventType.SIZE,
                level: Level.ULTRA,
                cents: 10.2 as Cents,
                rank: 3 as EventRank,
            },
            {
                ...analyzedEventFixture,
                type: EventType.MEAN,
                level: Level.EXTREME,
                cents: 10.1 as Cents,
                rank: 2 as EventRank,
            },
        ]

        const result = computeRank(analyzedEvents)

        expect(result).toBe(3 as EventRank)
    })
})
