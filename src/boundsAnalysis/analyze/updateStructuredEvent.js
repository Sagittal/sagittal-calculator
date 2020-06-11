const {computeDoEventsContainEvent} = require("./doEventsContainEvent")

const updateStructuredEvent = (structuredEvent, {nextAnalyzedEvent, analyzedHistory, analyzedEvent, bestPossibleHistory}) => {
    if (nextAnalyzedEvent && !structuredEvent.nextEvents.includes(nextAnalyzedEvent.name)) {
        structuredEvent.nextEvents.push(nextAnalyzedEvent.name)
    }

    if (analyzedHistory.possible) {
        structuredEvent.isPossibleHistoryMember = true
    }
    if (computeDoEventsContainEvent(bestPossibleHistory.events, structuredEvent)) {
        structuredEvent.isBestPossibleHistoryMember = true
    }
    if (analyzedHistory.rank < structuredEvent.rankOfBestRankedMemberHistory) {
        structuredEvent.rankOfBestRankedMemberHistory = analyzedHistory.rank
    }
    if (analyzedEvent.rank < structuredEvent.rankOfBestRankedEventInAnyMemberHistory) {
        structuredEvent.rankOfBestRankedEventInAnyMemberHistory = analyzedEvent.rank
    }
}

module.exports = {
    updateStructuredEvent,
}
