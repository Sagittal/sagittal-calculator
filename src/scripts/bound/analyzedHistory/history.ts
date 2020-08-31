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
import { AnalyzedHistory } from "./types"

const computeAnalyzedHistory = (history: History, bound: Bound, initialPosition: Cents): AnalyzedHistory => {
    const position = computeHistoryPosition(history)

    const analyzedEvents = analyzeEvents(history, bound.cents)
    const rank = computeRank(analyzedEvents)
    const score = computeScore(analyzedEvents)
    const exact = computeExact(analyzedEvents)
    const totalDistance = computeHistoryTotalDistance(analyzedEvents)
    const totalInaDistance = computeHistoryTotalInaDistance(analyzedEvents)

    const positionError = position - bound.cents
    const possible = isCloseTo(positionError, 0)

    let tinaError = positionError / TINA as Multiplier<Tina>
    if (isCloseTo(tinaError, 0 as Multiplier<Tina>)) {
        tinaError = 0 as Multiplier<Tina>
    }

    const initialPositionDistance = position - initialPosition
    const initialPositionTinaDistance = initialPositionDistance / TINA as Multiplier<Tina>

    return {
        events: analyzedEvents,
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
    computeAnalyzedHistory,
}
