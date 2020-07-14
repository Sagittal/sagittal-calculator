import { getSumOfSquaresAtSamplePoint } from "../../../../../../../src/scripts/unpopularityMetric/solver/search/bestMetric/getSumOfSquaresAtSamplePoint"
import { SumsOfSquares } from "../../../../../../../src/scripts/unpopularityMetric/solver/search/bestMetric/types"
import { SamplePoint } from "../../../../../../../src/scripts/unpopularityMetric/solver/search/types"
import { SumOfSquares } from "../../../../../../../src/scripts/unpopularityMetric/sumOfSquares"

describe("getSumOfSquaresAtPoint", () => {
    it("returns the sum-of-squares at that sample point", () => {
        const sumsOfSquares: SumsOfSquares = [
            undefined,
            undefined,
            [
                [undefined, undefined, undefined, 0.0045843033 as SumOfSquares],
            ],
        ]
        const samplePoint = [2, 0, 3] as SamplePoint

        const result = getSumOfSquaresAtSamplePoint(sumsOfSquares, samplePoint)

        expect(result).toEqual(0.0045843033 as SumOfSquares)
    })
})
