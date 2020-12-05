import {Decimal, Name, Rank} from "@sagittal/general"
import {BoundType, JiNotationBound, JiNotationLevelId} from "@sagittal/system"
import {BoundEvent} from "../histories"
import {BoundEventAnalysis, BoundHistoryAnalysis} from "../history"

interface BoundEventConsolidation extends BoundEvent {
    exact: boolean,
    isBestPossibleBoundHistoryMember: boolean,
    isPossibleBoundHistoryMember: boolean,
    nextBoundEvents: Array<Name<JiNotationBound>>,
    rankOfBestRankedEventInAnyMemberHistory: Decimal<{integer: true}> & Rank<BoundType>,
    rankOfBestRankedMemberHistory: Decimal<{integer: true}> & Rank<BoundType>,
}

type BoundHistoryConsolidation = Partial<Record<JiNotationLevelId, BoundEventConsolidation[]>>

interface UpdateEventConsolidationOptions {
    boundEventAnalysis: BoundEventAnalysis
    boundHistoryAnalysis: BoundHistoryAnalysis,
    bestPossibleBoundHistoryAnalysis: BoundHistoryAnalysis,
    nextBoundEventAnalysis?: BoundEventAnalysis,
}

export {
    BoundEventConsolidation,
    BoundHistoryConsolidation,
    UpdateEventConsolidationOptions,
}
