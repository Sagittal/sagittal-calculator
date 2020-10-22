import {Combination} from "../../../../../src/general/math"
import {SumOfSquares} from "../../../../../src/scripts/popularityMetricLfc/bestMetric"
import {
    computeSumOfSquaresForSubmetrics,
    Parameter,
    ParameterValue,
    Submetric,
} from "../../../../../src/scripts/popularityMetricLfc/sumOfSquares"

describe("computeSumOfSquaresForSubmetrics", (): void => {
    it("returns the sum-of-squares for a given submetric combination", (): void => {
        const submetrics = [
            {
                [Parameter.SUM]: true,
                [Parameter.K_AS_COEFFICIENT]: 0.038 as ParameterValue,
                [Parameter.A_AS_LOGARITHM_BASE]: 1.994 as ParameterValue,
                [Parameter.Y]: 0.455 as ParameterValue,
                [Parameter.W]: -2.08 as ParameterValue,
                [Parameter.USE_NUMINATOR]: true,
            },
            {
                [Parameter.COUNT]: true,
                [Parameter.WEIGHT_AS_COEFFICIENT]: 0.577 as ParameterValue,
                [Parameter.USE_NUMINATOR]: true,
            },
        ] as Combination<Submetric>

        const actual = computeSumOfSquaresForSubmetrics(submetrics)

        const expected = 0.004261 as SumOfSquares
        expect(actual).toBeCloseToTyped(expected)
    })
})
