import { setSumOfSquaresAtPoint } from "../../../../../src/scripts/unpopularityMetric/automator/setSumOfSquaresAtPoint"
import { SumOfSquares, SumsOfSquares } from "../../../../../src/scripts/unpopularityMetric/sumOfSquares/types"
import { SamplePoint } from "../../../../../src/scripts/unpopularityMetric/automator/samples/types"

describe("setSumOfSquaresAtCoordinate", () => {
    it("saves the sum of squares at the point", () => {
        const sumsOfSquares: SumsOfSquares = []
        const sumOfSquares: SumOfSquares = 0.0045843033 as SumOfSquares
        const point = [2, 0, 3] as SamplePoint

        setSumOfSquaresAtPoint(sumOfSquares, sumsOfSquares, point)

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
