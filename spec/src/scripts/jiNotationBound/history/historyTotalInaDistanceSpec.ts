import { Multiplier, Sum } from "../../../../../src/general"
import { Ina } from "../../../../../src/sagittal/notations/ji"
import { BoundEventAnalysis } from "../../../../../src/scripts/jiNotationBound/history"
import { computeBoundHistoryTotalInaDistance } from "../../../../../src/scripts/jiNotationBound/history/historyTotalInaDistance"
import { boundEventAnalysisFixture } from "../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("computeBoundHistoryTotalInaDistance", (): void => {
    it(
        "sums up the ina-distances of all the bound events in the bound history (they are already all positive)",
        (): void => {
            const boundEventAnalyses: BoundEventAnalysis[] = [
                { ...boundEventAnalysisFixture, inaDistance: 0.4 as Multiplier<Ina> },
                { ...boundEventAnalysisFixture, inaDistance: 0.5 as Multiplier<Ina> },
                { ...boundEventAnalysisFixture, inaDistance: 0.6 as Multiplier<Ina> },
            ]

            const actual = computeBoundHistoryTotalInaDistance(boundEventAnalyses)

            const expected = 1.5 as Sum<Multiplier<Ina>>
            expect(actual).toBe(expected)
        },
    )
})
