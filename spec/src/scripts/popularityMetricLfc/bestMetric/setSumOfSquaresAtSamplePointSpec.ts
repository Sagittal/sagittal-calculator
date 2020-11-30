import {SamplePoint, SumOfSquares, SumsOfSquares} from "../../../../../src/scripts/popularityMetricLfc/bestMetric"
import {setSumOfSquaresAtSamplePoint} from "../../../../../src/scripts/popularityMetricLfc/bestMetric/setSumOfSquaresAtSamplePoint"

describe("setSumOfSquaresAtPoint", (): void => {
    it("saves the sum of squares at the sample point", (): void => {
        const sumsOfSquares: SumsOfSquares = []
        const sumOfSquares: SumOfSquares = 0.004584 as SumOfSquares
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
