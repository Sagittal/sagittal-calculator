import { Sum } from "../../../general"
import { SamplePoint } from "./scopeToSamples"
import { SumsOfSquares } from "./types"

const setSumOfSquaresAtSamplePoint = (sumOfSquares: undefined | Sum<"SquaredWeightedRankDifferences">, sumsOfSquares: SumsOfSquares, samplePoint: SamplePoint) => {
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
