import { AnalyzedHistory, Score } from "../analyzedHistory"

const computeBestPossibleHistory = (analyzedHistories: AnalyzedHistory[]): AnalyzedHistory => {
    let bestPossibleHistory: AnalyzedHistory = { score: Infinity as Score } as AnalyzedHistory

    if (analyzedHistories.some(analyzedHistory => !analyzedHistory.exact)) {
        const exactHistories: AnalyzedHistory[] = []
        analyzedHistories.forEach(analyzedHistory => {
            if (analyzedHistory.exact) {
                exactHistories.push(analyzedHistory)
            }
        })
        if (exactHistories.length) {
            return computeBestPossibleHistory(exactHistories)
        }
    }

    analyzedHistories.forEach(analyzedHistory => {
        if (
            analyzedHistory.score < bestPossibleHistory.score ||
            (
                analyzedHistory.score === bestPossibleHistory.score &&
                analyzedHistory.totalDistance < bestPossibleHistory.totalDistance
            )
        ) {
            bestPossibleHistory = analyzedHistory
        }
    })

    return bestPossibleHistory
}

export {
    computeBestPossibleHistory,
}
