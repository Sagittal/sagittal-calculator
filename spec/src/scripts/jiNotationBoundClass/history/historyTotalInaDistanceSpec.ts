import { Multiplier, Sum } from "../../../../../src/general"
import { Ina } from "../../../../../src/sagittal/notations/ji"
import { BoundClassEventAnalysis } from "../../../../../src/scripts/jiNotationBoundClass/history"
import { computeBoundClassHistoryTotalInaDistance } from "../../../../../src/scripts/jiNotationBoundClass/history/historyTotalInaDistance"
import { boundClassEventAnalysisFixture } from "../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("computeBoundClassHistoryTotalInaDistance", (): void => {
    it("sums up the ina-distances of all the bound class events in the bound class history (they are already all positive)           ", (): void => {
        const boundClassEventAnalyses: BoundClassEventAnalysis[] = [
            { ...boundClassEventAnalysisFixture, inaDistance: 0.4 as Multiplier<Ina> },
            { ...boundClassEventAnalysisFixture, inaDistance: 0.5 as Multiplier<Ina> },
            { ...boundClassEventAnalysisFixture, inaDistance: 0.6 as Multiplier<Ina> },
        ]

        const actual = computeBoundClassHistoryTotalInaDistance(boundClassEventAnalyses)

        const expected = 1.5 as Sum<Multiplier<Ina>>
        expect(actual).toBe(expected)
    })
})
