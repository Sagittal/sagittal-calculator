import { Combination } from "../../../../../src/general/math"
import { computeMetricName } from "../../../../../src/scripts/unpopularityMetric/bestMetric/metricName"
import { Parameter, Submetric } from "../../../../../src/scripts/unpopularityMetric/sumOfSquares"

describe("computeMetricName", () => {
    it("makes a string out of the parameters (ignoring values) in each submetric", () => {
        const submetrics = [
            {
                [ Parameter.A_AS_LOGARITHM_BASE ]: 2.1,
                [ Parameter.SUM ]: true,
            },
            {
                [ Parameter.MAX ]: true,
                [ Parameter.WITHOUT_REPETITION ]: true,
            },
        ] as Combination<Submetric>

        const result = computeMetricName(submetrics)

        expect(result).toBe(`{aAsLogarithmBase,sum},{max,withoutRepetition}`)
    })

    it("sorts the parameters within each name (so that metrics which are the same get consolidated)", () => {
        const submetrics = [
            {
                [ Parameter.SUM ]: true,
                [ Parameter.A_AS_LOGARITHM_BASE ]: 2.1,
            },
            {
                [ Parameter.WITHOUT_REPETITION ]: true,
                [ Parameter.A_AS_POWER_EXPONENT ]: true,
                [ Parameter.MAX ]: true,
            },
        ] as Combination<Submetric>

        const result = computeMetricName(submetrics)

        expect(result).toBe(`{aAsLogarithmBase,sum},{aAsPowerExponent,max,withoutRepetition}`)
    })
})
