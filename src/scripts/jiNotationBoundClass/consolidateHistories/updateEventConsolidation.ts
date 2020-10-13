import { isBoundClassEventContained } from "./doEventsContainEvent"
import { BoundClassEventConsolidation, UpdateEventConsolidationOptions } from "./types"

const updateEventConsolidation = (
    boundClassEventConsolidation: BoundClassEventConsolidation,
    options: UpdateEventConsolidationOptions,
): void => {
    const {
        nextBoundClassEventAnalysis,
        boundClassHistoryAnalysis,
        boundClassEventAnalysis,
        bestPossibleBoundClassHistoryAnalysis,
    } = options

    if (
        nextBoundClassEventAnalysis
        && !boundClassEventConsolidation.nextBoundClassEvents.includes(nextBoundClassEventAnalysis.name)
    ) {
        boundClassEventConsolidation.nextBoundClassEvents.push(nextBoundClassEventAnalysis.name)
    }

    if (boundClassHistoryAnalysis.possible) {
        boundClassEventConsolidation.isPossibleBoundClassHistoryMember = true
    }
    if (
        isBoundClassEventContained(
            bestPossibleBoundClassHistoryAnalysis.boundClassEventAnalyses,
            boundClassEventConsolidation,
        )
    ) {
        boundClassEventConsolidation.isBestPossibleBoundClassHistoryMember = true
    }
    if (boundClassHistoryAnalysis.rank < boundClassEventConsolidation.rankOfBestRankedMemberHistory) {
        boundClassEventConsolidation.rankOfBestRankedMemberHistory = boundClassHistoryAnalysis.rank
    }
    if (boundClassEventAnalysis.rank < boundClassEventConsolidation.rankOfBestRankedEventInAnyMemberHistory) {
        boundClassEventConsolidation.rankOfBestRankedEventInAnyMemberHistory = boundClassEventAnalysis.rank
    }
}

export {
    updateEventConsolidation,
}
