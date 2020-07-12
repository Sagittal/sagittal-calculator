import { rankBoundIndices, rankCounts, updateRankAnalysis } from "../../../../src/scripts/analyzeBounds/ranks"
import { EventRank } from "../../../../src/scripts/analyzeBounds/types"
import { Count, Id } from "../../../../src/utilities/types"
import { Bound } from "../../../../src/notations/ji/types"

describe("updateRankAnalysis", () => {
    const bestRank: EventRank = 2 as EventRank
    const boundId: Id<Bound> = 88 as Id<Bound>

    let previousRankAnalysis: number
    let previousRankBounds: Id<Bound>[]

    beforeAll(() => {
        previousRankAnalysis = rankCounts[ bestRank ]
        previousRankBounds = rankBoundIndices[ bestRank ].slice()

        updateRankAnalysis(bestRank, boundId)
    })

    it("updates the count of bounds with this rank as their best rank", () => {
        expect(rankCounts[ bestRank ]).toBe(previousRankAnalysis + 1 as Count<EventRank>)
    })

    it("updates the rank to include this bound in the list of bounds with it as their best rank", () => {
        expect(rankBoundIndices[ bestRank ]).toEqual(previousRankBounds.concat([boundId]))
    })
})
