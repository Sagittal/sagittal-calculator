import { Sum } from "../../../../../src/general"
import { Combination } from "../../../../../src/general/math"
import { computeSumOfSquaresForSubmetrics } from "../../../../../src/scripts/unpopularityMetric/sumOfSquares"
import { Parameter, ParameterValue, Submetric } from "../../../../../src/scripts/unpopularityMetric/types"

describe("computeSumOfSquaresForSubmetrics", () => {
    it("returns the sum-of-squares for a given submetric combination", () => {
        const submetrics = [
            {
                [ Parameter.SUM ]: true,
                [ Parameter.K_AS_COEFFICIENT ]: 0.038 as ParameterValue,
                [ Parameter.A_AS_BASE ]: 1.994 as ParameterValue,
                [ Parameter.Y ]: 0.455 as ParameterValue,
                [ Parameter.W ]: -2.08 as ParameterValue,
                [ Parameter.USE_NUMINATOR ]: true,
            },
            {
                [ Parameter.COUNT ]: true,
                [ Parameter.WEIGHT_AS_COEFFICIENT ]: 0.577 as ParameterValue,
                [ Parameter.USE_NUMINATOR ]: true,
            },
        ] as Combination<Submetric>

        const result = computeSumOfSquaresForSubmetrics(submetrics)

        expect(result).toBe(0.004260809896143936 as Sum<"SquaredWeightedRankDifferences">)
    })
})
