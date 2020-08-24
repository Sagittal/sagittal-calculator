import { Cents } from "../../../../src/general/music"
import { computeBestPossibleHistory } from "../../../../src/scripts/analyzeBounds/bestPossibleHistory"
import { AnalyzedHistory, Score } from "../../../../src/scripts/analyzeBounds/types"
import { analyzedHistoryFixture } from "../../../helpers/src/scripts/analyzeBounds/fixtures"

describe("computeBestPossibleHistory", () => {
    it("returns the history with the best score (the not possible ones are all already filtered out)", () => {
        const analyzedHistories: AnalyzedHistory[] = [
            {
                ...analyzedHistoryFixture,
                score: 3436643 as Score,
                cents: 12.909 as Cents,
            },
            {
                ...analyzedHistoryFixture,
                score: 245444 as Score,
                cents: 13.235 as Cents,
            },
            {
                ...analyzedHistoryFixture,
                score: 2422436 as Score,
                cents: 13.47489 as Cents,
            },
        ]

        const actual = computeBestPossibleHistory(analyzedHistories)

        const expected = {
            ...analyzedHistoryFixture,
            score: 245444 as Score,
            cents: 13.235 as Cents,
        }
        expect(actual).toEqual(expected)
    })

    it("returns the best exact history even if its score is not the best", () => {
        const analyzedHistories = [
            {
                ...analyzedHistoryFixture,
                score: 3436643 as Score,
                cents: 12.909 as Cents,
                exact: true,
            },
            {
                ...analyzedHistoryFixture,
                score: 45575474 as Score,
                cents: 12.909 as Cents,
                exact: true,
            },
            {
                ...analyzedHistoryFixture,
                score: 245444 as Score,
                cents: 13.235 as Cents,
            },
        ]

        const actual = computeBestPossibleHistory(analyzedHistories)

        const expected = {
            ...analyzedHistoryFixture,
            score: 3436643 as Score,
            cents: 12.909 as Cents,
            exact: true,
        }
        expect(actual).toEqual(expected)
    })

    it("tie-breaks by distance", () => {
        const analyzedHistories = [
            {
                ...analyzedHistoryFixture,
                score: 3436643 as Score,
                distance: 0.2 as Cents,
                cents: 12.909 as Cents,
                exact: true,
            },
            {
                ...analyzedHistoryFixture,
                score: 3436643 as Score,
                distance: 0.1 as Cents,
                cents: 12.909 as Cents,
                exact: true,
            },
        ]

        const actual = computeBestPossibleHistory(analyzedHistories)

        const expected = {
            ...analyzedHistoryFixture,
            score: 3436643 as Score,
            distance: 0.1 as Cents,
            cents: 12.909 as Cents,
            exact: true,
        }
        expect(actual).toEqual(expected)
    })
})
