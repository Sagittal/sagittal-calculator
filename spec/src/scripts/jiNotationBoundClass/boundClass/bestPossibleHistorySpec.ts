import { Sum } from "../../../../../src/general"
import { Abs } from "../../../../../src/general/math"
import { Cents } from "../../../../../src/general/music"
import { computeBestPossibleBoundClassHistoryAnalysis } from "../../../../../src/scripts/jiNotationBoundClass/boundClass/bestPossibleHistory"
import { BoundClassHistoryAnalysis, Score } from "../../../../../src/scripts/jiNotationBoundClass/history"
import { boundClassHistoryAnalysisFixture } from "../../../../helpers/src/scripts/jiNotationBoundClass/fixtures"

describe("computeBestPossibleBoundClassHistoryAnalysis", (): void => {
    it("returns the bound class history with the best score (the not possible ones are all already filtered out)                ", (): void => {
        const boundClassHistoryAnalyses: BoundClassHistoryAnalysis[] = [
            {
                ...boundClassHistoryAnalysisFixture,
                score: 3436643 as Score,
            },
            {
                ...boundClassHistoryAnalysisFixture,
                score: 245444 as Score,
            },
            {
                ...boundClassHistoryAnalysisFixture,
                score: 2422436 as Score,
            },
        ]

        const actual = computeBestPossibleBoundClassHistoryAnalysis(boundClassHistoryAnalyses)

        const expected = {
            ...boundClassHistoryAnalysisFixture,
            score: 245444 as Score,
        }
        expect(actual).toEqual(expected)
    })

    it("returns the best exact bound class history even if its score is not the best", (): void => {
        const boundClassHistoryAnalyses = [
            {
                ...boundClassHistoryAnalysisFixture,
                score: 3436643 as Score,
                exact: true,
            },
            {
                ...boundClassHistoryAnalysisFixture,
                score: 45575474 as Score,
                exact: true,
            },
            {
                ...boundClassHistoryAnalysisFixture,
                score: 245444 as Score,
            },
        ]

        const actual = computeBestPossibleBoundClassHistoryAnalysis(boundClassHistoryAnalyses)

        const expected = {
            ...boundClassHistoryAnalysisFixture,
            score: 3436643 as Score,
            exact: true,
        }
        expect(actual).toEqual(expected)
    })

    it("tie-breaks by distance", (): void => {
        const boundClassHistoryAnalyses: BoundClassHistoryAnalysis[] = [
            {
                ...boundClassHistoryAnalysisFixture,
                score: 3436643 as Score,
                totalDistance: 0.2 as Sum<Abs<Cents>>,
                exact: true,
            },
            {
                ...boundClassHistoryAnalysisFixture,
                score: 3436643 as Score,
                totalDistance: 0.1 as Sum<Abs<Cents>>,
                exact: true,
            },
        ]

        const actual = computeBestPossibleBoundClassHistoryAnalysis(boundClassHistoryAnalyses)

        const expected: BoundClassHistoryAnalysis = {
            ...boundClassHistoryAnalysisFixture,
            score: 3436643 as Score,
            totalDistance: 0.1 as Sum<Abs<Cents>>,
            exact: true,
        }
        expect(actual).toEqual(expected)
    })
})
