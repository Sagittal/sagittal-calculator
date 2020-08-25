import { Count, Proportion } from "../../general"
import { Bound, Tina, TINA } from "../../notations"
import { computeBestPossibleHistory } from "./bestPossibleHistory"
import { computeConsolidatedHistories } from "./consolidatedHistories"
import { analyzeHistory } from "./history"
import { computeInitialPosition } from "./initialPosition"
import { updateLevelAnalysis } from "./levels"
import { updateRankAnalysis } from "./ranks"
import { AnalyzedBound, AnalyzedHistory, History } from "./types"

const analyzeBound = (histories: History[], bound: Bound): AnalyzedBound => {
    const initialPosition = computeInitialPosition(bound)
    const analyzedHistories = histories.map(history => analyzeHistory(history, bound, initialPosition))

    const possibleHistories = analyzedHistories.filter(analyzedHistory => analyzedHistory.possible)
    const possibleHistoryCount = possibleHistories.length as Count<AnalyzedHistory>
    const bestPossibleHistory = computeBestPossibleHistory(possibleHistories)
    const bestRank = bestPossibleHistory.rank
    const bestPossibleHistoryDistance = bestPossibleHistory.distance
    const bestPossibleHistoryInaDistance = bestPossibleHistory.inaDistance

    const initialPositionTinaDifference = (bound.cents - initialPosition) / TINA as Proportion<Tina>

    updateRankAnalysis(bestRank, bound.id)
    updateLevelAnalysis(bestPossibleHistory)

    const consolidatedHistories = computeConsolidatedHistories(analyzedHistories, bestPossibleHistory)

    return {
        initialPosition,
        possibleHistoryCount,
        bestPossibleHistory,
        bestRank,
        bestPossibleHistoryDistance,
        bestPossibleHistoryInaDistance,
        initialPositionTinaDifference,
        consolidatedHistories,
    }
}

export {
    analyzeBound,
}
