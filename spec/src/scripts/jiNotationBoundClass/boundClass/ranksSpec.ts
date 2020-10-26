import {Count, Decimal, deepClone, Rank} from "../../../../../src/general"
import {BoundClassId} from "../../../../../src/sagittal/bound"
import {BoundType} from "../../../../../src/sagittal/notations"
import {updateRankAnalysis} from "../../../../../src/scripts/jiNotationBoundClass/boundClass/ranks"
import {rankBoundClassIndices, rankCounts} from "../../../../../src/scripts/jiNotationBoundClass/globals"
import {RANKS} from "../../../../../src/scripts/jiNotationBoundClass/ranks"

describe("updateRankAnalysis", (): void => {
    const bestRank: Decimal<{integer: true}> & Rank<BoundType> = RANKS[BoundType.SIZE_CATEGORY_BOUND]
    const boundClassId = BoundClassId.MINA_84

    let previousRankAnalysis: number
    let previousRankBoundClassIndices: BoundClassId[]

    beforeEach((): void => {
        previousRankAnalysis = rankCounts[bestRank]
        previousRankBoundClassIndices = deepClone(rankBoundClassIndices[bestRank])

        updateRankAnalysis(bestRank, boundClassId)
    })

    it("updates the count of JI notation bound classes with this rank as their best rank", (): void => {
        expect(rankCounts[bestRank])
            .toBe(previousRankAnalysis + 1 as Count<Decimal<{integer: true}> & Rank<BoundType>>)
    })

    it("updates the rank to include this JI notation bound class in the list of JI notation bound classes with it as their best rank            ", (): void => {
        expect(rankBoundClassIndices[bestRank])
            .toEqual(previousRankBoundClassIndices.concat([boundClassId]))
    })
})
