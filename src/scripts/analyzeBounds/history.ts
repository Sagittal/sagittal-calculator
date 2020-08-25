import { Cents, computeIsCloseTo, Proportion } from "../../general"
import { Bound, Tina, TINA } from "../../notations"
import { analyzeEvents } from "./events"
import { computeExact } from "./exact"
import { computeHistoryDistance } from "./historyDistance"
import { computeHistoryInaDistance } from "./historyInaDistance"
import { computeHistoryPosition } from "./historyPosition"
import { computeRank } from "./rank"
import { computeScore } from "./score"
import { AnalyzedHistory, History } from "./types"

const analyzeHistory = (history: History, bound: Bound, initialPosition: Cents): AnalyzedHistory => {
    const position = computeHistoryPosition(history)

    const analyzedEvents = analyzeEvents(history, bound.cents)
    const rank = computeRank(analyzedEvents)
    const score = computeScore(analyzedEvents)
    const exact = computeExact(analyzedEvents)
    const distance = computeHistoryDistance(analyzedEvents)
    const inaDistance = computeHistoryInaDistance(analyzedEvents)

    const positionError = position - bound.cents
    const possible = computeIsCloseTo(positionError, 0)

    let tinaError = positionError / TINA as Proportion<Tina>
    if (computeIsCloseTo(tinaError, 0 as Proportion<Tina>)) {
        tinaError = 0 as Proportion<Tina>
    }

    const initialPositionDistance = position - initialPosition
    const initialPositionTinaDifference = initialPositionDistance / TINA as Proportion<Tina>

    return {
        events: analyzedEvents,
        cents: position,
        rank,
        score,
        distance,
        inaDistance,
        exact,
        possible,
        tinaError,
        initialPositionTinaDifference,
    }
}

export {
    analyzeHistory,
}
