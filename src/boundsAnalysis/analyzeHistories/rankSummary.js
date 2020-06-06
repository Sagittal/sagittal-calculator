const rankSummary = [
    0, 0, 0, 0, 0, 0, 0, 0, 0,
]

const rankBounds = [
    [], [], [], [], [], [], [], [], [],
]

const updateRankSummary = (bestRank, datumIndex) => {
    rankSummary[bestRank] += 1
    rankBounds[bestRank].push(datumIndex)
}

module.exports = {
    rankSummary,
    rankBounds,
    updateRankSummary,
}
