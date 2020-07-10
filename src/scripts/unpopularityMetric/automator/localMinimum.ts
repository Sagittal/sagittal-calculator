import {computeAdjacentCoordinates} from "./adjacentCoodinates"
import {getSumOfSquaresAtCoordinate} from "./getSumOfSquaresAtCoordinate"

const getSumOfSquaresAtCoordinateIfLocalMinimum = (sumsOfSquares, coordinate) => {
    const adjacentCoordinates = computeAdjacentCoordinates(coordinate)
    const sumOfSquares = getSumOfSquaresAtCoordinate(sumsOfSquares, coordinate)

    const isLocalMinimum = adjacentCoordinates.every(adjacentCoordinate => {
        const adjacentSumOfSquares = getSumOfSquaresAtCoordinate(sumsOfSquares, adjacentCoordinate)

        return !adjacentSumOfSquares || adjacentSumOfSquares > sumOfSquares
    })

    if (isLocalMinimum) {
        return sumOfSquares
    }
}

export {
    getSumOfSquaresAtCoordinateIfLocalMinimum,
}
