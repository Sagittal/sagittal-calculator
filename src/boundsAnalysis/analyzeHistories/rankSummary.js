const rankSummary = [
    0, 0, 0, 0, 0, 0, 0, 0, 0,
]

const rankBounds = [
    [], [], [], [], [], [], [], [], [],
]

const updateRankSummary = (bestRank, boundIndex) => {
    rankSummary[bestRank] += 1
    rankBounds[bestRank].push(boundIndex)
}

module.exports = {
    rankSummary,
    rankBounds,
    updateRankSummary,
}
