import {Decimal, Name, Rank} from "../../../general"
import {BoundType, JiNotationBound, JiNotationLevel} from "../../../sagittal"
import {BoundClassEvent} from "../histories"
import {BoundClassEventAnalysis, BoundClassHistoryAnalysis} from "../history"

interface BoundClassEventConsolidation extends BoundClassEvent {
    exact: boolean,
    isBestPossibleBoundClassHistoryMember: boolean,
    isPossibleBoundClassHistoryMember: boolean,
    nextBoundClassEvents: Array<Name<JiNotationBound>>,
    rankOfBestRankedEventInAnyMemberHistory: Decimal<{integer: true}> & Rank<BoundType>,
    rankOfBestRankedMemberHistory: Decimal<{integer: true}> & Rank<BoundType>,
}

type BoundClassHistoryConsolidation = Partial<Record<JiNotationLevel, BoundClassEventConsolidation[]>>

interface UpdateEventConsolidationOptions {
    boundClassEventAnalysis: BoundClassEventAnalysis
    boundClassHistoryAnalysis: BoundClassHistoryAnalysis,
    bestPossibleBoundClassHistoryAnalysis: BoundClassHistoryAnalysis,
    nextBoundClassEventAnalysis?: BoundClassEventAnalysis,
}

export {
    BoundClassEventConsolidation,
    BoundClassHistoryConsolidation,
    UpdateEventConsolidationOptions,
}
