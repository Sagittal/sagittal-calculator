import {areScamonsEqual, BLANK, Comma, formatDecimal, Grade, LogTarget, saveLog} from "@sagittal/general"
import {CommaClassId, Complexity, formatComma, getCommaClass} from "@sagittal/system"
import {complexityAndBadnessMetricLfcScriptGroupSettings} from "./globals"
import {ComplexityMetric, ComplexityParameterSet} from "./types"

const computeZoneComplexityMetricGrade = (
    [commaClassId, commas]: [CommaClassId, Comma[]],
    complexityMetric: ComplexityMetric,
    complexityParameterSet: ComplexityParameterSet,
): Grade<ComplexityMetric> => {
    let leastCommaComplexity = Infinity as Complexity
    let actualCommaComplexity = Infinity as Complexity

    const actualComma = getCommaClass(commaClassId).pitch

    commas.forEach((comma: Comma): void => {
        const complexity = complexityMetric(comma, complexityParameterSet)
        const isActualComma = areScamonsEqual(comma, actualComma)

        saveLog(
            `${isActualComma ? "*" : BLANK}${formatComma(comma)} complexity: ${formatDecimal(complexity)}`,
            LogTarget.DETAILS,
        )

        if (isActualComma) actualCommaComplexity = complexity
        if (complexity < leastCommaComplexity) {
            leastCommaComplexity = complexity
        }
    })

    const zoneComplexityMetricGrade = complexityAndBadnessMetricLfcScriptGroupSettings.sosMode ?
        (actualCommaComplexity - leastCommaComplexity) ** 2 as Grade<ComplexityMetric> :
        actualCommaComplexity === leastCommaComplexity ?
            0 as Grade<ComplexityMetric> :
            1 as Grade<ComplexityMetric>

    saveLog(
        `complexity metric grade for ${formatComma(actualComma)}'s zone: ${zoneComplexityMetricGrade}`,
        LogTarget.DETAILS,
    )

    return zoneComplexityMetricGrade
}

export {
    computeZoneComplexityMetricGrade,
}
