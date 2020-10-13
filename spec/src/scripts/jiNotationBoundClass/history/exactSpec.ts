import { BoundClassEventAnalysis } from "../../../../../src/scripts/jiNotationBoundClass/history"
import { computeExact } from "../../../../../src/scripts/jiNotationBoundClass/history/exact"
import { boundClassEventAnalysisFixture } from "../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("computeExact", (): void => {
    it("returns true if every event's position is the same as the actual bound position", (): void => {
        const boundClassEventAnalyses: BoundClassEventAnalysis[] = [
            { ...boundClassEventAnalysisFixture, exact: true },
            { ...boundClassEventAnalysisFixture, exact: true },
            { ...boundClassEventAnalysisFixture, exact: true },
            { ...boundClassEventAnalysisFixture, exact: true },
        ]

        const actual = computeExact(boundClassEventAnalyses)

        expect(actual).toBeTruthy()
    })

    it("returns false if a single event's position is not the same as the actual bound position", (): void => {
        const boundClassEventAnalyses: BoundClassEventAnalysis[] = [
            { ...boundClassEventAnalysisFixture, exact: true },
            { ...boundClassEventAnalysisFixture, exact: false },
            { ...boundClassEventAnalysisFixture, exact: true },
            { ...boundClassEventAnalysisFixture, exact: true },
        ]

        const actual = computeExact(boundClassEventAnalyses)

        expect(actual).toBeFalsy()
    })
})
