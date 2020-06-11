const computeBestPossibleHistory = analyzedHistories => {
    let bestScore = Infinity
    let bestPossibleHistory

    if (analyzedHistories.some(analyzedHistory => !analyzedHistory.exact)) {
        let exactHistories = []
        analyzedHistories.forEach(analyzedHistory => {
            if (analyzedHistory.exact) {
                exactHistories.push(analyzedHistory)
            }
        })
        if (exactHistories.length) return computeBestPossibleHistory(exactHistories)
    }

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
    computeBestPossibleHistory,
}
