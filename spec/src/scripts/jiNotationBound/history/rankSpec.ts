import { Cents } from "../../../../../src/general/music"
import { JiNotationLevel } from "../../../../../src/sagittal/notations/ji"
import { EventType } from "../../../../../src/scripts/jiNotationBound/histories"
import { EventAnalysis } from "../../../../../src/scripts/jiNotationBound/history"
import { computeRank } from "../../../../../src/scripts/jiNotationBound/history/rank"
import { RANKS } from "../../../../../src/scripts/jiNotationBound/ranks"
import { eventAnalysisFixture } from "../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("computeRank", (): void => {
    it("returns the worst rank of any of the events in the history", (): void => {
        const eventAnalyses: EventAnalysis[] = [
            {
                ...eventAnalysisFixture,
                type: EventType.INA_MIDPOINT,
                jiNotationLevel: JiNotationLevel.HIGH,
                cents: 10.0 as Cents,
                rank: RANKS[ EventType.INA_MIDPOINT ],
            },
            {
                ...eventAnalysisFixture,
                type: EventType.SIZE_CATEGORY_BOUND,
                jiNotationLevel: JiNotationLevel.ULTRA,
                cents: 10.2 as Cents,
                rank: RANKS[ EventType.SIZE_CATEGORY_BOUND ],
            },
            {
                ...eventAnalysisFixture,
                type: EventType.COMMA_MEAN,
                jiNotationLevel: JiNotationLevel.EXTREME,
                cents: 10.1 as Cents,
                rank: RANKS[ EventType.COMMA_MEAN ],
            },
        ]

        const actual = computeRank(eventAnalyses)

        const expected = RANKS[ EventType.SIZE_CATEGORY_BOUND ]
        expect(actual).toBe(expected)
    })
})
