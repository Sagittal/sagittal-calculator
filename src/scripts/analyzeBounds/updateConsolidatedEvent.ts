import {computeDoEventsContainEvent} from "./doEventsContainEvent"

const updateConsolidatedEvent = (consolidatedEvent, {nextAnalyzedEvent, analyzedHistory, analyzedEvent, bestPossibleHistory}) => {
    if (nextAnalyzedEvent && !consolidatedEvent.nextEvents.includes(nextAnalyzedEvent.name)) {
        consolidatedEvent.nextEvents.push(nextAnalyzedEvent.name)
    }

    if (analyzedHistory.possible) {
        consolidatedEvent.isPossibleHistoryMember = true
    }
    if (computeDoEventsContainEvent(bestPossibleHistory.events, consolidatedEvent)) {
        consolidatedEvent.isBestPossibleHistoryMember = true
    }
    if (analyzedHistory.rank < consolidatedEvent.rankOfBestRankedMemberHistory) {
        consolidatedEvent.rankOfBestRankedMemberHistory = analyzedHistory.rank
    }
    if (analyzedEvent.rank < consolidatedEvent.rankOfBestRankedEventInAnyMemberHistory) {
        consolidatedEvent.rankOfBestRankedEventInAnyMemberHistory = analyzedEvent.rank
    }
}

export {
    updateConsolidatedEvent,
}
