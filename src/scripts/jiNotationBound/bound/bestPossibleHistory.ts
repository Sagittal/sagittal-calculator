import { HistoryAnalysis, Score } from "../history"

const computeBestPossibleHistory = (historyAnalyses: HistoryAnalysis[]): HistoryAnalysis => {
    let bestPossibleHistory: HistoryAnalysis = { score: Infinity as Score } as HistoryAnalysis

    if (historyAnalyses.some((historyAnalysis: HistoryAnalysis): boolean => !historyAnalysis.exact)) {
        const exactHistories: HistoryAnalysis[] = []
        historyAnalyses.forEach((historyAnalysis: HistoryAnalysis): void => {
            if (historyAnalysis.exact) {
                exactHistories.push(historyAnalysis)
            }
        })
        if (exactHistories.length) {
            return computeBestPossibleHistory(exactHistories)
        }
    }

    historyAnalyses.forEach((historyAnalysis: HistoryAnalysis): void => {
        if (
            historyAnalysis.score < bestPossibleHistory.score ||
            (
                historyAnalysis.score === bestPossibleHistory.score &&
                historyAnalysis.totalDistance < bestPossibleHistory.totalDistance
            )
        ) {
            bestPossibleHistory = historyAnalysis
        }
    })

    return bestPossibleHistory
}

export {
    computeBestPossibleHistory,
}
