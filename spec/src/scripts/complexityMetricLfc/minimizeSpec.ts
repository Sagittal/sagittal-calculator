import {LogTarget, saveLog, Score, Sum} from "../../../../src/general"
import * as save from "../../../../src/general/io/log/save"
import {Parameter} from "../../../../src/general/lfc"
import {Combination} from "../../../../src/general/math"
import {COMPLEXITY_METRIC_FAMILIES_WITH_PARAMETERS} from "../../../../src/scripts/complexityMetricLfc/metrics"
import * as metricScore from "../../../../src/scripts/complexityMetricLfc/metricScore"
import {logComplexityParameterSetsForComplexityMetricFamilyWhichMinimizeItsScore} from "../../../../src/scripts/complexityMetricLfc/minimize"
import * as parameters from "../../../../src/scripts/complexityMetricLfc/parameters"
import {
    ComplexityMetric,
    ComplexityMetricFamilyId,
    ComplexityParameterId,
    ComplexityParameterSet,
} from "../../../../src/scripts/complexityMetricLfc/types"

describe("logComplexityParameterSetsForComplexityMetricFamilyWhichMinimizeItsScore", (): void => {
    it("computes the parameter sets for the given metric family, then checks each one, and finds which one minimizes its score", (): void => {
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
        spyOn(metricScore, "computeMetricScoreForMetricAndParameterSet").and.returnValues(
            7 as Sum<Score<ComplexityMetric>>,
            4 as Sum<Score<ComplexityMetric>>,
        )
        spyOn(save, "saveLog")

        logComplexityParameterSetsForComplexityMetricFamilyWhichMinimizeItsScore([
            complexityMetricFamilyId,
            metricFamilyWithParameters,
        ])

        expect(save.saveLog).toHaveBeenCalledWith(`Complexity parameter set (1/2): {"sE":3,"c":5.4,"tP":5} -> metric score 7`, LogTarget.PROGRESS)
        expect(save.saveLog).toHaveBeenCalledWith(`Complexity parameter set (2/2): {"sE":1.3,"c":1,"tP":-0.1} -> metric score 4`, LogTarget.PROGRESS)
        expect(save.saveLog).toHaveBeenCalledWith(`Complexity parameter sets for complexity metric family lep which minimize its metric score, all bringing it to 4 (count of ties 1): [{"sE":1.3,"c":1,"tP":-0.1}]`, LogTarget.FINAL)
    })
})
