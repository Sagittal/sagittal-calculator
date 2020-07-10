import {TINA} from "../../notations/ji/intervals"
import {computeIsCloseTo} from "../../utilities/isCloseTo"
import {computeHistoryPosition} from "./historyPosition"
import {computeRank} from "./rank"
import {computeExact} from "./exact"
import {analyzeEvents} from "./events"
import {computeScore} from "./score"
import {computeHistoryDistance} from "./historyDistance"
import {computeHistoryInaDistance} from "./historyInaDistance"

const analyzeHistory = (history, bound, initialPosition) => {
    const position = computeHistoryPosition(history)

    const analyzedEvents = analyzeEvents(history, bound.position)
    const rank = computeRank(analyzedEvents)
    const score = computeScore(analyzedEvents)
    const exact = computeExact(analyzedEvents)
    const distance = computeHistoryDistance(analyzedEvents)
    const inaDistance = computeHistoryInaDistance(analyzedEvents)

    const positionError = position - bound.position
    const possible = computeIsCloseTo(positionError, 0)

    let tinaError = positionError / TINA
    if (computeIsCloseTo(tinaError, 0)) tinaError = 0

    const initialPositionDistance = position - initialPosition
    const initialPositionTinaDifference = initialPositionDistance / TINA

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
