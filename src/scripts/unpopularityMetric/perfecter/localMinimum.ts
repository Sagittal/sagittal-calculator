import { dig } from "../../../general"
import { SamplePoint, SumOfSquares, SumsOfSquares } from "../bestMetric"
import { computeAdjacentSamplePoints } from "./adjacentSamplePoints"

const getSumOfSquaresAtSamplePointIfLocalMinimum = (sumsOfSquares: SumsOfSquares, samplePoint: SamplePoint): SumOfSquares | undefined => {
    const adjacentSamplePoints = computeAdjacentSamplePoints(samplePoint)
    const sumOfSquares = dig(sumsOfSquares, samplePoint) as SumOfSquares | undefined

    const isLocalMinimum = adjacentSamplePoints.every(adjacentSamplePoint => {
        const adjacentSumOfSquares = dig(sumsOfSquares, adjacentSamplePoint) as SumOfSquares | undefined

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
