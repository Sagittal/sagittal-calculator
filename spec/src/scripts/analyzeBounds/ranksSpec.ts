import { Count, Id, Integer, Rank } from "../../../../src/general"
import { Bound } from "../../../../src/sagittal/notations/ji"
import { rankBoundIndices, rankCounts, updateRankAnalysis } from "../../../../src/scripts/analyzeBounds/ranks"
import { AnalyzedEvent } from "../../../../src/scripts/analyzeBounds/types"

describe("updateRankAnalysis", () => {
    const bestRank: Rank<AnalyzedEvent, Integer> = 2 as Rank<AnalyzedEvent, Integer>
    const boundId: Id<Bound> = 88 as Id<Bound>

    let previousRankAnalysis: number
    let previousRankBounds: Id<Bound>[]

    beforeAll(() => {
        previousRankAnalysis = rankCounts[ bestRank ]
        previousRankBounds = rankBoundIndices[ bestRank ].slice()

        updateRankAnalysis(bestRank, boundId)
    })

    it("updates the count of bounds with this rank as their best rank", () => {
        expect(rankCounts[ bestRank ]).toBe(previousRankAnalysis + 1 as Count<Rank<AnalyzedEvent>>)
    })

    it("updates the rank to include this bound in the list of bounds with it as their best rank", () => {
        expect(rankBoundIndices[ bestRank ]).toEqual(previousRankBounds.concat([boundId]))
    })
})
