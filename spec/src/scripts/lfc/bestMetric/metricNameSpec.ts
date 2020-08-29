import { Combination } from "../../../../../src/general/math"
import { SubmetricScope } from "../../../../../src/scripts/lfc/bestMetric"
import { computeMetricName } from "../../../../../src/scripts/lfc/bestMetric/metricName"
import { Parameter } from "../../../../../src/scripts/lfc/sumOfSquares"

describe("computeMetricName", () => {
    it("makes a string out of the parameters (ignoring values) in each submetric", () => {
        const submetricScopes = [
            {
                [ Parameter.A_AS_LOGARITHM_BASE ]: { center: 2.1, span: 3, resolution: 30 },
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

    it("sorts the parameters within each name (so that metrics which are the same get consolidated)", () => {
        const submetricScopes = [
            {
                [ Parameter.SUM ]: true,
                [ Parameter.A_AS_LOGARITHM_BASE ]: { center: 2.1, span: 3, resolution: 30 },
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

    it("sorts by submetricScopes too", () => {
        const submetricScopes = [
            {
                [ Parameter.WITHOUT_REPETITION ]: true,
                [ Parameter.A_AS_POWER_EXPONENT ]: true,
                [ Parameter.MAX ]: true,
            },
            {
                [ Parameter.SUM ]: true,
                [ Parameter.A_AS_LOGARITHM_BASE ]: { center: 2.1, span: 3, resolution: 30 },
            },
        ] as Combination<SubmetricScope>

        const actual = computeMetricName(submetricScopes)

        expect(actual).toBe(`{aAsLogarithmBase,sum},{aAsPowerExponent,max,withoutRepetition}`)
    })
})
