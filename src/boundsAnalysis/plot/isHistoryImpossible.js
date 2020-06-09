const computeIsHistoryImpossible = history => {
    if (!history.length) {
        return false
    }

    const mostRecentEvent = history[history.length - 1]

    return mostRecentEvent.type === "IMPOSSIBLE"
}

module.exports = {
    computeIsHistoryImpossible,
}
