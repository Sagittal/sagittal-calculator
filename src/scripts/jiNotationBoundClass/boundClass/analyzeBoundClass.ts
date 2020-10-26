import {count, isUndefined, Multiplier, subtractPitch} from "../../../general"
import {JiNotationBoundClassEntry, Tina, TINA} from "../../../sagittal"
import {consolidateBoundHistories} from "../consolidateHistories"
import {BoundHistory} from "../histories"
import {analyzeHistory, BoundHistoryAnalysis} from "../history"
import {computeBestPossibleBoundHistoryAnalysis} from "./bestPossibleHistory"
import {computeInitialPosition} from "./initialPosition"
import {updateJiNotationLevelAnalysis} from "./levels"
import {updateRankAnalysis} from "./ranks"
import {JiNotationBoundClassAnalysis} from "./types"

const analyzeJiNotationBoundClass = (
    boundHistories: BoundHistory[],
    [boundClassId, jiNotationBoundClass]: JiNotationBoundClassEntry,
): JiNotationBoundClassAnalysis => {
    const initialPosition = computeInitialPosition(jiNotationBoundClass)
    const boundHistoryAnalyses = boundHistories
        .map((boundHistory: BoundHistory): BoundHistoryAnalysis => {
            return analyzeHistory(boundHistory, jiNotationBoundClass, initialPosition)
        })

    const possibleBoundHistories = boundHistoryAnalyses
        .filter((boundHistoryAnalysis: BoundHistoryAnalysis): boolean => boundHistoryAnalysis.possible)
    const possibleBoundHistoryCount = count(possibleBoundHistories)
    const bestPossibleBoundHistoryAnalysis =
        computeBestPossibleBoundHistoryAnalysis(possibleBoundHistories)
    if (isUndefined(bestPossibleBoundHistoryAnalysis)) {
        throw new Error(`Unable to find a best possible bound class history for bound class ${jiNotationBoundClass}`)
    }
    const bestRank = bestPossibleBoundHistoryAnalysis.rank
    const bestPossibleBoundHistoryTotalDistance = bestPossibleBoundHistoryAnalysis.totalDistance
    const bestPossibleBoundHistoryTotalInaDistance = bestPossibleBoundHistoryAnalysis.totalInaDistance

    const initialPositionTinaDistance =
        subtractPitch(jiNotationBoundClass.pitch, initialPosition) / TINA as Multiplier<Tina>

    updateRankAnalysis(bestRank, boundClassId)
    updateJiNotationLevelAnalysis(bestPossibleBoundHistoryAnalysis)

    const boundHistoryConsolidation =
        consolidateBoundHistories(boundHistoryAnalyses, bestPossibleBoundHistoryAnalysis)

    return {
        initialPosition,
        possibleBoundHistoryCount,
        bestPossibleBoundHistoryAnalysis,
        bestRank,
        bestPossibleBoundHistoryTotalDistance,
        bestPossibleBoundHistoryTotalInaDistance,
        initialPositionTinaDistance,
        boundHistoryConsolidation,
    }
}

export {
    analyzeJiNotationBoundClass,
}
