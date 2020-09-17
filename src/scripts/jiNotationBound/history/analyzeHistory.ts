import { Cents, isCloseTo, Multiplier } from "../../../general"
import { JiNotationBound, Tina, TINA } from "../../../sagittal"
import { History } from "../histories"
import { analyzeEvents } from "./events"
import { computeExact } from "./exact"
import { computeHistoryPosition } from "./historyPosition"
import { computeHistoryTotalDistance } from "./historyTotalDistance"
import { computeHistoryTotalInaDistance } from "./historyTotalInaDistance"
import { computeRank } from "./rank"
import { computeScore } from "./score"
import { HistoryAnalysis } from "./types"

const analyzeHistory = (
    history: History,
    jiNotationBound: JiNotationBound,
    initialPosition: Cents,
): HistoryAnalysis => {
    const position = computeHistoryPosition(history)

    const eventAnalyses = analyzeEvents(history, jiNotationBound.cents)
    const rank = computeRank(eventAnalyses)
    const score = computeScore(eventAnalyses)
    const exact = computeExact(eventAnalyses)
    const totalDistance = computeHistoryTotalDistance(eventAnalyses)
    const totalInaDistance = computeHistoryTotalInaDistance(eventAnalyses)

    const positionError = position - jiNotationBound.cents
    const possible = isCloseTo(positionError, 0)

    let tinaError = positionError / TINA as Multiplier<Tina>
    if (isCloseTo(tinaError, 0 as Multiplier<Tina>)) {
        tinaError = 0 as Multiplier<Tina>
    }

    const initialPositionDistance = position - initialPosition
    const initialPositionTinaDistance = initialPositionDistance / TINA as Multiplier<Tina>

    return {
        eventAnalyses,
        cents: position,
        rank,
        score,
        totalDistance,
        totalInaDistance,
        exact,
        possible,
        tinaError,
        initialPositionTinaDistance,
    }
}

export {
    analyzeHistory,
}
