import { Decimal, Rank } from "../../../general"
import { BoundType } from "../../../sagittal"
import { BoundClassEventAnalysis } from "../history"
import { RANKS } from "../ranks"
import { BoundClassEventConsolidation } from "./types"

const computeInitialEventConsolidation = (
    boundClassEventAnalysis: BoundClassEventAnalysis,
): BoundClassEventConsolidation => ({
    jiNotationLevel: boundClassEventAnalysis.jiNotationLevel,
    boundType: boundClassEventAnalysis.boundType,
    name: boundClassEventAnalysis.name,
    pitch: boundClassEventAnalysis.pitch,
    exact: boundClassEventAnalysis.exact,
    isPossibleBoundClassHistoryMember: false,
    isBestPossibleBoundClassHistoryMember: false,
    nextBoundClassEvents: [],
    rankOfBestRankedMemberHistory: Object.keys(RANKS).length as Decimal<{ integer: true }> & Rank<BoundType>,
    rankOfBestRankedEventInAnyMemberHistory: Object.keys(RANKS).length as Decimal<{ integer: true }> & Rank<BoundType>,
})

export {
    computeInitialEventConsolidation,
}
