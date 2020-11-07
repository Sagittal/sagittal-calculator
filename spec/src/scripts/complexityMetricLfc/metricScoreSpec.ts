// tslint:disable max-line-length

import {Comma} from "../../../../src/general/music/ji"
import {CommaClassId} from "../../../../src/sagittal/notation"
import {complexityMetricLfcScriptGroupSettings} from "../../../../src/scripts/complexityMetricLfc/globals"
import {COMPLEXITY_METRIC_FAMILIES_WITH_PARAMETERS} from "../../../../src/scripts/complexityMetricLfc/metrics"
import {computeMetricScoreForMetricAndParameterSet} from "../../../../src/scripts/complexityMetricLfc/metricScore"
import {computeComplexityParameterSets} from "../../../../src/scripts/complexityMetricLfc/parameters"
import {ComplexityMetricFamilyId} from "../../../../src/scripts/complexityMetricLfc/types"
import * as zoneMetricScore from "../../../../src/scripts/complexityMetricLfc/zoneMetricScore"

describe("computeMetricScoreForMetricAndParameterSet", (): void => {
    it("checks each zone comma entry, except the 14641k and 19/4375s, two commas who have been identified to have inappropriately low popularity", (): void => {
        complexityMetricLfcScriptGroupSettings.zoneCommaEntries = [
            [
                CommaClassId._1_5_C,
                [{monzo: [-4, 4, -1]}, {monzo: [24, -12, 0, -3, 1]}],
            ],
            [
                CommaClassId._1_17_k,
                [{monzo: [16, -4, -1, -1, 0, 0, 0, 0, -1]}, {monzo: [-22, 11, -1, 1, 0, 0, 1]}],
            ],
            [
                CommaClassId._14641_k,
                [{monzo: [8, 3, -4, 0, -1]}, {monzo: [12, -6, -1, 0, 0, 0, 1, -1]}, {monzo: [-8, 2, -1, 0, 1, 1]}],
            ],
            [
                CommaClassId._31_11_k,
                [{monzo: [11, 1, -3, -2]}, {monzo: [14, -3, -1, 0, -2]}, {monzo: [-11, 6, 0, 0, -1, 0, 0, 0, 0, 0, 1]}],
            ],
            [
                CommaClassId._19_4375_s,
                [{monzo: [6, 2, -2, 0, 0, 0, 0, 0, -1]}, {monzo: [20, -11, -1, 0, 1, -1]}],
            ],
            [
                CommaClassId._5_23_M,
                [{monzo: [-16, 10, -3, 0, 1, 1]}, {monzo: [-7, 5, -1, -1, 0, 0, 0, 1]}, {monzo: [4, 5, 0, -3, -1]}],
            ],
        ] as Array<[CommaClassId, Comma[]]>
        const {metric, parameters} = COMPLEXITY_METRIC_FAMILIES_WITH_PARAMETERS[ComplexityMetricFamilyId.LEE]
        const complexityParameterSet = computeComplexityParameterSets(parameters)[0]

        spyOn(zoneMetricScore, "computeZoneComplexityMetricScore")

        computeMetricScoreForMetricAndParameterSet(metric, complexityParameterSet)

        expect(zoneMetricScore.computeZoneComplexityMetricScore).toHaveBeenCalledWith(
            [
                CommaClassId._1_5_C,
                [{monzo: [-4, 4, -1]}, {monzo: [24, -12, 0, -3, 1]}] as Comma[],
            ],
            metric,
            complexityParameterSet,
        )
        expect(zoneMetricScore.computeZoneComplexityMetricScore).toHaveBeenCalledWith(
            [
                CommaClassId._1_17_k,
                [{monzo: [16, -4, -1, -1, 0, 0, 0, 0, -1]}, {monzo: [-22, 11, -1, 1, 0, 0, 1]}] as Comma[],
            ],
            metric,
            complexityParameterSet,
        )
        expect(zoneMetricScore.computeZoneComplexityMetricScore).not.toHaveBeenCalledWith(
            [
                CommaClassId._14641_k,
                [{monzo: [8, 3, -4, 0, -1]}, {monzo: [12, -6, -1, 0, 0, 0, 1, -1]}, {monzo: [-8, 2, -1, 0, 1, 1]}] as Comma[],
            ],
            metric,
            complexityParameterSet,
        )
        expect(zoneMetricScore.computeZoneComplexityMetricScore).toHaveBeenCalledWith(
            [
                CommaClassId._31_11_k,
                [{monzo: [11, 1, -3, -2]}, {monzo: [14, -3, -1, 0, -2]}, {monzo: [-11, 6, 0, 0, -1, 0, 0, 0, 0, 0, 1]}] as Comma[],
            ],
            metric,
            complexityParameterSet,
        )
        expect(zoneMetricScore.computeZoneComplexityMetricScore).not.toHaveBeenCalledWith(
            [
                CommaClassId._19_4375_s,
                [{monzo: [6, 2, -2, 0, 0, 0, 0, 0, -1]}, {monzo: [20, -11, -1, 0, 1, -1]}] as Comma[],
            ],
            metric,
            complexityParameterSet,
        )
        expect(zoneMetricScore.computeZoneComplexityMetricScore).toHaveBeenCalledWith(
            [
                CommaClassId._5_23_M,
                [{monzo: [-16, 10, -3, 0, 1, 1]}, {monzo: [-7, 5, -1, -1, 0, 0, 0, 1]}, {monzo: [4, 5, 0, -3, -1]}] as Comma[],
            ],
            metric,
            complexityParameterSet,
        )
    })
})
