import {Comma} from "../../../../src/general/music/ji"
import {CommaClassId} from "../../../../src/sagittal/notation"
import {complexityMetricLfcScriptGroupSettings} from "../../../../src/scripts/complexityMetricLfc/globals"
import {COMPLEXITY_METRIC_FAMILIES_WITH_PARAMETERS} from "../../../../src/scripts/complexityMetricLfc/metrics"
import {
    ComplexityMetric,
    ComplexityMetricFamilyId,
    ComplexityParameterId,
} from "../../../../src/scripts/complexityMetricLfc/types"
import {computeZoneComplexityMetricScore} from "../../../../src/scripts/complexityMetricLfc/zoneMetricScore"
import {Parameter, Score} from "../../../../src/scripts/types"

describe("computeZoneComplexityMetricScore", (): void => {
    const COMMAS_FOR_1_455_n = [
        {monzo: [17, -11, -3, 0, 0, 2]},
        {monzo: [-18, 11, -2, 0, 0, 0, 0, 0, 0, 0, 0, 1]},
        {monzo: [12, -2, -1, -1, 0, -1]},
        {monzo: [-5, 8, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1]},
        {monzo: [-32, 13, 1, 2, 1]},
        {monzo: [-21, 13, 2, 0, 0, 0, 0, -1]},
        {monzo: [-1, -7, 4, 1]},
    ] as Comma[]
    const COMMAS_FOR_1_8575_k = [
        {monzo: [-7, 11, -3, 0, -1]},
        {monzo: [21, -5, -2, -3]},
        {monzo: [24, -13, -1, 0, 1, 0, 0, 0, -1]},
        {monzo: [-3, 2, 0, 0, 0, 0, 1, -1]},
        {monzo: [-23, 10, 0, 0, 1, 1]},
        {monzo: [21, -10, 0, 1, 0, -1, 0, -1]},
        {monzo: [1, -2, 0, 1, 1, 0, -1]},
        {monzo: [-14, 5, 2, -1, 0, 0, 0, 1]},
    ] as Comma[]
    const complexityMetric = COMPLEXITY_METRIC_FAMILIES_WITH_PARAMETERS[ComplexityMetricFamilyId.LEE].metric
    const complexityParameterSet = {
        [ComplexityParameterId.SE]: 0.00195 as Parameter,
        [ComplexityParameterId.TE]: 0.00195 as Parameter,
    }

    describe("when in sos mode", (): void => {
        beforeEach((): void => {
            complexityMetricLfcScriptGroupSettings.sosMode = true
        })

        it("returns 0 when a comma is the most useful comma in its zone", (): void => {
            const actual = computeZoneComplexityMetricScore(
                [CommaClassId._1_455_n, COMMAS_FOR_1_455_n],
                complexityMetric,
                complexityParameterSet,
            )

            const expected = 0 as Score<ComplexityMetric>
            expect(actual).toBeCloseTo(expected)
        })

        it("returns a squared distance between the actual comma's complexity and the most useful comma when a comma is not the most useful comma in its zone", (): void => {
            complexityMetricLfcScriptGroupSettings.sosMode = true
            const actual = computeZoneComplexityMetricScore(
                [CommaClassId._1_8575_k, COMMAS_FOR_1_8575_k],
                complexityMetric,
                complexityParameterSet,
            )

            // 1/8575's complexity is 7.866050, but 17/19k's complexity is 6.841035; (7.866050 - 6.841035)^2 = 1.050655
            const expected = 1.050655 as Score<ComplexityMetric>
            expect(actual).toBeCloseTo(expected)
        })
    })

    describe("when in boolean mode", (): void => {
        beforeEach((): void => {
            complexityMetricLfcScriptGroupSettings.sosMode = false
        })

        it("returns 0 points (good) when a comma is the most useful comma in its zone", (): void => {
            const actual = computeZoneComplexityMetricScore(
                [CommaClassId._1_455_n, COMMAS_FOR_1_455_n],
                complexityMetric,
                complexityParameterSet,
            )

            const expected = 0 as Score<ComplexityMetric>
            expect(actual).toBe(expected)
        })

        it("returns 1 point (bad) when a comma is not the most useful comma in its zone", (): void => {
            const actual = computeZoneComplexityMetricScore(
                [CommaClassId._1_8575_k, COMMAS_FOR_1_8575_k],
                complexityMetric,
                complexityParameterSet,
            )

            // 1/8575's complexity is 7.866050, but 17/19k's complexity is 6.841035; (7.866050 - 6.841035)^2 = 1.050655
            const expected = 1 as Score<ComplexityMetric>
            expect(actual).toBe(expected)
        })
    })
})
