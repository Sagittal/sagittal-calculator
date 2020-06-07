const rankCounts = [
    0, 0, 0, 0, 0, 0, 0, 0, 0,
]

const rankBoundIndices = [
    [], [], [], [], [], [], [], [], [],
]

const updateRankSummary = (bestRank, boundIndex) => {
    rankCounts[bestRank] += 1
    rankBoundIndices[bestRank].push(boundIndex)
}

module.exports = {
    rankCounts,
    rankBoundIndices,
    updateRankSummary,
}
