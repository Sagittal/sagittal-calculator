const isHistoryImpossible = events => {
    if (!events.length) {
        return false
    }

    const mostRecentEvent = events[events.length - 1]

    return mostRecentEvent.includes("impossible")
}

module.exports = {
    isHistoryImpossible,
}
