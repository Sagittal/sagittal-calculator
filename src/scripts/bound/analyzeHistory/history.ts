import { Cents, isCloseTo, Multiplier } from "../../../general"
import { Bound, Tina, TINA } from "../../../sagittal"
import { History } from "../histories"
import { analyzeEvents } from "./analyzeEvents"
import { computeExact } from "./exact"
import { computeHistoryPosition } from "./historyPosition"
import { computeHistoryTotalDistance } from "./historyTotalDistance"
import { computeHistoryTotalInaDistance } from "./historyTotalInaDistance"
import { computeRank } from "./rank"
import { computeScore } from "./score"
import { HistoryAnalysis } from "./types"

const analyzeHistory = (history: History, bound: Bound, initialPosition: Cents): HistoryAnalysis => {
    const position = computeHistoryPosition(history)

    const eventAnalyses = analyzeEvents(history, bound.cents)
    const rank = computeRank(eventAnalyses)
    const score = computeScore(eventAnalyses)
    const exact = computeExact(eventAnalyses)
    const totalDistance = computeHistoryTotalDistance(eventAnalyses)
    const totalInaDistance = computeHistoryTotalInaDistance(eventAnalyses)

    const positionError = position - bound.cents
    const possible = isCloseTo(positionError, 0)

    let tinaError = positionError / TINA as Multiplier<Tina>
    if (isCloseTo(tinaError, 0 as Multiplier<Tina>)) {
        tinaError = 0 as Multiplier<Tina>
    }

    const initialPositionDistance = position - initialPosition
    const initialPositionTinaDistance = initialPositionDistance / TINA as Multiplier<Tina>

    return {
        events: eventAnalyses,
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
