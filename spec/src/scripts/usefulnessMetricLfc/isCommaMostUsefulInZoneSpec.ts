import {Comma} from "../../../../src/general/music/ji"
import {CommaClassId} from "../../../../src/sagittal/notation"
import {Parameter} from "../../../../src/scripts/types"
import {isCommaMostUsefulInZone} from "../../../../src/scripts/usefulnessMetricLfc/isCommaMostUsefulInZone"
import {USEFULNESS_METRICS_WITH_PARAMETERS} from "../../../../src/scripts/usefulnessMetricLfc/metrics"
import {UsefulnessMetricId, UsefulnessParameterId} from "../../../../src/scripts/usefulnessMetricLfc/types"

describe("isCommaMostUsefulInZone", (): void => {
    it("returns true when a comma is the most useful comma in its zone", (): void => {
        const commaClassId = CommaClassId._1_455_n
        const commas = [
            {monzo: [17, -11, -3, 0, 0, 2]},
            {monzo: [-18, 11, -2, 0, 0, 0, 0, 0, 0, 0, 0, 1]},
            {monzo: [12, -2, -1, -1, 0, -1]},
            {monzo: [-5, 8, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1]},
            {monzo: [-32, 13, 1, 2, 1]},
            {monzo: [-21, 13, 2, 0, 0, 0, 0, -1]},
            {monzo: [-1, -7, 4, 1]},
        ] as Comma[]
        const usefulnessMetric = USEFULNESS_METRICS_WITH_PARAMETERS[UsefulnessMetricId.LEE].metric
        const usefulnessParameterSet = {
            [UsefulnessParameterId.SE]: 0.00195 as Parameter,
            [UsefulnessParameterId.TE]: 0.00195 as Parameter,
        }

        const actual = isCommaMostUsefulInZone(
            [commaClassId, commas],
            usefulnessMetric,
            usefulnessParameterSet,
        )

        expect(actual).toBeTruthy()
    })

    it("returns false when a comma is not the most useful comma in its zone", (): void => {
        const commaClassId = CommaClassId._1_8575_k
        const commas = [
            {monzo: [-7, 11, -3, 0, -1]},
            {monzo: [21, -5, -2, -3]},
            {monzo: [24, -13, -1, 0, 1, 0, 0, 0, -1]},
            {monzo: [-3, 2, 0, 0, 0, 0, 1, -1]},
            {monzo: [-23, 10, 0, 0, 1, 1]},
            {monzo: [21, -10, 0, 1, 0, -1, 0, -1]},
            {monzo: [1, -2, 0, 1, 1, 0, -1]},
            {monzo: [-14, 5, 2, -1, 0, 0, 0, 1]},
        ] as Comma[]
        const usefulnessMetric = USEFULNESS_METRICS_WITH_PARAMETERS[UsefulnessMetricId.LEE].metric
        const usefulnessParameterSet = {
            [UsefulnessParameterId.SE]: 0.00195 as Parameter,
            [UsefulnessParameterId.TE]: 0.00195 as Parameter,
        }

        const actual = isCommaMostUsefulInZone(
            [commaClassId, commas],
            usefulnessMetric,
            usefulnessParameterSet,
        )

        // 1/8575's usefulness is 7.866050, but 17/19k's usefulness is 6.841035; (7.866050 - 6.841035)^2 = 1.050655
        expect(actual).toBeFalsy()
    })
})
