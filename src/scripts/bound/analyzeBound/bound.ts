import { Count, Multiplier } from "../../../general"
import { Bound, Tina, TINA } from "../../../sagittal"
import { AnalyzedHistory, computeAnalyzedHistory } from "../analyzedHistory"
import { computeConsolidatedHistories } from "../consolidatedHistories"
import { History } from "../histories"
import { computeBestPossibleHistory } from "./bestPossibleHistory"
import { computeInitialPosition } from "./initialPosition"
import { updateLevelAnalysis } from "./levels"
import { updateRankAnalysis } from "./ranks"
import { AnalyzedBound } from "./types"

const analyzeBound = (histories: History[], bound: Bound): AnalyzedBound => {
    const initialPosition = computeInitialPosition(bound)
    const analyzedHistories = histories.map(history => computeAnalyzedHistory(history, bound, initialPosition))

    const possibleHistories = analyzedHistories.filter(analyzedHistory => analyzedHistory.possible)
    const possibleHistoryCount = possibleHistories.length as Count<AnalyzedHistory>
    const bestPossibleHistory = computeBestPossibleHistory(possibleHistories)
    const bestRank = bestPossibleHistory.rank
    const bestPossibleHistoryTotalDistance = bestPossibleHistory.totalDistance
    const bestPossibleHistoryTotalInaDistance = bestPossibleHistory.totalInaDistance

    const initialPositionTinaDistance = (bound.cents - initialPosition) / TINA as Multiplier<Tina>

    updateRankAnalysis(bestRank, bound.id)
    updateLevelAnalysis(bestPossibleHistory)

    const consolidatedHistories = computeConsolidatedHistories(analyzedHistories, bestPossibleHistory)

    return {
        initialPosition,
        possibleHistoryCount,
        bestPossibleHistory,
        bestRank,
        bestPossibleHistoryTotalDistance,
        bestPossibleHistoryTotalInaDistance,
        initialPositionTinaDistance,
        consolidatedHistories,
    }
}

export {
    analyzeBound,
}
