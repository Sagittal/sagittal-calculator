const setSumOfSquaresAtCoordinate = (sumOfSquares, sumsOfSquares, coordinate) => {
    let cursor = sumsOfSquares
    coordinate.slice(0, coordinate.length - 1).forEach(coordinateElement => {
        cursor[coordinateElement] = cursor[coordinateElement] || []
        cursor = cursor[coordinateElement]
    })

    cursor[coordinate[coordinate.length - 1]] = sumOfSquares
}

export {
    setSumOfSquaresAtCoordinate,
}
