import { count, isUndefined, Multiplier, subtractPitch } from "../../../general"
import { JiNotationBoundClass, Tina, TINA } from "../../../sagittal"
import { consolidateBoundClassHistories } from "../consolidateHistories"
import { BoundClassHistory } from "../histories"
import { analyzeHistory, BoundClassHistoryAnalysis } from "../history"
import { computeBestPossibleBoundClassHistoryAnalysis } from "./bestPossibleHistory"
import { computeInitialPosition } from "./initialPosition"
import { updateJiNotationLevelAnalysis } from "./levels"
import { updateRankAnalysis } from "./ranks"
import { JiNotationBoundClassAnalysis } from "./types"

const analyzeJiNotationBoundClass = (
    boundClassHistories: BoundClassHistory[],
    jiNotationBoundClass: JiNotationBoundClass,
): JiNotationBoundClassAnalysis => {
    const initialPosition = computeInitialPosition(jiNotationBoundClass)
    const boundClassHistoryAnalyses = boundClassHistories
        .map((boundClassHistory: BoundClassHistory): BoundClassHistoryAnalysis => {
            return analyzeHistory(boundClassHistory, jiNotationBoundClass, initialPosition)
        })

    const possibleBoundClassHistories = boundClassHistoryAnalyses
        .filter((boundClassHistoryAnalysis: BoundClassHistoryAnalysis): boolean => boundClassHistoryAnalysis.possible)
    const possibleBoundClassHistoryCount = count(possibleBoundClassHistories)
    const bestPossibleBoundClassHistoryAnalysis =
        computeBestPossibleBoundClassHistoryAnalysis(possibleBoundClassHistories)
    if (isUndefined(bestPossibleBoundClassHistoryAnalysis)) {
        throw new Error(`Unable to find a best possible bound class history for bound class ${jiNotationBoundClass}`)
    }
    const bestRank = bestPossibleBoundClassHistoryAnalysis.rank
    const bestPossibleBoundClassHistoryTotalDistance = bestPossibleBoundClassHistoryAnalysis.totalDistance
    const bestPossibleBoundClassHistoryTotalInaDistance = bestPossibleBoundClassHistoryAnalysis.totalInaDistance

    const initialPositionTinaDistance =
        subtractPitch(jiNotationBoundClass.pitch, initialPosition) / TINA as Multiplier<Tina>

    updateRankAnalysis(bestRank, jiNotationBoundClass.id)
    updateJiNotationLevelAnalysis(bestPossibleBoundClassHistoryAnalysis)

    const boundClassHistoryConsolidation =
        consolidateBoundClassHistories(boundClassHistoryAnalyses, bestPossibleBoundClassHistoryAnalysis)

    return {
        initialPosition,
        possibleBoundClassHistoryCount,
        bestPossibleBoundClassHistoryAnalysis,
        bestRank,
        bestPossibleBoundClassHistoryTotalDistance,
        bestPossibleBoundClassHistoryTotalInaDistance,
        initialPositionTinaDistance,
        boundClassHistoryConsolidation,
    }
}

export {
    analyzeJiNotationBoundClass,
}
