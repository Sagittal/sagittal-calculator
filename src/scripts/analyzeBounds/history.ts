import { TINA } from "../../notations/ji/intervals"
import { computeIsCloseTo } from "../../utilities/isCloseTo"
import { computeHistoryPosition } from "./historyPosition"
import { computeRank } from "./rank"
import { computeExact } from "./exact"
import { analyzeEvents } from "./events"
import { computeScore } from "./score"
import { computeHistoryDistance } from "./historyDistance"
import { computeHistoryInaDistance } from "./historyInaDistance"
import { AnalyzedHistory, History } from "./types"
import { Bound } from "../../notations/ji/types"
import { Cents, Proportion } from "../../utilities/types"

const analyzeHistory = (history: History, bound: Bound, initialPosition: Cents): AnalyzedHistory => {
    const position = computeHistoryPosition(history)

    const analyzedEvents = analyzeEvents(history, bound.position)
    const rank = computeRank(analyzedEvents)
    const score = computeScore(analyzedEvents)
    const exact = computeExact(analyzedEvents)
    const distance = computeHistoryDistance(analyzedEvents)
    const inaDistance = computeHistoryInaDistance(analyzedEvents)

    const positionError = position - bound.position
    const possible = computeIsCloseTo(positionError, 0)

    let tinaError = positionError / TINA as Proportion<"Tina">
    if (computeIsCloseTo(tinaError, 0 as Proportion<"Tina">)) tinaError = 0 as Proportion<"Tina">

    const initialPositionDistance = position - initialPosition
    const initialPositionTinaDifference = initialPositionDistance / TINA as Proportion<"Tina">

    return {
        events: analyzedEvents,
        position,
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
