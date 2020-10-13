import { isCloseTo, Multiplier, Scamon, subtractPitch } from "../../../general"
import { JiNotationBoundClass, Tina, TINA } from "../../../sagittal"
import { BoundClassHistory } from "../histories"
import { analyzeBoundClassEvents } from "./events"
import { computeExact } from "./exact"
import { computeBoundClassHistoryPosition } from "./historyPosition"
import { computeBoundClassHistoryTotalDistance } from "./historyTotalDistance"
import { computeBoundClassHistoryTotalInaDistance } from "./historyTotalInaDistance"
import { computeRank } from "./rank"
import { computeScore } from "./score"
import { BoundClassHistoryAnalysis } from "./types"

const analyzeHistory = (
    boundClassHistory: BoundClassHistory,
    { pitch }: JiNotationBoundClass,
    initialPosition: Scamon,
): BoundClassHistoryAnalysis => {
    const position = computeBoundClassHistoryPosition(boundClassHistory)

    const boundClassEventAnalyses = analyzeBoundClassEvents(boundClassHistory, pitch)
    const rank = computeRank(boundClassEventAnalyses)
    const score = computeScore(boundClassEventAnalyses)
    const exact = computeExact(boundClassEventAnalyses)
    const totalDistance = computeBoundClassHistoryTotalDistance(boundClassEventAnalyses)
    const totalInaDistance = computeBoundClassHistoryTotalInaDistance(boundClassEventAnalyses)

    const positionError = subtractPitch(position, pitch)
    const possible = isCloseTo(positionError, 0)

    let tinaError = positionError / TINA as Multiplier<Tina>
    if (isCloseTo(tinaError, 0 as Multiplier<Tina>)) {
        tinaError = 0 as Multiplier<Tina>
    }

    const initialPositionDistance = subtractPitch(position, initialPosition)
    const initialPositionTinaDistance = initialPositionDistance / TINA as Multiplier<Tina>

    return {
        boundClassEventAnalyses: boundClassEventAnalyses,
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
