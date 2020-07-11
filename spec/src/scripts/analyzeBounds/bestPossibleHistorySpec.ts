import { computeBestPossibleHistory } from "../../../../src/scripts/analyzeBounds/bestPossibleHistory"
import { AnalyzedHistory } from "../../../../src/scripts/analyzeBounds/types"

describe("computeBestPossibleHistory", () => {
    it("returns the history with the best score (the not possible ones are all already filtered out)", () => {
        const analyzedHistories: AnalyzedHistory[] = [
            {
                score: 3436643,
                position: 12.909,
            },
            {
                score: 245444,
                position: 13.235,
            },
            {
                score: 2422436,
                position: 13.47489,
            },
        ] as AnalyzedHistory[]

        const result = computeBestPossibleHistory(analyzedHistories)

        expect(result).toEqual({
            score: 245444,
            position: 13.235,
        } as AnalyzedHistory)
    })

    it("returns the best exact history even if its score is not the best", () => {
        const analyzedHistories = [
            {
                score: 3436643,
                position: 12.909,
                exact: true,
            },
            {
                score: 45575474,
                position: 12.909,
                exact: true,
            },
            {
                score: 245444,
                position: 13.235,
            },
        ] as AnalyzedHistory[]

        const result = computeBestPossibleHistory(analyzedHistories)

        expect(result).toEqual({
            score: 3436643,
            position: 12.909,
            exact: true,
        } as AnalyzedHistory)
    })

    it("tie-breaks by distance", () => {
        const analyzedHistories = [
            {
                score: 3436643,
                distance: 0.2,
                position: 12.909,
                exact: true,
            },
            {
                score: 3436643,
                distance: 0.1,
                position: 12.909,
                exact: true,
            },
        ] as AnalyzedHistory[]

        const result = computeBestPossibleHistory(analyzedHistories)

        expect(result).toEqual({
            score: 3436643,
            distance: 0.1,
            position: 12.909,
            exact: true,
        } as AnalyzedHistory)
    })
})
