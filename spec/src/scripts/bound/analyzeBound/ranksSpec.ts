import { Count, Id, Integer, Rank } from "../../../../../src/general"
import { shallowClone } from "../../../../../src/general/code"
import { Bound } from "../../../../../src/sagittal/notations/ji"
import { rankBoundIndices, rankCounts, updateRankAnalysis } from "../../../../../src/scripts/bound/analyzeBound/ranks"
import { EventAnalysis } from "../../../../../src/scripts/bound/analyzeHistory"

describe("updateRankAnalysis", () => {
    const bestRank: Integer & Rank<EventAnalysis> = 2 as Integer & Rank<EventAnalysis>
    const boundId: Id<Bound> = 88 as Id<Bound>

    let previousRankAnalysis: number
    let previousRankBounds: Id<Bound>[]

    beforeAll(() => {
        previousRankAnalysis = rankCounts[ bestRank ]
        previousRankBounds = shallowClone(rankBoundIndices[ bestRank ])

        updateRankAnalysis(bestRank, boundId)
    })

    it("updates the count of bounds with this rank as their best rank", () => {
        expect(rankCounts[ bestRank ]).toBe(previousRankAnalysis + 1 as Count<Rank<EventAnalysis>>)
    })

    it("updates the rank to include this bound in the list of bounds with it as their best rank", () => {
        expect(rankBoundIndices[ bestRank ]).toEqual(previousRankBounds.concat([boundId]))
    })
})
