const computeHistoryPosition = history => {
    const mostRecentEvent = history[history.length - 1]

    return mostRecentEvent.position
}

module.exports = {
    computeHistoryPosition,
}
