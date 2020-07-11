import { Point } from "./samples/types"

const computeAdjacentPoints = (point: Point) => {
    const adjacentPoints: Point[] = []

    point.forEach((coordinate, index) => {
        const adjacentPointOne: Point = point.slice() as Point
        adjacentPointOne[ index ] = coordinate - 1
        adjacentPoints.push(adjacentPointOne)

        const adjacentPointTwo: Point = point.slice() as Point
        adjacentPointTwo[ index ] = coordinate + 1
        adjacentPoints.push(adjacentPointTwo)
    })

    return adjacentPoints
}

export {
    computeAdjacentPoints,
}
