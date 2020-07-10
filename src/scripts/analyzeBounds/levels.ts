const levelsBestHistoryRanks = {}
const levelsBestCumulativeHistoryRanks = {}

const updateLevelAnalysis = bestPossibleHistory => {
    let cumulativeRank = 0
    bestPossibleHistory.events.forEach(event => {
        const {level, rank} = event

        if (rank > cumulativeRank) {
            cumulativeRank = rank
        }

        if (!levelsBestHistoryRanks[level]) levelsBestHistoryRanks[level] = []
        if (!levelsBestHistoryRanks[level][rank]) levelsBestHistoryRanks[level][rank] = 0
        levelsBestHistoryRanks[level][rank] += 1

        if (!levelsBestCumulativeHistoryRanks[level]) levelsBestCumulativeHistoryRanks[level] = []
        if (!levelsBestCumulativeHistoryRanks[level][cumulativeRank]) levelsBestCumulativeHistoryRanks[level][cumulativeRank] = 0
        levelsBestCumulativeHistoryRanks[level][cumulativeRank] += 1
    })
}

export {
    levelsBestHistoryRanks,
    levelsBestCumulativeHistoryRanks,
    updateLevelAnalysis,
}
