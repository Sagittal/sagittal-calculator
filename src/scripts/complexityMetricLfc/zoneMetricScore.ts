import {areScamonsEqual, Comma, formatDecimal, LogTarget, saveLog, Score} from "../../general"
import {CommaClassId, Complexity, formatComma, getCommaClass} from "../../sagittal"
import {complexityMetricLfcScriptGroupSettings} from "./globals"
import {ComplexityMetric, ComplexityParameterSet} from "./types"

const computeZoneComplexityMetricScore = (
    [commaClassId, commas]: [CommaClassId, Comma[]],
    complexityMetric: ComplexityMetric,
    complexityParameterSet: ComplexityParameterSet,
): Score<ComplexityMetric> => {
    let leastCommaComplexity = Infinity as Complexity
    let actualCommaComplexity = Infinity as Complexity

    const actualComma = getCommaClass(commaClassId).pitch

    commas.forEach((comma: Comma): void => {
        const complexity = complexityMetric(comma, complexityParameterSet)
        const isActualComma = areScamonsEqual(comma, actualComma)

        saveLog(
            `${isActualComma ? "*" : ""}${formatComma(comma)} complexity: ${formatDecimal(complexity)}`,
            LogTarget.DETAILS,
        )

        if (isActualComma) actualCommaComplexity = complexity
        if (complexity < leastCommaComplexity) {
            leastCommaComplexity = complexity
        }
    })

    const zoneComplexityMetricScore = complexityMetricLfcScriptGroupSettings.sosMode ?
        (actualCommaComplexity - leastCommaComplexity) ** 2 as Score<ComplexityMetric> :
        actualCommaComplexity === leastCommaComplexity ?
            0 as Score<ComplexityMetric> :
            1 as Score<ComplexityMetric>

    saveLog(
        `complexity metric score for ${formatComma(actualComma)}'s zone: ${zoneComplexityMetricScore}`,
        LogTarget.DETAILS,
    )

    return zoneComplexityMetricScore
}

export {
    computeZoneComplexityMetricScore,
}
