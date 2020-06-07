const calculateBestPossibleHistory = analyzedHistories => {
    let bestScore = Infinity
    let bestPossibleHistory

    analyzedHistories.forEach(analyzedHistory => {
        if (analyzedHistory.score === bestScore) {
            throw new Error(`It should not be possible for two histories to get the same score (${bestScore}). Please revise the scoring method.`)
        } else if (analyzedHistory.score < bestScore) {
            bestScore = analyzedHistory.score
            bestPossibleHistory = analyzedHistory
        }
    })

    return bestPossibleHistory
}

module.exports = {
    calculateBestPossibleHistory,
}
