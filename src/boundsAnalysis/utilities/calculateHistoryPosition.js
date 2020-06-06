const calculateHistoryPosition = history => {
    const mostRecentEvent = history[history.length - 1]

    return mostRecentEvent.position
}

module.exports = {
    calculateHistoryPosition,
}
