import { Integer, Rank } from "../../../general"
import { BoundType } from "../../../sagittal"
import { BoundEventAnalysis } from "../history"
import { RANKS } from "../ranks"
import { BoundEventConsolidation } from "./types"

const computeInitialEventConsolidation = (boundEventAnalysis: BoundEventAnalysis): BoundEventConsolidation => ({
    jiNotationLevel: boundEventAnalysis.jiNotationLevel,
    boundType: boundEventAnalysis.boundType,
    name: boundEventAnalysis.name,
    cents: boundEventAnalysis.cents,
    exact: boundEventAnalysis.exact,
    isPossibleBoundHistoryMember: false,
    isBestPossibleBoundHistoryMember: false,
    nextBoundEvents: [],
    rankOfBestRankedMemberHistory: Object.keys(RANKS).length as Integer & Rank<BoundType>,
    rankOfBestRankedEventInAnyMemberHistory: Object.keys(RANKS).length as Integer & Rank<BoundType>,
})

export {
    computeInitialEventConsolidation,
}
