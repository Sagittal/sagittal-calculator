import { EventAnalysis } from "../../../../../src/scripts/bound/analyzeHistory"
import { computeExact } from "../../../../../src/scripts/bound/analyzeHistory/exact"
import { eventAnalysisFixture } from "../../../../helpers/src/scripts/bound/fixtures"

describe("computeExact", () => {
    it("returns true if every event's position is the same as the actual bound position", () => {
        const eventAnalyses: EventAnalysis[] = [
            { ...eventAnalysisFixture, exact: true },
            { ...eventAnalysisFixture, exact: true },
            { ...eventAnalysisFixture, exact: true },
            { ...eventAnalysisFixture, exact: true },
        ]

        const actual = computeExact(eventAnalyses)

        expect(actual).toBeTruthy()
    })

    it("returns false if a single event's position is not the same as the actual bound position", () => {
        const eventAnalyses: EventAnalysis[] = [
            { ...eventAnalysisFixture, exact: true },
            { ...eventAnalysisFixture, exact: false },
            { ...eventAnalysisFixture, exact: true },
            { ...eventAnalysisFixture, exact: true },
        ]

        const actual = computeExact(eventAnalyses)

        expect(actual).toBeFalsy()
    })
})
