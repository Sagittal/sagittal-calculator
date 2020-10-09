import { Sum } from "../../../../../src/general"
import { Abs } from "../../../../../src/general/math"
import { Cents } from "../../../../../src/general/music"
import { computeBestPossibleBoundHistoryAnalysis } from "../../../../../src/scripts/jiNotationBound/bound/bestPossibleHistory"
import { BoundHistoryAnalysis, Score } from "../../../../../src/scripts/jiNotationBound/history"
import { boundHistoryAnalysisFixture } from "../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("computeBestPossibleBoundHistoryAnalysis", (): void => {
    it("returns the bound history with the best score (the not possible ones are all already filtered out)                ", (): void => {
        const boundHistoryAnalyses: BoundHistoryAnalysis[] = [
            {
                ...boundHistoryAnalysisFixture,
                score: 3436643 as Score,
            },
            {
                ...boundHistoryAnalysisFixture,
                score: 245444 as Score,
            },
            {
                ...boundHistoryAnalysisFixture,
                score: 2422436 as Score,
            },
        ]

        const actual = computeBestPossibleBoundHistoryAnalysis(boundHistoryAnalyses)

        const expected = {
            ...boundHistoryAnalysisFixture,
            score: 245444 as Score,
        }
        expect(actual).toEqual(expected)
    })

    it("returns the best exact bound history even if its score is not the best", (): void => {
        const boundHistoryAnalyses = [
            {
                ...boundHistoryAnalysisFixture,
                score: 3436643 as Score,
                exact: true,
            },
            {
                ...boundHistoryAnalysisFixture,
                score: 45575474 as Score,
                exact: true,
            },
            {
                ...boundHistoryAnalysisFixture,
                score: 245444 as Score,
            },
        ]

        const actual = computeBestPossibleBoundHistoryAnalysis(boundHistoryAnalyses)

        const expected = {
            ...boundHistoryAnalysisFixture,
            score: 3436643 as Score,
            exact: true,
        }
        expect(actual).toEqual(expected)
    })

    it("tie-breaks by distance", (): void => {
        const boundHistoryAnalyses: BoundHistoryAnalysis[] = [
            {
                ...boundHistoryAnalysisFixture,
                score: 3436643 as Score,
                totalDistance: 0.2 as Sum<Abs<Cents>>,
                exact: true,
            },
            {
                ...boundHistoryAnalysisFixture,
                score: 3436643 as Score,
                totalDistance: 0.1 as Sum<Abs<Cents>>,
                exact: true,
            },
        ]

        const actual = computeBestPossibleBoundHistoryAnalysis(boundHistoryAnalyses)

        const expected: BoundHistoryAnalysis = {
            ...boundHistoryAnalysisFixture,
            score: 3436643 as Score,
            totalDistance: 0.1 as Sum<Abs<Cents>>,
            exact: true,
        }
        expect(actual).toEqual(expected)
    })
})
