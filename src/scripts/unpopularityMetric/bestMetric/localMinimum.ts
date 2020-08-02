import { computeAdjacentSamplePoints } from "./adjacentSamplePoints"
import { getSumOfSquaresAtSamplePoint } from "./getSumOfSquaresAtSamplePoint"
import { SamplePoint } from "./scopeToSamples"
import { SumOfSquares, SumsOfSquares } from "./types"

const getSumOfSquaresAtSamplePointIfLocalMinimum = (sumsOfSquares: SumsOfSquares, samplePoint: SamplePoint): SumOfSquares | undefined => {
    const adjacentSamplePoints = computeAdjacentSamplePoints(samplePoint)
    const sumOfSquares = getSumOfSquaresAtSamplePoint(sumsOfSquares, samplePoint)

    const isLocalMinimum = adjacentSamplePoints.every(adjacentSamplePoint => {
        const adjacentSumOfSquares = getSumOfSquaresAtSamplePoint(sumsOfSquares, adjacentSamplePoint)

        return !adjacentSumOfSquares || sumOfSquares && adjacentSumOfSquares > sumOfSquares
    })

    if (isLocalMinimum) {
        return sumOfSquares
    }

    return undefined
}

export {
    getSumOfSquaresAtSamplePointIfLocalMinimum,
}
