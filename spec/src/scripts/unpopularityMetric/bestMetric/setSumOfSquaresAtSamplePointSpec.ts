import { Sum } from "../../../../../src/general"
import { SamplePoint } from "../../../../../src/scripts/unpopularityMetric/bestMetric/scopeToSamples"
import { setSumOfSquaresAtSamplePoint } from "../../../../../src/scripts/unpopularityMetric/bestMetric/setSumOfSquaresAtSamplePoint"
import { SumsOfSquares } from "../../../../../src/scripts/unpopularityMetric/bestMetric/types"

describe("setSumOfSquaresAtPoint", () => {
    it("saves the sum of squares at the sample point", () => {
        const sumsOfSquares: SumsOfSquares = []
        const sumOfSquares: Sum<"SquaredWeightedRankDifferences"> = 0.0045843033 as Sum<"SquaredWeightedRankDifferences">
        const samplePoint = [2, 0, 3] as SamplePoint

        setSumOfSquaresAtSamplePoint(sumOfSquares, sumsOfSquares, samplePoint)

        const expectedSumsOfSquares = [
            undefined,
            undefined,
            [
                [undefined, undefined, undefined, sumOfSquares],
            ],
        ]
        expect(sumsOfSquares).toEqual(expectedSumsOfSquares)
    })
})
