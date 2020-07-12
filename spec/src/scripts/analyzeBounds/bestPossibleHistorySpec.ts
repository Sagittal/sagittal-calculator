import { computeBestPossibleHistory } from "../../../../src/scripts/analyzeBounds/bestPossibleHistory"
import { AnalyzedHistory, Score } from "../../../../src/scripts/analyzeBounds/types"
import { Cents } from "../../../../src/utilities/types"
import { analyzedHistoryFixture } from "../../../helpers/scripts/analyzeBounds/fixtures"

describe("computeBestPossibleHistory", () => {
    it("returns the history with the best score (the not possible ones are all already filtered out)", () => {
        const analyzedHistories: AnalyzedHistory[] = [
            {
                ...analyzedHistoryFixture,
                score: 3436643 as Score,
                position: 12.909 as Cents,
            },
            {
                ...analyzedHistoryFixture,
                score: 245444 as Score,
                position: 13.235 as Cents,
            },
            {
                ...analyzedHistoryFixture,
                score: 2422436 as Score,
                position: 13.47489 as Cents,
            },
        ]

        const result = computeBestPossibleHistory(analyzedHistories)

        expect(result).toEqual({
            ...analyzedHistoryFixture,
            score: 245444 as Score,
            position: 13.235 as Cents,
        })
    })

    it("returns the best exact history even if its score is not the best", () => {
        const analyzedHistories = [
            {
                ...analyzedHistoryFixture,
                score: 3436643 as Score,
                position: 12.909 as Cents,
                exact: true,
            },
            {
                ...analyzedHistoryFixture,
                score: 45575474 as Score,
                position: 12.909 as Cents,
                exact: true,
            },
            {
                ...analyzedHistoryFixture,
                score: 245444 as Score,
                position: 13.235 as Cents,
            },
        ]

        const result = computeBestPossibleHistory(analyzedHistories)

        expect(result).toEqual({
            ...analyzedHistoryFixture,
            score: 3436643 as Score,
            position: 12.909 as Cents,
            exact: true,
        })
    })

    it("tie-breaks by distance", () => {
        const analyzedHistories = [
            {
                ...analyzedHistoryFixture,
                score: 3436643 as Score,
                distance: 0.2 as Cents,
                position: 12.909 as Cents,
                exact: true,
            },
            {
                ...analyzedHistoryFixture,
                score: 3436643 as Score,
                distance: 0.1 as Cents,
                position: 12.909 as Cents,
                exact: true,
            },
        ]

        const result = computeBestPossibleHistory(analyzedHistories)

        expect(result).toEqual({
            ...analyzedHistoryFixture,
            score: 3436643 as Score,
            distance: 0.1 as Cents,
            position: 12.909 as Cents,
            exact: true,
        })
    })
})
