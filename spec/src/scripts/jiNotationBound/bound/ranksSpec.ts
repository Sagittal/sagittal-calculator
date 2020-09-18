import { Count, deepClone, Id, Integer, Rank } from "../../../../../src/general"
import { JiNotationBound } from "../../../../../src/sagittal/notations/ji"
import { updateRankAnalysis } from "../../../../../src/scripts/jiNotationBound/bound/ranks"
import { rankBoundIndices, rankCounts } from "../../../../../src/scripts/jiNotationBound/globals"
import { EventType } from "../../../../../src/scripts/jiNotationBound/histories"
import { RANKS } from "../../../../../src/scripts/jiNotationBound/ranks"

describe("updateRankAnalysis", (): void => {
    const bestRank: Integer & Rank<EventType> = RANKS[ EventType.SIZE_CATEGORY_BOUND ]
    const jiNotationBoundId: Id<JiNotationBound> = 88 as Id<JiNotationBound>

    let previousRankAnalysis: number
    let previousRankBounds: Id<JiNotationBound>[]

    beforeEach((): void => {
        previousRankAnalysis = rankCounts[ bestRank ]
        previousRankBounds = deepClone(rankBoundIndices[ bestRank ])

        updateRankAnalysis(bestRank, jiNotationBoundId)
    })

    it("updates the count of JI notation bounds with this rank as their best rank", (): void => {
        expect(rankCounts[ bestRank ]).toBe(previousRankAnalysis + 1 as Count<Integer & Rank<EventType>>)
    })

    it(
        "updates the rank to include this JI notation bound in the list of JI notation bounds with it as their best rank",
        (): void => {
            expect(rankBoundIndices[ bestRank ]).toEqual(previousRankBounds.concat([jiNotationBoundId]))
        },
    )
})
