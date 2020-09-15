import { count, Multiplier } from "../../../general"
import { JiNotationBound, Tina, TINA } from "../../../sagittal"
import { consolidateHistories } from "../consolidateHistories"
import { History } from "../histories"
import { analyzeHistory, HistoryAnalysis } from "../history"
import { computeBestPossibleHistory } from "./bestPossibleHistory"
import { computeInitialPosition } from "./initialPosition"
import { updateJiNotationLevelAnalysis } from "./levels"
import { updateRankAnalysis } from "./ranks"
import { JiNotationBoundAnalysis } from "./types"

const analyzeJiNotationBound = (histories: History[], jiNotationBound: JiNotationBound): JiNotationBoundAnalysis => {
    const initialPosition = computeInitialPosition(jiNotationBound)
    const historyAnalyses = histories
        .map((history: History): HistoryAnalysis => analyzeHistory(history, jiNotationBound, initialPosition))

    const possibleHistories = historyAnalyses
        .filter((historyAnalysis: HistoryAnalysis): boolean => historyAnalysis.possible)
    const possibleHistoryCount = count(possibleHistories)
    const bestPossibleHistory = computeBestPossibleHistory(possibleHistories)
    const bestRank = bestPossibleHistory.rank
    const bestPossibleHistoryTotalDistance = bestPossibleHistory.totalDistance
    const bestPossibleHistoryTotalInaDistance = bestPossibleHistory.totalInaDistance

    const initialPositionTinaDistance = (jiNotationBound.cents - initialPosition) / TINA as Multiplier<Tina>

    updateRankAnalysis(bestRank, jiNotationBound.id)
    updateJiNotationLevelAnalysis(bestPossibleHistory)

    const historyConsolidation = consolidateHistories(historyAnalyses, bestPossibleHistory)

    return {
        initialPosition,
        possibleHistoryCount,
        bestPossibleHistory,
        bestRank,
        bestPossibleHistoryTotalDistance,
        bestPossibleHistoryTotalInaDistance,
        initialPositionTinaDistance,
        historyConsolidation: historyConsolidation,
    }
}

export {
    analyzeJiNotationBound,
}
