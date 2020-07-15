import { SamplePoint } from "../types"
import { SumsOfSquares } from "./types"
import { Sum } from "../../../../../general"

const setSumOfSquaresAtSamplePoint = (sumOfSquares: Sum<"SquaredWeightedRankDifferences">, sumsOfSquares: SumsOfSquares, samplePoint: SamplePoint) => {
    let cursor = sumsOfSquares
    samplePoint.slice(0, samplePoint.length - 1).forEach(dynamicParameterValueIndex => {
        cursor[ dynamicParameterValueIndex ] = cursor[ dynamicParameterValueIndex ] || []
        cursor = cursor[ dynamicParameterValueIndex ] as SumsOfSquares
    })

    cursor[ samplePoint[ samplePoint.length - 1 ] ] = sumOfSquares
}

export {
    setSumOfSquaresAtSamplePoint,
}
