import {Comma} from "../../general"
import {CommaClassId} from "../../sagittal"
import {computeBestAndActualCommaUsefulnessScores} from "./bestAndActual"
import {SquaredUsefulnessScoreDistanceFromBestUsefulnessScore, UsefulnessMetric, UsefulnessParameterSet} from "./types"

const computeSquaredUsefulnessScoreDistanceFromBestUsefulnessScoreInZone = (
    zoneCommaEntry: [CommaClassId, Comma[]],
    usefulnessMetric: UsefulnessMetric,
    usefulnessParameterSet: UsefulnessParameterSet,
): SquaredUsefulnessScoreDistanceFromBestUsefulnessScore => {
    const {actualCommaUsefulnessScore, bestCommaUsefulnessScore} = computeBestAndActualCommaUsefulnessScores(
        zoneCommaEntry,
        usefulnessMetric,
        usefulnessParameterSet,
    )

    return (actualCommaUsefulnessScore - bestCommaUsefulnessScore) ** 2 as
        SquaredUsefulnessScoreDistanceFromBestUsefulnessScore
}

export {
    computeSquaredUsefulnessScoreDistanceFromBestUsefulnessScoreInZone,
}
