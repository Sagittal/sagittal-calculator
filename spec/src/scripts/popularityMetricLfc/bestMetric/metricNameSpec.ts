import { Combination } from "../../../../../src/general/math"
import { SubmetricScope } from "../../../../../src/scripts/popularityMetricLfc/bestMetric"
import { computeMetricName } from "../../../../../src/scripts/popularityMetricLfc/bestMetric/metricName"
import { Parameter } from "../../../../../src/scripts/popularityMetricLfc/sumOfSquares"

describe("computeMetricName", (): void => {
    it("makes a string out of the parameters (ignoring values) in each submetric", (): void => {
        const submetricScopes = [
            {
                [ Parameter.A_AS_LOGARITHM_BASE ]: { center: 2.1, window: 3, ed: 30 },
                [ Parameter.SUM ]: true,
            },
            {
                [ Parameter.MAX ]: true,
                [ Parameter.WITHOUT_REPETITION ]: true,
            },
        ] as Combination<SubmetricScope>

        const actual = computeMetricName(submetricScopes)

        expect(actual).toBe(`{aAsLogarithmBase,sum},{max,withoutRepetition}`)
    })

    it("sorts the parameters within each name (so that metrics which are the same get coalesced)", (): void => {
        const submetricScopes = [
            {
                [ Parameter.SUM ]: true,
                [ Parameter.A_AS_LOGARITHM_BASE ]: { center: 2.1, window: 3, ed: 30 },
            },
            {
                [ Parameter.WITHOUT_REPETITION ]: true,
                [ Parameter.A_AS_POWER_EXPONENT ]: true,
                [ Parameter.MAX ]: true,
            },
        ] as Combination<SubmetricScope>

        const actual = computeMetricName(submetricScopes)

        expect(actual).toBe(`{aAsLogarithmBase,sum},{aAsPowerExponent,max,withoutRepetition}`)
    })

    it("sorts by submetricScopes too", (): void => {
        const submetricScopes = [
            {
                [ Parameter.WITHOUT_REPETITION ]: true,
                [ Parameter.A_AS_POWER_EXPONENT ]: true,
                [ Parameter.MAX ]: true,
            },
            {
                [ Parameter.SUM ]: true,
                [ Parameter.A_AS_LOGARITHM_BASE ]: { center: 2.1, window: 3, ed: 30 },
            },
        ] as Combination<SubmetricScope>

        const actual = computeMetricName(submetricScopes)

        expect(actual).toBe(`{aAsLogarithmBase,sum},{aAsPowerExponent,max,withoutRepetition}`)
    })
})
