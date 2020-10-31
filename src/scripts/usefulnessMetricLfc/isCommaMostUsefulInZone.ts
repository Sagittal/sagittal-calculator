import {Comma} from "../../general"
import {CommaClassId} from "../../sagittal"
import {computeBestAndActualCommaUsefulnessScores} from "./bestAndActual"
import {UsefulnessMetric, UsefulnessParameterSet} from "./types"

const isCommaMostUsefulInZone = (
    zoneCommaEntry: [CommaClassId, Comma[]],
    usefulnessMetric: UsefulnessMetric,
    usefulnessParameterSet: UsefulnessParameterSet,
): boolean => {
    const {actualCommaUsefulnessScore, bestCommaUsefulnessScore} = computeBestAndActualCommaUsefulnessScores(
        zoneCommaEntry,
        usefulnessMetric,
        usefulnessParameterSet,
    )

    return actualCommaUsefulnessScore === bestCommaUsefulnessScore
}

export {
    isCommaMostUsefulInZone,
}
