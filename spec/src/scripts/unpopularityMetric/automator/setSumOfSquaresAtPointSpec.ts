import { setSumOfSquaresAtPoint } from "../../../../../src/scripts/unpopularityMetric/automator/setSumOfSquaresAtPoint"
import { SumOfSquares, SumsOfSquares } from "../../../../../src/scripts/unpopularityMetric/sumOfSquares/types"
import { Point } from "../../../../../src/scripts/unpopularityMetric/samples/types"

describe("setSumOfSquaresAtCoordinate", () => {
    it("saves the sum of squares at the point", () => {
        const sumsOfSquares: SumsOfSquares = []
        const sumOfSquares: SumOfSquares = 0.0045843033 as SumOfSquares
        const point = [2, 0, 3] as Point

        setSumOfSquaresAtPoint(sumOfSquares, sumsOfSquares, point)

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
