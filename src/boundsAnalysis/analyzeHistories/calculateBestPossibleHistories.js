const calculateBestPossibleHistories = analyzedHistories => {
    let bestScore = Infinity
    analyzedHistories.forEach(analyzedHistory => {
        if (analyzedHistory.score < bestScore) {
            bestScore = analyzedHistory.score
        }
    })

    return analyzedHistories.filter(analyzedHistory => analyzedHistory.score === bestScore)
}

module.exports = {
    calculateBestPossibleHistories,
}
