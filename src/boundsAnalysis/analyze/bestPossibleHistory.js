const computeBestPossibleHistory = analyzedHistories => {
    let bestPossibleHistory = {score: Infinity}

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
        if (
            analyzedHistory.score < bestPossibleHistory.score ||
            (analyzedHistory.score === bestPossibleHistory.score && analyzedHistory.sleda < bestPossibleHistory.sleda)
        ) {
            bestPossibleHistory = analyzedHistory
        }
    })

    return bestPossibleHistory
}

module.exports = {
    computeBestPossibleHistory,
}
