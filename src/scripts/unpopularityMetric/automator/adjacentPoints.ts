import { SamplePoint } from "./samples/types"

const computeAdjacentPoints = (point: SamplePoint) => {
    const adjacentPoints: SamplePoint[] = []

    point.forEach((coordinate, index) => {
        const adjacentPointOne: SamplePoint = point.slice() as SamplePoint
        adjacentPointOne[ index ] = coordinate - 1
        adjacentPoints.push(adjacentPointOne)

        const adjacentPointTwo: SamplePoint = point.slice() as SamplePoint
        adjacentPointTwo[ index ] = coordinate + 1
        adjacentPoints.push(adjacentPointTwo)
    })

    return adjacentPoints
}

export {
    computeAdjacentPoints,
}
