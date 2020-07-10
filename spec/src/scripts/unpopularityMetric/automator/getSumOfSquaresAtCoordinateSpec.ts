import {getSumOfSquaresAtCoordinate} from "../../../../../src/scripts/unpopularityMetric/automator/getSumOfSquaresAtCoordinate"

describe("getSumOfSquaresAtCoordinate", () => {
    it("returns the sum-of-squares at that coordinate", () => {
        const sumsOfSquares = [
            undefined,
            undefined,
            [
                [ undefined, undefined, undefined, 0.0045843033 ]
            ]
        ]
        const coordinate = [2, 0, 3]

        const result = getSumOfSquaresAtCoordinate(sumsOfSquares, coordinate)

        expect(result).toEqual(0.0045843033)
    })
})
