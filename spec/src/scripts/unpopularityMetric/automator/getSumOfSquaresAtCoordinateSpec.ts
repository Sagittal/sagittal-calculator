import { getSumOfSquaresAtCoordinate } from "../../../../../src/scripts/unpopularityMetric/automator/getSumOfSquaresAtCoordinate"
import { SumOfSquares, SumsOfSquares } from "../../../../../src/scripts/unpopularityMetric/sumOfSquares/types"
import { Coordinate } from "../../../../../src/scripts/unpopularityMetric/automator/types"

describe("getSumOfSquaresAtCoordinate", () => {
    it("returns the sum-of-squares at that coordinate", () => {
        const sumsOfSquares: SumsOfSquares = [
            undefined,
            undefined,
            [
                [undefined, undefined, undefined, 0.0045843033 as SumOfSquares],
            ],
        ]
        const coordinate = [2, 0, 3] as Coordinate

        const result = getSumOfSquaresAtCoordinate(sumsOfSquares, coordinate)

        expect(result).toEqual(0.0045843033 as SumOfSquares)
    })
})
