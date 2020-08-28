import { dig, Maybe } from "../../../general"
import { SamplePoint, SumOfSquares, SumsOfSquares } from "../bestMetric"
import { computeAdjacentSamplePoints } from "./adjacentSamplePoints"

const getSumOfSquaresAtSamplePointIfLocalMin = (
    sumsOfSquares: SumsOfSquares,
    samplePoint: SamplePoint,
): Maybe<SumOfSquares> => {
    const adjacentSamplePoints = computeAdjacentSamplePoints(samplePoint)
    const sumOfSquares = dig(sumsOfSquares, samplePoint) as Maybe<SumOfSquares>

    const isLocalMin = adjacentSamplePoints.every(adjacentSamplePoint => {
        const adjacentSumOfSquares = dig(sumsOfSquares, adjacentSamplePoint) as Maybe<SumOfSquares>

        return !adjacentSumOfSquares || sumOfSquares && adjacentSumOfSquares > sumOfSquares
    })

    if (isLocalMin) {
        return sumOfSquares
    }

    return undefined
}

export {
    getSumOfSquaresAtSamplePointIfLocalMin,
}
