import { Count, Id, Integer, Rank } from "../../../../../src/general"
import { shallowClone } from "../../../../../src/general/code"
import { JiNotationBound } from "../../../../../src/sagittal/notations/ji"
import {
    rankBoundIndices,
    rankCounts,
    updateRankAnalysis,
} from "../../../../../src/scripts/jiNotationBound/bound/ranks"
import { EventAnalysis } from "../../../../../src/scripts/jiNotationBound/history"

describe("updateRankAnalysis", (): void => {
    const bestRank: Integer & Rank<EventAnalysis> = 2 as Integer & Rank<EventAnalysis>
    const jiNotationBoundId: Id<JiNotationBound> = 88 as Id<JiNotationBound>

    let previousRankAnalysis: number
    let previousRankBounds: Id<JiNotationBound>[]

    beforeAll((): void => {
        previousRankAnalysis = rankCounts[ bestRank ]
        previousRankBounds = shallowClone(rankBoundIndices[ bestRank ])

        updateRankAnalysis(bestRank, jiNotationBoundId)
    })

    it("updates the count of JI notation bounds with this rank as their best rank", (): void => {
        expect(rankCounts[ bestRank ]).toBe(previousRankAnalysis + 1 as Count<Rank<EventAnalysis>>)
    })

    it(
        "updates the rank to include this JI notation bound in the list of JI notation bounds with it as their best rank",
        (): void => {
            expect(rankBoundIndices[ bestRank ]).toEqual(previousRankBounds.concat([jiNotationBoundId]))
        },
    )
})
