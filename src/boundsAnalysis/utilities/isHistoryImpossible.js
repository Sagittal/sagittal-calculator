const isHistoryImpossible = events => {
    if (!events.length) {
        return false
    }

    const mostRecentEvent = events[events.length - 1]

    return mostRecentEvent.type === "impossible"
}

module.exports = {
    isHistoryImpossible,
}
