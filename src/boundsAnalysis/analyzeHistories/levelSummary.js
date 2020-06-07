const levelsBestHistoryRanks = {}

const updateLevelSummary = bestPossibleHistory => {
    bestPossibleHistory.events.forEach((event, index) => {
        if (!levelsBestHistoryRanks[event.level]) levelsBestHistoryRanks[event.level] = {}
        if (!levelsBestHistoryRanks[event.level][event.rank]) levelsBestHistoryRanks[event.level][event.rank] = 0

        levelsBestHistoryRanks[event.level][event.rank] += 1
    })
}

module.exports = {
    levelsBestHistoryRanks,
    updateLevelSummary,
}
