const rankCounts = [
    0, 0, 0, 0, 0, 0, 0,
]

const rankBoundIndices = [
    [], [], [], [], [], [], [],
]

const updateRankAnalysis = (bestRank, boundIndex) => {
    rankCounts[bestRank] += 1
    rankBoundIndices[bestRank].push(boundIndex)
}

module.exports = {
    rankCounts,
    rankBoundIndices,
    updateRankAnalysis,
}
