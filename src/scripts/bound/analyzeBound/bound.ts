import { Count, Multiplier } from "../../../general"
import { Bound, Tina, TINA } from "../../../sagittal"
import { analyzeHistory, HistoryAnalysis } from "../analyzeHistory"
import { consolidateHistories } from "../consolidateHistories"
import { History } from "../histories"
import { computeBestPossibleHistory } from "./bestPossibleHistory"
import { computeInitialPosition } from "./initialPosition"
import { updateLevelAnalysis } from "./levels"
import { updateRankAnalysis } from "./ranks"
import { BoundAnalysis } from "./types"

const analyzeBound = (histories: History[], bound: Bound): BoundAnalysis => {
    const initialPosition = computeInitialPosition(bound)
    const historyAnalyses = histories.map(history => analyzeHistory(history, bound, initialPosition))

    const possibleHistories = historyAnalyses.filter(historyAnalysis => historyAnalysis.possible)
    const possibleHistoryCount = possibleHistories.length as Count<HistoryAnalysis>
    const bestPossibleHistory = computeBestPossibleHistory(possibleHistories)
    const bestRank = bestPossibleHistory.rank
    const bestPossibleHistoryTotalDistance = bestPossibleHistory.totalDistance
    const bestPossibleHistoryTotalInaDistance = bestPossibleHistory.totalInaDistance

    const initialPositionTinaDistance = (bound.cents - initialPosition) / TINA as Multiplier<Tina>

    updateRankAnalysis(bestRank, bound.id)
    updateLevelAnalysis(bestPossibleHistory)

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
    analyzeBound,
}
