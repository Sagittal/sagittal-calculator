import { Sum } from "../../../general"
import { computeAdjacentSamplePoints } from "./adjacentSamplePoints"
import { getSumOfSquaresAtSamplePoint } from "./getSumOfSquaresAtSamplePoint"
import { SamplePoint } from "./scopeToSamples"
import { SumsOfSquares } from "./types"

// todo i don't like this long string and wish it were a constant or something so i could option-enter it
const getSumOfSquaresAtSamplePointIfLocalMinimum = (sumsOfSquares: SumsOfSquares, samplePoint: SamplePoint): Sum<"SquaredWeightedRankDifferences"> | undefined => {
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
