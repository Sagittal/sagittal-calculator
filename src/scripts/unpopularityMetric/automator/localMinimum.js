const {computeAdjacentCoordinates} = require("./adjacentCoodinates")
const {getSumOfSquaresAtCoordinate} = require("./getSumOfSquaresAtCoordinate")

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

module.exports = {
    getSumOfSquaresAtCoordinateIfLocalMinimum,
}
