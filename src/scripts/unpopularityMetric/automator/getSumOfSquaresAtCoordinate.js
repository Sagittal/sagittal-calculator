const getSumOfSquaresAtCoordinate = (sumsOfSquares, coordinate) => {
    let cursor = sumsOfSquares
    coordinate.slice(0, coordinate.length - 1).forEach(coordinateElement => {
        cursor[coordinateElement] = cursor[coordinateElement] || []
        cursor = cursor[coordinateElement]
    })

    return cursor[coordinate[coordinate.length - 1]]
}

module.exports = {
    getSumOfSquaresAtCoordinate,
}
