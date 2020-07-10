const getSumOfSquaresAtCoordinate = (sumsOfSquares, coordinate) => {
    let cursor = sumsOfSquares
    coordinate.slice(0, coordinate.length - 1).forEach(coordinateElement => {
        if (cursor) cursor = cursor[coordinateElement]
    })

    if (cursor) {
        return cursor[coordinate[coordinate.length - 1]]
    }
}

export {
    getSumOfSquaresAtCoordinate,
}
