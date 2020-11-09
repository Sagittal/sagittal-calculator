import {isCloseTo, Multiplier, Scamon, subtractPitch} from "../../../general"
import {JiNotationBoundClass, Tina, TINA_CENTS} from "../../../sagittal"
import {BoundHistory} from "../histories"
import {analyzeBoundEvents} from "./events"
import {computeExact} from "./exact"
import {computeBoundHistoryPosition} from "./historyPosition"
import {computeBoundHistoryTotalDistance} from "./historyTotalDistance"
import {computeBoundHistoryTotalInaDistance} from "./historyTotalInaDistance"
import {computeRank} from "./rank"
import {computeScore} from "./score"
import {BoundHistoryAnalysis} from "./types"

const analyzeHistory = (
    boundHistory: BoundHistory,
    {pitch}: JiNotationBoundClass,
    initialPosition: Scamon,
): BoundHistoryAnalysis => {
    const position = computeBoundHistoryPosition(boundHistory)

    const boundEventAnalyses = analyzeBoundEvents(boundHistory, pitch)
    const rank = computeRank(boundEventAnalyses)
    const score = computeScore(boundEventAnalyses)
    const exact = computeExact(boundEventAnalyses)
    const totalDistance = computeBoundHistoryTotalDistance(boundEventAnalyses)
    const totalInaDistance = computeBoundHistoryTotalInaDistance(boundEventAnalyses)

    const positionError = subtractPitch(position, pitch)
    const possible = isCloseTo(positionError, 0)

    let tinaError = positionError / TINA_CENTS as Multiplier<Tina>
    if (isCloseTo(tinaError, 0 as Multiplier<Tina>)) {
        tinaError = 0 as Multiplier<Tina>
    }

    const initialPositionDistance = subtractPitch(position, initialPosition)
    const initialPositionTinaDistance = initialPositionDistance / TINA_CENTS as Multiplier<Tina>

    return {
        boundEventAnalyses: boundEventAnalyses,
        pitch: position,
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
