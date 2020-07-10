import {getSumOfSquaresAtCoordinateIfLocalMinimum} from "../../../../../src/scripts/unpopularityMetric/automator/localMinimum"
import {setSumOfSquaresAtCoordinate} from "../../../../../src/scripts/unpopularityMetric/automator/setSumOfSquaresAtCoordinate"

describe("getSumOfSquaresAtCoordinateIfLocalMinimum", () => {
    let sumsOfSquares
    beforeEach(() => {
        sumsOfSquares = []

        for (let x = 0; x < 4; x++) {
            for (let y = 0; y < 4; y++) {
                for (let z = 0; z < 4; z++) {
                    for (let w = 0; w < 4; w++) {
                        setSumOfSquaresAtCoordinate(0.00454, sumsOfSquares, [x, y, z, w])
                    }
                }
            }
        }

        setSumOfSquaresAtCoordinate(0.00422, sumsOfSquares, [1, 0, 3, 2])

        setSumOfSquaresAtCoordinate(0.00666, sumsOfSquares, [1, 2, 2, 2])
        setSumOfSquaresAtCoordinate(0.00666, sumsOfSquares, [3, 2, 2, 2])
        setSumOfSquaresAtCoordinate(0.00666, sumsOfSquares, [2, 1, 2, 2])
        setSumOfSquaresAtCoordinate(0.00666, sumsOfSquares, [2, 3, 2, 2])
        setSumOfSquaresAtCoordinate(0.00666, sumsOfSquares, [2, 2, 1, 2])
        setSumOfSquaresAtCoordinate(0.00666, sumsOfSquares, [2, 2, 3, 2])
        setSumOfSquaresAtCoordinate(0.00666, sumsOfSquares, [2, 2, 2, 1])
        setSumOfSquaresAtCoordinate(0.00666, sumsOfSquares, [2, 2, 2, 3])

        setSumOfSquaresAtCoordinate(0.00666, sumsOfSquares, [0, 1, 1, 1])
        setSumOfSquaresAtCoordinate(0.00666, sumsOfSquares, [2, 1, 1, 1])
        setSumOfSquaresAtCoordinate(0.00666, sumsOfSquares, [1, 0, 1, 1])
        setSumOfSquaresAtCoordinate(0.00666, sumsOfSquares, [1, 2, 1, 1])
        setSumOfSquaresAtCoordinate(0.00666, sumsOfSquares, [1, 1, 0, 1])
        setSumOfSquaresAtCoordinate(0.00666, sumsOfSquares, [1, 1, 2, 1])
        setSumOfSquaresAtCoordinate(0.00666, sumsOfSquares, [1, 1, 1, 0])
        // setSumOfSquaresAtCoordinate(0.00666, sumsOfSquares, [1, 1, 1, 2]) this example is NOT QUITE a local minimum!
    })

    it("returns the sum-of-squares if it is lower at the coordinate than at every adjacent coordinates", () => {
        const coordinate = [1, 0, 3, 2]

        const result = getSumOfSquaresAtCoordinateIfLocalMinimum(sumsOfSquares, coordinate)

        expect(result).toEqual(0.00422)
    })

    it("another example of a local minimum", () => {
        const coordinate = [2, 2, 2, 2]

        const result = getSumOfSquaresAtCoordinateIfLocalMinimum(sumsOfSquares, coordinate)

        expect(result).toEqual(0.00454)
    })

    it("returns undefined if the sum-of-squares is not lower at the coordinate than at every adjacent coordinate", () => {
        const coordinate = [1, 1, 1, 1]

        const result = getSumOfSquaresAtCoordinateIfLocalMinimum(sumsOfSquares, coordinate)

        expect(result).toEqual(undefined)
    })

    it("another example of not local minimum", () => {
        const coordinate = [0, 3, 3, 1]

        const result = getSumOfSquaresAtCoordinateIfLocalMinimum(sumsOfSquares, coordinate)

        expect(result).toEqual(undefined)
    })
})
