import {isBoundEventContained} from "./doEventsContainEvent"
import {BoundEventConsolidation, UpdateEventConsolidationOptions} from "./types"

const updateEventConsolidation = (
    boundEventConsolidation: BoundEventConsolidation,
    options: UpdateEventConsolidationOptions,
): void => {
    const {
        nextBoundEventAnalysis,
        boundHistoryAnalysis,
        boundEventAnalysis,
        bestPossibleBoundHistoryAnalysis,
    } = options

    if (
        nextBoundEventAnalysis
        && !boundEventConsolidation.nextBoundEvents.includes(nextBoundEventAnalysis.name)
    ) {
        boundEventConsolidation.nextBoundEvents.push(nextBoundEventAnalysis.name)
    }

    if (boundHistoryAnalysis.possible) {
        boundEventConsolidation.isPossibleBoundHistoryMember = true
    }
    if (
        isBoundEventContained(
            bestPossibleBoundHistoryAnalysis.boundEventAnalyses,
            boundEventConsolidation,
        )
    ) {
        boundEventConsolidation.isBestPossibleBoundHistoryMember = true
    }
    if (boundHistoryAnalysis.rank < boundEventConsolidation.rankOfBestRankedMemberHistory) {
        boundEventConsolidation.rankOfBestRankedMemberHistory = boundHistoryAnalysis.rank
    }
    if (boundEventAnalysis.rank < boundEventConsolidation.rankOfBestRankedEventInAnyMemberHistory) {
        boundEventConsolidation.rankOfBestRankedEventInAnyMemberHistory = boundEventAnalysis.rank
    }
}

export {
    updateEventConsolidation,
}
