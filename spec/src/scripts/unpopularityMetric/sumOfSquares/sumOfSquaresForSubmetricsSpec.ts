import { Combination } from "../../../../../src/general/math"
import {
    computeSumOfSquaresForSubmetrics,
    SumOfSquares,
} from "../../../../../src/scripts/unpopularityMetric/sumOfSquares"
import {
    Parameter,
    ParameterValue,
    Submetric,
    SubmetricType,
} from "../../../../../src/scripts/unpopularityMetric/types"

describe("computeSumOfSquaresForSubmetrics", () => {
    it("returns the sum-of-squares for a given submetric combination", () => {
        const submetrics = [
            {
                [ Parameter.K ]: 0.038 as ParameterValue,
                [ Parameter.A ]: 1.994 as ParameterValue,
                [ Parameter.A_IS_BASE ]: true,
                [ Parameter.Y ]: 0.455 as ParameterValue,
                [ Parameter.W ]: -2.08 as ParameterValue,
                [ Parameter.NUMERATOR_IS_NUMINATOR ]: false,
            },
            {
                [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPFAR,
                [ Parameter.WEIGHT ]: 0.577 as ParameterValue,
                [ Parameter.NUMERATOR_IS_NUMINATOR ]: false,
            },
        ] as Combination<Submetric>

        const result = computeSumOfSquaresForSubmetrics(submetrics)

        expect(result).toBe(0.004260809896143936 as SumOfSquares)
    })
})
