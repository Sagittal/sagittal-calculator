import {isCloseTo, Multiplier, Scamon, subtractPitch} from "@sagittal/general"
import {JiNotationBoundClass, Tinas, TINA_CENTS} from "@sagittal/system"
import {BoundHistory} from "../histories"
import {analyzeBoundEvents} from "./events"
import {computeExact} from "./exact"
import {computeGrade} from "./grade"
import {computeBoundHistoryPosition} from "./historyPosition"
import {computeBoundHistoryTotalDistance} from "./historyTotalDistance"
import {computeBoundHistoryTotalInaDistance} from "./historyTotalInaDistance"
import {computeRank} from "./rank"
import {BoundHistoryAnalysis} from "./types"

const analyzeHistory = (
    boundHistory: BoundHistory,
    {pitch}: JiNotationBoundClass,
    initialPosition: Scamon,
): BoundHistoryAnalysis => {
    const position = computeBoundHistoryPosition(boundHistory)

    const boundEventAnalyses = analyzeBoundEvents(boundHistory, pitch)
    const rank = computeRank(boundEventAnalyses)
    const grade = computeGrade(boundEventAnalyses)
    const exact = computeExact(boundEventAnalyses)
    const totalDistance = computeBoundHistoryTotalDistance(boundEventAnalyses)
    const totalInaDistance = computeBoundHistoryTotalInaDistance(boundEventAnalyses)

    const positionError = subtractPitch(position, pitch)
    const possible = isCloseTo(positionError, 0)

    let tinaError = positionError / TINA_CENTS as Multiplier<Tinas>
    if (isCloseTo(tinaError, 0 as Multiplier<Tinas>)) {
        tinaError = 0 as Multiplier<Tinas>
    }

    const initialPositionDistance = subtractPitch(position, initialPosition)
    const initialPositionTinaDistance = initialPositionDistance / TINA_CENTS as Multiplier<Tinas>

    return {
        boundEventAnalyses: boundEventAnalyses,
        pitch: position,
        rank,
        grade,
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
