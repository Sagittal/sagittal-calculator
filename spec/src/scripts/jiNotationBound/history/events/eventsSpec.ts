import { Multiplier } from "../../../../../../src/general"
import { Rank } from "../../../../../../src/general/code"
import { Integer } from "../../../../../../src/general/math"
import { Cents } from "../../../../../../src/general/music"
import { Ina, JiNotationLevel } from "../../../../../../src/sagittal/notations/ji"
import { EventType, History } from "../../../../../../src/scripts/jiNotationBound/histories"
import { analyzeEvents, EventAnalysis } from "../../../../../../src/scripts/jiNotationBound/history/events"
import { eventAnalysisFixture, eventFixture } from "../../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("analyzeEvents", (): void => {
    it("adds some analysis properties to each event: rank, distance, and exact", (): void => {
        const history: History = [
            {
                ...eventFixture,
                type: EventType.INA,
                jiNotationLevel: JiNotationLevel.HIGH,
                cents: 10.0 as Cents,
            },
            {
                ...eventFixture,
                type: EventType.SIZE,
                jiNotationLevel: JiNotationLevel.ULTRA,
                cents: 10.2 as Cents,
            },
            {
                ...eventFixture,
                type: EventType.MEAN,
                jiNotationLevel: JiNotationLevel.EXTREME,
                cents: 10.1 as Cents,
            },
        ]
        const actualJiNotationBoundCents = 10.2 as Cents

        const actual = analyzeEvents(history, actualJiNotationBoundCents)

        const expected = [
            {
                ...eventAnalysisFixture,
                type: EventType.INA,
                jiNotationLevel: JiNotationLevel.HIGH,
                cents: 10.0 as Cents,
                rank: 0 as Integer & Rank<EventAnalysis>,
                exact: false,
                distance: 0.000000 as Cents,
                inaDistance: 0 as Multiplier<Ina>,
            },
            {
                ...eventAnalysisFixture,
                type: EventType.SIZE,
                jiNotationLevel: JiNotationLevel.ULTRA,
                cents: 10.2 as Cents,
                rank: 2 as Integer & Rank<EventAnalysis>,
                exact: true,
                distance: 0.199999 as Cents,
                inaDistance: 0.102036 as Multiplier<Ina>,
            },
            {
                ...eventAnalysisFixture,
                type: EventType.MEAN,
                jiNotationLevel: JiNotationLevel.EXTREME,
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
