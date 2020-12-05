import {count, Grade, LogTarget, Min, saveLog, stringify, Sum} from "@sagittal/general"
import {computeMetricGradeForMetricAndParameterSet} from "./metricGrade"
import {computeComplexityParameterSets} from "./parameters"
import {ComplexityMetric, ComplexityMetricFamilyId, ComplexityParameterId, ComplexityParameterSet} from "./types"

const logComplexityParameterSetsForComplexityMetricFamilyWhichOptimizeItsGrade = (
    [
        complexityMetricFamilyId,
        {metric, parameters},
    ]: [ComplexityMetricFamilyId, {metric: ComplexityMetric, parameters: ComplexityParameterId[]}],
): void => {
    saveLog(`\nRUNNING FOR COMPLEXITY METRIC FAMILY ${complexityMetricFamilyId}`, LogTarget.PROGRESS)

    const complexityParameterSets = computeComplexityParameterSets(parameters)
    const countComplexityParameterSetsForComplexityMetricFamily = count(complexityParameterSets)

    let minMetricGrade = Infinity as Min<Sum<Grade<ComplexityMetric>>>
    let complexityParameterSetsForComplexityMetricFamilyWhichOptimizeItsGrade = [] as ComplexityParameterSet[]

    complexityParameterSets.forEach((complexityParameterSet: ComplexityParameterSet, index: number): void => {
        const metricGrade = computeMetricGradeForMetricAndParameterSet(metric, complexityParameterSet)

        if (metricGrade === minMetricGrade) {
            complexityParameterSetsForComplexityMetricFamilyWhichOptimizeItsGrade.push(complexityParameterSet)
        } else if (metricGrade < minMetricGrade) {
            minMetricGrade = metricGrade as Min<Sum<Grade<ComplexityMetric>>>
            complexityParameterSetsForComplexityMetricFamilyWhichOptimizeItsGrade = [complexityParameterSet]
        }

        saveLog(`Complexity parameter set (${index + 1}/${countComplexityParameterSetsForComplexityMetricFamily}): ${stringify(complexityParameterSet)} -> metric grade ${metricGrade}`, LogTarget.PROGRESS)
    })

    saveLog(`Complexity parameter sets for complexity metric family ${complexityMetricFamilyId} which optimize its metric grade, all bringing it to ${minMetricGrade} (count of ties ${count(complexityParameterSetsForComplexityMetricFamilyWhichOptimizeItsGrade)}): ${stringify(complexityParameterSetsForComplexityMetricFamilyWhichOptimizeItsGrade)}`, LogTarget.FINAL)
}

export {
    logComplexityParameterSetsForComplexityMetricFamilyWhichOptimizeItsGrade,
}
