import {areScamonsEqual, Comma, compute23FreeClass, LogTarget, saveLog} from "../../general"
import {
    CommaClassId,
    Complexity,
    computeAas,
    computeAte,
    computeN2D3P9,
    formatComma,
    getCommaClass,
} from "../../sagittal"
import {Score} from "../types"
import {complexityMetricLfcScriptGroupSettings} from "./globals"
import {ComplexityMetric, ComplexityParameterSet} from "./types"

const computeZoneComplexityMetricScore = (
    [commaClassId, commas]: [CommaClassId, Comma[]],
    complexityMetric: ComplexityMetric,
    complexityParameterSet: ComplexityParameterSet,
): Score<ComplexityMetric> => {
    let lowestCommaComplexity = Infinity as Complexity
    let actualCommaComplexity = Infinity as Complexity

    const actualComma = getCommaClass(commaClassId).pitch

    commas.forEach((comma: Comma): void => {
        const n2d3p9 = computeN2D3P9(compute23FreeClass(comma))
        const aas = computeAas(comma)
        const ate = computeAte(comma)
        const complexity = complexityMetric(n2d3p9, aas, ate, complexityParameterSet)

        const isActualComma = areScamonsEqual(comma, actualComma)

        saveLog(`for comma ${formatComma(comma)}${isActualComma ? " (which is the actual comma) " : " "}complexity is ${complexity}`, LogTarget.DETAILS)

        if (isActualComma) actualCommaComplexity = complexity
        if (complexity < lowestCommaComplexity) {
            lowestCommaComplexity = complexity
        }
    })

    return complexityMetricLfcScriptGroupSettings.sosMode ?
        (actualCommaComplexity - lowestCommaComplexity) ** 2 as Score<ComplexityMetric> :
        actualCommaComplexity === lowestCommaComplexity ?
            0 as Score<ComplexityMetric> :
            1 as Score<ComplexityMetric>
}

export {
    computeZoneComplexityMetricScore,
}
