import { computeAdjacentPoints } from "./adjacentPoints"
import { getSumOfSquaresAtPoint } from "./getSumOfSquaresAtPoint"
import { SumOfSquares, SumsOfSquares } from "../sumOfSquares/types"
import { SamplePoint } from "./samples/types"

const getSumOfSquaresAtPointIfLocalMinimum = (sumsOfSquares: SumsOfSquares, point: SamplePoint): SumOfSquares | undefined => {
    const adjacentPoints = computeAdjacentPoints(point)
    const sumOfSquares = getSumOfSquaresAtPoint(sumsOfSquares, point)

    const isLocalMinimum = adjacentPoints.every(adjacentPoint => {
        const adjacentSumOfSquares = getSumOfSquaresAtPoint(sumsOfSquares, adjacentPoint)

        return !adjacentSumOfSquares || sumOfSquares && adjacentSumOfSquares > sumOfSquares
    })

    if (isLocalMinimum) {
        return sumOfSquares
    }

    return undefined
}

export {
    getSumOfSquaresAtPointIfLocalMinimum,
}
