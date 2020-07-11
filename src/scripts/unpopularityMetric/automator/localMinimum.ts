import { computeAdjacentCoordinates } from "./adjacentCoodinates"
import { getSumOfSquaresAtCoordinate } from "./getSumOfSquaresAtCoordinate"
import { SumOfSquares, SumsOfSquares } from "../sumOfSquares/types"
import { Coordinate } from "./types"

const getSumOfSquaresAtCoordinateIfLocalMinimum = (sumsOfSquares: SumsOfSquares, coordinate: Coordinate): SumOfSquares | undefined => {
    const adjacentCoordinates = computeAdjacentCoordinates(coordinate)
    const sumOfSquares = getSumOfSquaresAtCoordinate(sumsOfSquares, coordinate)

    const isLocalMinimum = adjacentCoordinates.every(adjacentCoordinate => {
        const adjacentSumOfSquares = getSumOfSquaresAtCoordinate(sumsOfSquares, adjacentCoordinate)

        return !adjacentSumOfSquares || sumOfSquares && adjacentSumOfSquares > sumOfSquares
    })

    if (isLocalMinimum) {
        return sumOfSquares
    }

    return undefined
}

export {
    getSumOfSquaresAtCoordinateIfLocalMinimum,
}
