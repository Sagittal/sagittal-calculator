import { Cents } from "../../../../../src/general/music"
import { computeBestPossibleHistory } from "../../../../../src/scripts/bound/analyzeBound/bestPossibleHistory"
import { HistoryAnalysis, Score } from "../../../../../src/scripts/bound/analyzeHistory"
import { historyAnalysisFixture } from "../../../../helpers/src/scripts/bound/fixtures"

describe("computeBestPossibleHistory", () => {
    it("returns the history with the best score (the not possible ones are all already filtered out)", () => {
        const historyAnalyses: HistoryAnalysis[] = [
            {
                ...historyAnalysisFixture,
                score: 3436643 as Score,
                cents: 12.909 as Cents,
            },
            {
                ...historyAnalysisFixture,
                score: 245444 as Score,
                cents: 13.235 as Cents,
            },
            {
                ...historyAnalysisFixture,
                score: 2422436 as Score,
                cents: 13.47489 as Cents,
            },
        ]

        const actual = computeBestPossibleHistory(historyAnalyses)

        const expected = {
            ...historyAnalysisFixture,
            score: 245444 as Score,
            cents: 13.235 as Cents,
        }
        expect(actual).toEqual(expected)
    })

    it("returns the best exact history even if its score is not the best", () => {
        const historyAnalyses = [
            {
                ...historyAnalysisFixture,
                score: 3436643 as Score,
                cents: 12.909 as Cents,
                exact: true,
            },
            {
                ...historyAnalysisFixture,
                score: 45575474 as Score,
                cents: 12.909 as Cents,
                exact: true,
            },
            {
                ...historyAnalysisFixture,
                score: 245444 as Score,
                cents: 13.235 as Cents,
            },
        ]

        const actual = computeBestPossibleHistory(historyAnalyses)

        const expected = {
            ...historyAnalysisFixture,
            score: 3436643 as Score,
            cents: 12.909 as Cents,
            exact: true,
        }
        expect(actual).toEqual(expected)
    })

    it("tie-breaks by distance", () => {
        const historyAnalyses: HistoryAnalysis[] = [
            {
                ...historyAnalysisFixture,
                score: 3436643 as Score,
                totalDistance: 0.2 as Cents,
                cents: 12.909 as Cents,
                exact: true,
            },
            {
                ...historyAnalysisFixture,
                score: 3436643 as Score,
                totalDistance: 0.1 as Cents,
                cents: 12.909 as Cents,
                exact: true,
            },
        ]

        const actual = computeBestPossibleHistory(historyAnalyses)

        const expected: HistoryAnalysis = {
            ...historyAnalysisFixture,
            score: 3436643 as Score,
            totalDistance: 0.1 as Cents,
            cents: 12.909 as Cents,
            exact: true,
        }
        expect(actual).toEqual(expected)
    })
})
