import {Combination, Parameter} from "../../../../../src/general"
import {SumOfSquares} from "../../../../../src/scripts/popularityMetricLfc/bestMetric"
import {
    computeSumOfSquaresForSubmetrics,
    PopularityParameterId,
    Submetric,
} from "../../../../../src/scripts/popularityMetricLfc/sumOfSquares"

describe("computeSumOfSquaresForSubmetrics", (): void => {
    it("returns the sum-of-squares for a given submetric combination", (): void => {
        const submetrics = [
            {
                [PopularityParameterId.SUM]: true,
                [PopularityParameterId.K_AS_COEFFICIENT]: 0.038 as Parameter,
                [PopularityParameterId.A_AS_LOGARITHM_BASE]: 1.994 as Parameter,
                [PopularityParameterId.Y]: 0.455 as Parameter,
                [PopularityParameterId.W]: -2.08 as Parameter,
                [PopularityParameterId.USE_NUMINATOR]: true,
            },
            {
                [PopularityParameterId.COUNT]: true,
                [PopularityParameterId.WEIGHT_AS_COEFFICIENT]: 0.577 as Parameter,
                [PopularityParameterId.USE_NUMINATOR]: true,
            },
        ] as Combination<Submetric>

        const actual = computeSumOfSquaresForSubmetrics(submetrics)

        const expected = 0.004261 as SumOfSquares
        expect(actual).toBeCloseToTyped(expected)
    })
})
