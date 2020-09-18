import { Multiplier } from "../../../../../../src/general"
import { Cents } from "../../../../../../src/general/music"
import { Ina, JiNotationLevel } from "../../../../../../src/sagittal/notations/ji"
import { EventType, History } from "../../../../../../src/scripts/jiNotationBound/histories"
import { analyzeEvents } from "../../../../../../src/scripts/jiNotationBound/history/events"
import { RANKS } from "../../../../../../src/scripts/jiNotationBound/ranks"
import { eventAnalysisFixture, eventFixture } from "../../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("analyzeEvents", (): void => {
    it("adds some analysis properties to each event: rank, distance, and exact", (): void => {
        const history: History = [
            {
                ...eventFixture,
                type: EventType.INA_MIDPOINT,
                jiNotationLevel: JiNotationLevel.HIGH,
                cents: 10.0 as Cents,
            },
            {
                ...eventFixture,
                type: EventType.SIZE_CATEGORY_BOUND,
                jiNotationLevel: JiNotationLevel.ULTRA,
                cents: 10.2 as Cents,
            },
            {
                ...eventFixture,
                type: EventType.COMMA_MEAN,
                jiNotationLevel: JiNotationLevel.EXTREME,
                cents: 10.1 as Cents,
            },
        ]
        const actualJiNotationBoundCents = 10.2 as Cents

        const actual = analyzeEvents(history, actualJiNotationBoundCents)

        const expected = [
            {
                ...eventAnalysisFixture,
                type: EventType.INA_MIDPOINT,
                jiNotationLevel: JiNotationLevel.HIGH,
                cents: 10.0 as Cents,
                rank: RANKS[ EventType.INA_MIDPOINT ],
                exact: false,
                distance: 0.000000 as Cents,
                inaDistance: 0 as Multiplier<Ina>,
            },
            {
                ...eventAnalysisFixture,
                type: EventType.SIZE_CATEGORY_BOUND,
                jiNotationLevel: JiNotationLevel.ULTRA,
                cents: 10.2 as Cents,
                rank: RANKS[ EventType.SIZE_CATEGORY_BOUND ],
                exact: true,
                distance: 0.199999 as Cents,
                inaDistance: 0.102036 as Multiplier<Ina>,
            },
            {
                ...eventAnalysisFixture,
                type: EventType.COMMA_MEAN,
                jiNotationLevel: JiNotationLevel.EXTREME,
                cents: 10.1 as Cents,
                rank: RANKS[ EventType.COMMA_MEAN ],
                exact: false,
                distance: 0.099999 as Cents,
                inaDistance: 0.204952 as Multiplier<Ina>,
            },
        ]
        expect(actual).toBeArrayWithDeepCloseContents(expected)
    })
})
