import { Integer, Rank } from "../../../../src/general"
import { Cents } from "../../../../src/general/music"
import { Level } from "../../../../src/sagittal/notations/ji"
import { computeRank } from "../../../../src/scripts/analyzeBounds/rank"
import { AnalyzedEvent, EventType } from "../../../../src/scripts/analyzeBounds/types"
import { analyzedEventFixture } from "../../../helpers/src/scripts/analyzeBounds/fixtures"

describe("computeRank", () => {
    it("returns the worst rank of any of the events in the history", () => {
        const analyzedEvents: AnalyzedEvent[] = [
            {
                ...analyzedEventFixture,
                type: EventType.INA,
                level: Level.HIGH,
                cents: 10.0 as Cents,
                rank: 1 as Rank<AnalyzedEvent, Integer>,
            },
            {
                ...analyzedEventFixture,
                type: EventType.SIZE,
                level: Level.ULTRA,
                cents: 10.2 as Cents,
                rank: 3 as Rank<AnalyzedEvent, Integer>,
            },
            {
                ...analyzedEventFixture,
                type: EventType.MEAN,
                level: Level.EXTREME,
                cents: 10.1 as Cents,
                rank: 2 as Rank<AnalyzedEvent, Integer>,
            },
        ]

        const actual = computeRank(analyzedEvents)

        const expected = 3 as Rank<AnalyzedEvent, Integer>
        expect(actual).toBe(expected)
    })
})
