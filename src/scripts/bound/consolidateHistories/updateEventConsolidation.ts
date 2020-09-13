import { computeDoEventsContainEvent } from "./doEventsContainEvent"
import { EventConsolidation, UpdateEventConsolidationOptions } from "./types"

const updateEventConsolidation = (
    eventConsolidation: EventConsolidation,
    { nextEventAnalysis, historyAnalysis, eventAnalysis, bestPossibleHistory }: UpdateEventConsolidationOptions,
): void => {
    if (nextEventAnalysis && !eventConsolidation.nextEvents.includes(nextEventAnalysis.name)) {
        eventConsolidation.nextEvents.push(nextEventAnalysis.name)
    }

    if (historyAnalysis.possible) {
        eventConsolidation.isPossibleHistoryMember = true
    }
    if (computeDoEventsContainEvent(bestPossibleHistory.events, eventConsolidation)) {
        eventConsolidation.isBestPossibleHistoryMember = true
    }
    if (historyAnalysis.rank < eventConsolidation.rankOfBestRankedMemberHistory) {
        eventConsolidation.rankOfBestRankedMemberHistory = historyAnalysis.rank
    }
    if (eventAnalysis.rank < eventConsolidation.rankOfBestRankedEventInAnyMemberHistory) {
        eventConsolidation.rankOfBestRankedEventInAnyMemberHistory = eventAnalysis.rank
    }
}

export {
    updateEventConsolidation,
}
