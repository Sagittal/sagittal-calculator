const RANKS = {
    INA: 0,
    MEAN: 1,
    SIZE: 2,
}

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

export {
    RANKS,
    rankCounts,
    rankBoundIndices,
    updateRankAnalysis,
}
