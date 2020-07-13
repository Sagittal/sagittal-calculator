import { computeSumOfSquaresForSubmetrics } from "../../../../../src/scripts/unpopularityMetric/sumOfSquares/sumOfSquaresForSubmetrics"
import {
    DynamicParameterValue,
    Parameter,
    Submetric,
    SubmetricType,
} from "../../../../../src/scripts/unpopularityMetric/types"
import { SumOfSquares } from "../../../../../src/scripts/unpopularityMetric/sumOfSquares/types"
import { Combination } from "../../../../../src/utilities/types"

describe("computeSumOfSquaresForSubmetrics", () => {
    it("returns the sum-of-squares for a given submetric combination", () => {
        const submetrics = [
            {
                [ Parameter.K ]: 0.038 as DynamicParameterValue,
                [ Parameter.A ]: 1.994 as DynamicParameterValue,
                [ Parameter.A_IS_BASE ]: true,
                [ Parameter.Y ]: 0.455 as DynamicParameterValue,
                [ Parameter.W ]: -2.08 as DynamicParameterValue,
                [ Parameter.NUMERATOR_IS_NUMINATOR ]: false,
            },
            {
                [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPFAR,
                [ Parameter.WEIGHT ]: 0.577 as DynamicParameterValue,
                [ Parameter.NUMERATOR_IS_NUMINATOR ]: false,
            },
        ] as Combination<Submetric>

        const result = computeSumOfSquaresForSubmetrics(submetrics)

        expect(result).toBe(0.004260809896143936 as SumOfSquares)
    })
})
