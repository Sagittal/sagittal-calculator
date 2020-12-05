import {Combination} from "@sagittal/general"
import {SubmetricScope} from "../../../../../src/scripts/popularityMetricLfc/bestMetric"
import {computeMetricName} from "../../../../../src/scripts/popularityMetricLfc/bestMetric/metricName"
import {PopularityParameterId} from "../../../../../src/scripts/popularityMetricLfc/sumOfSquares"

describe("computeMetricName", (): void => {
    it("makes a string out of the parameters (ignoring values) in each submetric", (): void => {
        const submetricScopes = [
            {
                [PopularityParameterId.A_AS_LOGARITHM_BASE]: {center: 2.1, window: 3, ed: 30},
                [PopularityParameterId.SUM]: true,
            },
            {
                [PopularityParameterId.MAX]: true,
                [PopularityParameterId.WITHOUT_REPETITION]: true,
            },
        ] as Combination<SubmetricScope>

        const actual = computeMetricName(submetricScopes)

        expect(actual).toBe(`{aAsLogarithmBase,sum},{max,withoutRepetition}`)
    })

    it("sorts the parameters within each name (so that metrics which are the same get coalesced)", (): void => {
        const submetricScopes = [
            {
                [PopularityParameterId.SUM]: true,
                [PopularityParameterId.A_AS_LOGARITHM_BASE]: {center: 2.1, window: 3, ed: 30},
            },
            {
                [PopularityParameterId.WITHOUT_REPETITION]: true,
                [PopularityParameterId.A_AS_POWER_EXPONENT]: true,
                [PopularityParameterId.MAX]: true,
            },
        ] as Combination<SubmetricScope>

        const actual = computeMetricName(submetricScopes)

        expect(actual).toBe(`{aAsLogarithmBase,sum},{aAsPowerExponent,max,withoutRepetition}`)
    })

    it("sorts by submetricScopes too", (): void => {
        const submetricScopes = [
            {
                [PopularityParameterId.WITHOUT_REPETITION]: true,
                [PopularityParameterId.A_AS_POWER_EXPONENT]: true,
                [PopularityParameterId.MAX]: true,
            },
            {
                [PopularityParameterId.SUM]: true,
                [PopularityParameterId.A_AS_LOGARITHM_BASE]: {center: 2.1, window: 3, ed: 30},
            },
        ] as Combination<SubmetricScope>

        const actual = computeMetricName(submetricScopes)

        expect(actual).toBe(`{aAsLogarithmBase,sum},{aAsPowerExponent,max,withoutRepetition}`)
    })
})
