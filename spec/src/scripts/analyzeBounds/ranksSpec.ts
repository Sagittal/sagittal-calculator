import { rankBoundIndices, rankCounts, updateRankAnalysis } from "../../../../src/scripts/analyzeBounds/ranks"
import { BoundId } from "../../../../src/notations/ji/types"
import { EventRank } from "../../../../src/scripts/analyzeBounds/types"

describe("updateRankAnalysis", () => {
    const bestRank: EventRank = 2 as EventRank
    const boundId: BoundId = 88 as BoundId

    let previousRankAnalysis: number
    let previousRankBounds: BoundId[]

    beforeAll(() => {
        previousRankAnalysis = rankCounts[ bestRank ]
        previousRankBounds = rankBoundIndices[ bestRank ].slice()

        updateRankAnalysis(bestRank, boundId)
    })

    it("updates the count of bounds with this rank as their best rank", () => {
        expect(rankCounts[ bestRank ]).toBe(previousRankAnalysis + 1)
    })

    it("updates the rank to include this bound in the list of bounds with it as their best rank", () => {
        expect(rankBoundIndices[ bestRank ]).toEqual(previousRankBounds.concat([boundId]))
    })
})
