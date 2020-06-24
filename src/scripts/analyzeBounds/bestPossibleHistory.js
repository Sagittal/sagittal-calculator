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
            (analyzedHistory.score === bestPossibleHistory.score && analyzedHistory.distance < bestPossibleHistory.distance) // TODO: well this is literally only for the two tie-breakers where two ina midpoints occur between comma pairs, just to decide between which two - is it by distance, or ina-distance ?
        ) {
            bestPossibleHistory = analyzedHistory
        }
    })

    return bestPossibleHistory
}

module.exports = {
    computeBestPossibleHistory,
}
