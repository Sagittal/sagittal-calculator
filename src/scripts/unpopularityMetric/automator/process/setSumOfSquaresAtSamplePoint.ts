import { SamplePoint } from "./samples/types"
import { SumOfSquares, SumsOfSquares } from "../../sumOfSquares/types"

const setSumOfSquaresAtSamplePoint = (sumOfSquares: SumOfSquares, sumsOfSquares: SumsOfSquares, samplePoint: SamplePoint) => {
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
