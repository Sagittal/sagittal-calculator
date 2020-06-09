const updateStructuredEvent = (structuredEvent, {nextAnalyzedEvent, analyzedHistory, analyzedEvent}) => {
    if (nextAnalyzedEvent && !structuredEvent.nextEvents.includes(nextAnalyzedEvent.name)) {
        structuredEvent.nextEvents.push(nextAnalyzedEvent.name)
    }

    if (analyzedHistory.possible) {
        structuredEvent.isPossibleHistoryMember = true
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
