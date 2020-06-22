const rankCounts = [
    0, 0, 0,
]

const rankBoundIndices = [
    [], [], [],
]

const updateRankAnalysis = (bestRank, boundId) => {
    rankCounts[bestRank] += 1
    rankBoundIndices[bestRank].push(boundId)
}

module.exports = {
    rankCounts,
    rankBoundIndices,
    updateRankAnalysis,
}
