import { SumOfSquares } from "../../../sumOfSquares"
import { SamplePoint } from "../types"
import { SumsOfSquares } from "./types"

const getSumOfSquaresAtSamplePoint = (sumsOfSquares: SumsOfSquares, samplePoint: SamplePoint): SumOfSquares | undefined => {
    let cursor = sumsOfSquares
    samplePoint.slice(0, samplePoint.length - 1).forEach(dynamicParameterValueIndex => {
        if (cursor) {
            cursor = cursor[ dynamicParameterValueIndex ] as SumsOfSquares
        }
    })

    if (cursor) {
        return cursor[ samplePoint[ samplePoint.length - 1 ] ] as SumOfSquares
    }

    return undefined
}

export {
    getSumOfSquaresAtSamplePoint,
}
