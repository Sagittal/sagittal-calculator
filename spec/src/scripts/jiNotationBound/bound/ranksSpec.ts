import { Count, deepClone, Id, IntegerDecimal, Rank } from "../../../../../src/general"
import { BoundType, JiNotationBound } from "../../../../../src/sagittal/notations/ji"
import { updateRankAnalysis } from "../../../../../src/scripts/jiNotationBound/bound/ranks"
import { rankBoundIndices, rankCounts } from "../../../../../src/scripts/jiNotationBound/globals"
import { RANKS } from "../../../../../src/scripts/jiNotationBound/ranks"

describe("updateRankAnalysis", (): void => {
    const bestRank: IntegerDecimal & Rank<BoundType> = RANKS[ BoundType.SIZE_CATEGORY_BOUND ]
    const jiNotationBoundId: Id<JiNotationBound> = 88 as Id<JiNotationBound>

    let previousRankAnalysis: number
    let previousRankBounds: Id<JiNotationBound>[]

    beforeEach((): void => {
        previousRankAnalysis = rankCounts[ bestRank ]
        previousRankBounds = deepClone(rankBoundIndices[ bestRank ])

        updateRankAnalysis(bestRank, jiNotationBoundId)
    })

    it("updates the count of JI notation bounds with this rank as their best rank", (): void => {
        expect(rankCounts[ bestRank ]).toBe(previousRankAnalysis + 1 as Count<IntegerDecimal & Rank<BoundType>>)
    })

    it(
        "updates the rank to include this JI notation bound in the list of JI notation bounds with it as their best rank",
        (): void => {
            expect(rankBoundIndices[ bestRank ]).toEqual(previousRankBounds.concat([jiNotationBoundId]))
        },
    )
})
