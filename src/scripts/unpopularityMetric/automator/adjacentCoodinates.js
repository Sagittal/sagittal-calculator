const computeAdjacentCoordinates = coordinate => {
    const adjacentCoordinates = []

    coordinate.forEach((coordinateElement, index) => {
        const adjacentCoordinateOne = coordinate.slice()
        adjacentCoordinateOne[index] = coordinateElement - 1
        adjacentCoordinates.push(adjacentCoordinateOne)

        const adjacentCoordinateTwo = coordinate.slice()
        adjacentCoordinateTwo[index] = coordinateElement + 1
        adjacentCoordinates.push(adjacentCoordinateTwo)
    })

    return adjacentCoordinates
}

module.exports = {
    computeAdjacentCoordinates,
}
