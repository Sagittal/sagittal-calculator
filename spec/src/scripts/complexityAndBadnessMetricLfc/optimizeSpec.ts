import {Grade, LogTarget, saveLog, Sum} from "../../../../src/general"
import * as save from "../../../../src/general/io/log/save"
import {Parameter} from "../../../../src/general/lfc"
import {Combination} from "../../../../src/general/math"
import * as metricGrade from "../../../../src/scripts/complexityAndBadnessMetricLfc/metricGrade"
import {COMPLEXITY_METRIC_FAMILIES_WITH_PARAMETERS} from "../../../../src/scripts/complexityAndBadnessMetricLfc/metrics"
import {logComplexityParameterSetsForComplexityMetricFamilyWhichOptimizeItsGrade} from "../../../../src/scripts/complexityAndBadnessMetricLfc/optimize"
import * as parameters from "../../../../src/scripts/complexityAndBadnessMetricLfc/parameters"
import {
    ComplexityMetric,
    ComplexityMetricFamilyId,
    ComplexityParameterId,
    ComplexityParameterSet,
} from "../../../../src/scripts/complexityAndBadnessMetricLfc/types"

describe("logComplexityParameterSetsForComplexityMetricFamilyWhichOptimizeItsGrade", (): void => {
    it("computes the parameter sets for the given metric family, then checks each one, and finds which one minimizes its grade", (): void => {
        const complexityMetricFamilyId = ComplexityMetricFamilyId.LEP
        const metricFamilyWithParameters = COMPLEXITY_METRIC_FAMILIES_WITH_PARAMETERS[complexityMetricFamilyId]

        const complexityParameterSets = [
            {
                [ComplexityParameterId.SE]: 3 as Parameter,
                [ComplexityParameterId.C]: 5.4 as Parameter,
                [ComplexityParameterId.TP]: 5 as Parameter,
            },
            {
                [ComplexityParameterId.SE]: 1.3 as Parameter,
                [ComplexityParameterId.C]: 1 as Parameter,
                [ComplexityParameterId.TP]: -0.1 as Parameter,
            },
        ] as Combination<ComplexityParameterSet>

        spyOn(parameters, "computeComplexityParameterSets").and.returnValue(complexityParameterSets)
        spyOn(metricGrade, "computeMetricGradeForMetricAndParameterSet").and.returnValues(
            7 as Sum<Grade<ComplexityMetric>>,
            4 as Sum<Grade<ComplexityMetric>>,
        )
        spyOn(save, "saveLog")

        logComplexityParameterSetsForComplexityMetricFamilyWhichOptimizeItsGrade([
            complexityMetricFamilyId,
            metricFamilyWithParameters,
        ])

        expect(save.saveLog).toHaveBeenCalledWith(`Complexity parameter set (1/2): {"sE":3,"c":5.4,"tP":5} -> metric grade 7`, LogTarget.PROGRESS)
        expect(save.saveLog).toHaveBeenCalledWith(`Complexity parameter set (2/2): {"sE":1.3,"c":1,"tP":-0.1} -> metric grade 4`, LogTarget.PROGRESS)
        expect(save.saveLog).toHaveBeenCalledWith(`Complexity parameter sets for complexity metric family lep which optimize its metric grade, all bringing it to 4 (count of ties 1): [{"sE":1.3,"c":1,"tP":-0.1}]`, LogTarget.FINAL)
    })
})
