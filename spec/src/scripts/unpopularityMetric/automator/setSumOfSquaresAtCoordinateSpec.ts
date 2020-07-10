import {setSumOfSquaresAtCoordinate} from "../../../../../src/scripts/unpopularityMetric/automator/setSumOfSquaresAtCoordinate"

describe("setSumOfSquaresAtCoordinate", () => {
    it("saves the sum of squares at the coordinate", () => {
        const sumsOfSquares = []
        const sumOfSquares = 0.0045843033
        const coordinate = [2, 0, 3]

        setSumOfSquaresAtCoordinate(sumOfSquares, sumsOfSquares, coordinate)

        expect(sumsOfSquares).toEqual(
            [
                undefined,
                undefined,
                [
                    [ undefined, undefined, undefined, 0.0045843033 ]
                ]
            ],
        )
    })
})
