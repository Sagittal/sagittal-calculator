import { Sum } from "../../../../../general"
import { SamplePoint } from "../types"
import { SumsOfSquares } from "./types"

const getSumOfSquaresAtSamplePoint = (sumsOfSquares: SumsOfSquares, samplePoint: SamplePoint): Sum<"SquaredWeightedRankDifferences"> | undefined => {
    let cursor = sumsOfSquares
    samplePoint.slice(0, samplePoint.length - 1).forEach(dynamicParameterValueIndex => {
        if (cursor) {
            cursor = cursor[ dynamicParameterValueIndex ] as SumsOfSquares
        }
    })

    if (cursor) {
        return cursor[ samplePoint[ samplePoint.length - 1 ] ] as Sum<"SquaredWeightedRankDifferences">
    }

    return undefined
}

export {
    getSumOfSquaresAtSamplePoint,
}
