import {Decimal, Rank} from "@sagittal/general"
import {BoundType} from "@sagittal/system"
import {BoundEventAnalysis} from "../history"
import {RANKS} from "../ranks"
import {BoundEventConsolidation} from "./types"

const computeInitialEventConsolidation = (
    boundEventAnalysis: BoundEventAnalysis,
): BoundEventConsolidation => ({
    jiNotationLevel: boundEventAnalysis.jiNotationLevel,
    boundType: boundEventAnalysis.boundType,
    name: boundEventAnalysis.name,
    pitch: boundEventAnalysis.pitch,
    exact: boundEventAnalysis.exact,
    isPossibleBoundHistoryMember: false,
    isBestPossibleBoundHistoryMember: false,
    nextBoundEvents: [],
    rankOfBestRankedMemberHistory: Object.keys(RANKS).length as Decimal<{integer: true}> & Rank<BoundType>,
    rankOfBestRankedEventInAnyMemberHistory: Object.keys(RANKS).length as Decimal<{integer: true}> & Rank<BoundType>,
})

export {
    computeInitialEventConsolidation,
}
