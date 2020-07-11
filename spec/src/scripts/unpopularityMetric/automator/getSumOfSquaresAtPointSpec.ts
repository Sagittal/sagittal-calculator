import { getSumOfSquaresAtPoint } from "../../../../../src/scripts/unpopularityMetric/automator/getSumOfSquaresAtPoint"
import { SumOfSquares, SumsOfSquares } from "../../../../../src/scripts/unpopularityMetric/sumOfSquares/types"
import { Point } from "../../../../../src/scripts/unpopularityMetric/automator/samples/types"

describe("getSumOfSquaresAtCoordinate", () => {
    it("returns the sum-of-squares at that point", () => {
        const sumsOfSquares: SumsOfSquares = [
            undefined,
            undefined,
            [
                [undefined, undefined, undefined, 0.0045843033 as SumOfSquares],
            ],
        ]
        const point = [2, 0, 3] as Point

        const result = getSumOfSquaresAtPoint(sumsOfSquares, point)

        expect(result).toEqual(0.0045843033 as SumOfSquares)
    })
})
