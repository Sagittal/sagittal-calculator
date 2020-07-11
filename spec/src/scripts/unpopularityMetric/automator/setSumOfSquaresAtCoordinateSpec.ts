import { setSumOfSquaresAtCoordinate } from "../../../../../src/scripts/unpopularityMetric/automator/setSumOfSquaresAtCoordinate"
import { SumOfSquares, SumsOfSquares } from "../../../../../src/scripts/unpopularityMetric/sumOfSquares/types"
import { Coordinate } from "../../../../../src/scripts/unpopularityMetric/automator/types"

describe("setSumOfSquaresAtCoordinate", () => {
    it("saves the sum of squares at the coordinate", () => {
        const sumsOfSquares: SumsOfSquares = []
        const sumOfSquares: SumOfSquares = 0.0045843033 as SumOfSquares
        const coordinate = [2, 0, 3] as Coordinate

        setSumOfSquaresAtCoordinate(sumOfSquares, sumsOfSquares, coordinate)

        expect(sumsOfSquares).toEqual(
            [
                undefined,
                undefined,
                [
                    [undefined, undefined, undefined, 0.0045843033],
                ],
            ] as SumsOfSquares,
        )
    })
})
