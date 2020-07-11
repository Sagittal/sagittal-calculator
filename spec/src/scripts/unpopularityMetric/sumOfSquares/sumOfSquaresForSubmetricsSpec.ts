import { computeSumOfSquaresForSubmetrics } from "../../../../../src/scripts/unpopularityMetric/sumOfSquares/sumOfSquaresForSubmetrics"
import { Parameter, SubmetricType } from "../../../../../src/scripts/unpopularityMetric/types"
import { SumOfSquares } from "../../../../../src/scripts/unpopularityMetric/sumOfSquares/types"

describe("computeSumOfSquaresForSubmetrics", () => {
    it("returns the sum-of-squares for a given submetric combination", () => {
        const submetrics = [
            {
                [ Parameter.K ]: 0.038,
                [ Parameter.A ]: 1.994,
                [ Parameter.A_IS_BASE ]: true,
                [ Parameter.Y ]: 0.455,
                [ Parameter.W ]: -2.08,
                [ Parameter.NUMERATOR_IS_NUMINATOR ]: false,
            },
            {
                [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPFAR,
                [ Parameter.WEIGHT ]: 0.577,
                [ Parameter.NUMERATOR_IS_NUMINATOR ]: false,
            },
        ]

        const result = computeSumOfSquaresForSubmetrics(submetrics)

        expect(result).toBe(0.004260809896143936 as SumOfSquares)
    })
})
