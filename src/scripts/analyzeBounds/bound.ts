import { computeConsolidatedHistories } from "./consolidatedHistories"
import { analyzeHistory } from "./history"
import { computeBestPossibleHistory } from "./bestPossibleHistory"
import { TINA } from "../../notations/ji/intervals"
import * as rankAnalysis from "./ranks"
import * as levelAnalysis from "./levels"
import { computeInitialPosition } from "./initialPosition"
import { AnalyzedBound, History } from "./types"
import { Bound } from "../../notations/ji/types"
import { Count, Proportion } from "../../utilities/types"

const analyzeBound = (histories: History[], bound: Bound): AnalyzedBound => {
    const initialPosition = computeInitialPosition(bound)
    const analyzedHistories = histories.map(history => analyzeHistory(history, bound, initialPosition))

    const possibleHistories = analyzedHistories.filter(analyzedHistory => analyzedHistory.possible)
    const possibleHistoryCount = possibleHistories.length as Count
    const bestPossibleHistory = computeBestPossibleHistory(possibleHistories)
    const bestRank = bestPossibleHistory.rank
    const bestPossibleHistoryDistance = bestPossibleHistory.distance
    const bestPossibleHistoryInaDistance = bestPossibleHistory.inaDistance

    const initialPositionTinaDifference = (bound.position - initialPosition) / TINA as Proportion<"Tina">

    rankAnalysis.updateRankAnalysis(bestRank, bound.id)
    levelAnalysis.updateLevelAnalysis(bestPossibleHistory)

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
