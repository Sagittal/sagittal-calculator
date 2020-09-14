import { Multiplier } from "../../../../../../src/general"
import { Rank } from "../../../../../../src/general/code"
import { Integer } from "../../../../../../src/general/math"
import { Cents } from "../../../../../../src/general/music"
import { Ina, Level } from "../../../../../../src/sagittal/notations/ji"
import { analyzeEvents, EventAnalysis } from "../../../../../../src/scripts/bound/analyzeHistory/analyzeEvents"
import { EventType, History } from "../../../../../../src/scripts/bound/histories"
import { eventAnalysisFixture, eventFixture } from "../../../../../helpers/src/scripts/bound/fixtures"

describe("analyzeEvents", (): void => {
    it("adds some analysis properties to each event: rank, distance, and exact", (): void => {
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

        const actual = analyzeEvents(history, actualBoundCents)

        const expected = [
            {
                ...eventAnalysisFixture,
                type: EventType.INA,
                level: Level.HIGH,
                cents: 10.0 as Cents,
                rank: 0 as Integer & Rank<EventAnalysis>,
                exact: false,
                distance: 0.000000 as Cents,
                inaDistance: 0 as Multiplier<Ina>,
            },
            {
                ...eventAnalysisFixture,
                type: EventType.SIZE,
                level: Level.ULTRA,
                cents: 10.2 as Cents,
                rank: 2 as Integer & Rank<EventAnalysis>,
                exact: true,
                distance: 0.199999 as Cents,
                inaDistance: 0.102036 as Multiplier<Ina>,
            },
            {
                ...eventAnalysisFixture,
                type: EventType.MEAN,
                level: Level.EXTREME,
                cents: 10.1 as Cents,
                rank: 1 as Integer & Rank<EventAnalysis>,
                exact: false,
                distance: 0.099999 as Cents,
                inaDistance: 0.204952 as Multiplier<Ina>,
            },
        ]
        expect(actual).toBeArrayWithDeepCloseContents(expected)
    })
})
