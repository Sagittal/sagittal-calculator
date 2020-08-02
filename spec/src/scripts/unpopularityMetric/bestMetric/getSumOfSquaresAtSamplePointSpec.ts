import { getSumOfSquaresAtSamplePoint } from "../../../../../src/scripts/unpopularityMetric/bestMetric/getSumOfSquaresAtSamplePoint"
import { SamplePoint } from "../../../../../src/scripts/unpopularityMetric/bestMetric/scopeToSamples"
import { SumOfSquares, SumsOfSquares } from "../../../../../src/scripts/unpopularityMetric/bestMetric/types"

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
