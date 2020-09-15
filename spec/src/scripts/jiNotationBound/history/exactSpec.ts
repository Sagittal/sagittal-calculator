import { EventAnalysis } from "../../../../../src/scripts/jiNotationBound/history"
import { computeExact } from "../../../../../src/scripts/jiNotationBound/history/exact"
import { eventAnalysisFixture } from "../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("computeExact", (): void => {
    it("returns true if every event's position is the same as the actual bound position", (): void => {
        const eventAnalyses: EventAnalysis[] = [
            { ...eventAnalysisFixture, exact: true },
            { ...eventAnalysisFixture, exact: true },
            { ...eventAnalysisFixture, exact: true },
            { ...eventAnalysisFixture, exact: true },
        ]

        const actual = computeExact(eventAnalyses)

        expect(actual).toBeTruthy()
    })

    it("returns false if a single event's position is not the same as the actual bound position", (): void => {
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
