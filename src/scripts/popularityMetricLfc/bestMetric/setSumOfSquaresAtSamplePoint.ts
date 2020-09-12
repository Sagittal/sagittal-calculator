import { finalElement, indexOfFinalElement } from "../../../general"
import { SamplePoint } from "./scopeToSamples"
import { SumOfSquares, SumsOfSquares } from "./types"

const setSumOfSquaresAtSamplePoint = (
    sumOfSquares: undefined | SumOfSquares,
    sumsOfSquares: SumsOfSquares,
    samplePoint: SamplePoint,
) => {
    let cursor = sumsOfSquares
    samplePoint.slice(0, indexOfFinalElement(samplePoint)).forEach(dynamicParameterValueIndex => {
        cursor[ dynamicParameterValueIndex ] = cursor[ dynamicParameterValueIndex ] || []
        cursor = cursor[ dynamicParameterValueIndex ] as SumsOfSquares
    })

    cursor[ finalElement(samplePoint) ] = sumOfSquares
}

export {
    setSumOfSquaresAtSamplePoint,
}
