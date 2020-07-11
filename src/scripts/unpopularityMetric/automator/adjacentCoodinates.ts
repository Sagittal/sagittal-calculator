import { Coordinate } from "./types"

const computeAdjacentCoordinates = (coordinate: Coordinate) => { // todo: rename coordinate per recent email with Dave
    const adjacentCoordinates: Coordinate[] = []

    coordinate.forEach((coordinateElement, index) => {
        const adjacentCoordinateOne: Coordinate = coordinate.slice() as Coordinate
        adjacentCoordinateOne[ index ] = coordinateElement - 1
        adjacentCoordinates.push(adjacentCoordinateOne)

        const adjacentCoordinateTwo: Coordinate = coordinate.slice() as Coordinate
        adjacentCoordinateTwo[ index ] = coordinateElement + 1
        adjacentCoordinates.push(adjacentCoordinateTwo)
    })

    return adjacentCoordinates
}

export {
    computeAdjacentCoordinates,
}
