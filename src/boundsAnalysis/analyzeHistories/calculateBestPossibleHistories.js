const calculateBestPossibleHistories = analyzedHistories => {
    let bestRank = 8
    analyzedHistories.forEach(analyzedHistory => {
        if (analyzedHistory.rank < bestRank) {
            bestRank = analyzedHistory.rank
        }
    })

    return analyzedHistories.filter(analyzedHistory => analyzedHistory.rank === bestRank)
}

module.exports = {
    calculateBestPossibleHistories,
}
