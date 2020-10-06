import { Cents, computeCentsFromPitch, isCloseTo, Multiplier } from "../../../general"
import { JiNotationBound, Tina, TINA } from "../../../sagittal"
import { BoundHistory } from "../histories"
import { analyzeBoundEvents } from "./events"
import { computeExact } from "./exact"
import { computeBoundHistoryPosition } from "./historyPosition"
import { computeBoundHistoryTotalDistance } from "./historyTotalDistance"
import { computeBoundHistoryTotalInaDistance } from "./historyTotalInaDistance"
import { computeRank } from "./rank"
import { computeScore } from "./score"
import { BoundHistoryAnalysis } from "./types"

const analyzeHistory = (
    boundHistory: BoundHistory,
    jiNotationBound: JiNotationBound,
    initialPosition: Cents,
): BoundHistoryAnalysis => {
    const position = computeBoundHistoryPosition(boundHistory)

    const cents = computeCentsFromPitch(jiNotationBound.pitch)

    const boundEventAnalyses = analyzeBoundEvents(boundHistory, cents)
    const rank = computeRank(boundEventAnalyses)
    const score = computeScore(boundEventAnalyses)
    const exact = computeExact(boundEventAnalyses)
    const totalDistance = computeBoundHistoryTotalDistance(boundEventAnalyses)
    const totalInaDistance = computeBoundHistoryTotalInaDistance(boundEventAnalyses)

    const positionError = position - cents
    const possible = isCloseTo(positionError, 0)

    let tinaError = positionError / TINA as Multiplier<Tina>
    if (isCloseTo(tinaError, 0 as Multiplier<Tina>)) {
        tinaError = 0 as Multiplier<Tina>
    }

    const initialPositionDistance = position - initialPosition
    const initialPositionTinaDistance = initialPositionDistance / TINA as Multiplier<Tina>

    return {
        boundEventAnalyses: boundEventAnalyses,
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
