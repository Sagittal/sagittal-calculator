import {areScamonsEqual, Comma, compute23FreeClass, LogTarget, saveLog} from "../../general"
import {CommaClassId, computeAas, computeAte, computeN2D3P9, formatComma, getCommaClass} from "../../sagittal"
import {usefulnessMetricLfcScriptGroupSettings} from "./globals"
import {
    UsefulnessMetric,
    UsefulnessMetricScoreForZone,
    UsefulnessParameterSet,
    UsefulnessScore,
} from "./types"

const computeUsefulnessMetricScoreForCommaZone = (
    [commaClassId, commas]: [CommaClassId, Comma[]],
    usefulnessMetric: UsefulnessMetric,
    usefulnessParameterSet: UsefulnessParameterSet,
): UsefulnessMetricScoreForZone => {
    let bestCommaUsefulnessScore = Infinity as UsefulnessScore
    let actualCommaUsefulnessScore = Infinity as UsefulnessScore

    const actualComma = getCommaClass(commaClassId).pitch

    commas.forEach((comma: Comma): void => {
        const n2d3p9 = computeN2D3P9(compute23FreeClass(comma))
        const aas = computeAas(comma)
        const ate = computeAte(comma)

        const usefulnessScore = usefulnessMetric(n2d3p9, aas, ate, usefulnessParameterSet)

        const isActualComma = areScamonsEqual(comma, actualComma)

        saveLog(`for comma ${formatComma(comma)}${isActualComma ? " (which is the actual comma) " : " "}usefulness score is ${usefulnessScore}`, LogTarget.DETAILS)

        if (isActualComma) actualCommaUsefulnessScore = usefulnessScore
        if (usefulnessScore < bestCommaUsefulnessScore) {
            // Todo: note that after this module becomes "badness" then this truly will be "best" since that's the
            //  Superlative form of "good" which is the opposite of bad!
            //  No wait... but this wasn't going all the way up to badness. This was just going to be complexity.
            //  I suppose "least complex" is slightly preferable to "simplest"
            bestCommaUsefulnessScore = usefulnessScore
        }
    })

    return usefulnessMetricLfcScriptGroupSettings.sosMode ?
        (actualCommaUsefulnessScore - bestCommaUsefulnessScore) ** 2 as UsefulnessMetricScoreForZone :
        actualCommaUsefulnessScore === bestCommaUsefulnessScore ?
            0 as UsefulnessMetricScoreForZone :
            1 as UsefulnessMetricScoreForZone
}

export {
    computeUsefulnessMetricScoreForCommaZone,
}
