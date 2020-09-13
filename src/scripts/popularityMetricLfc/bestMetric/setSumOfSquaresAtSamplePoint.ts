import { finalElement, Index, indexOfFinalElement } from "../../../general"
import { ParameterValue } from "../sumOfSquares"
import { SamplePoint } from "./scopeToSamples"
import { SumOfSquares, SumsOfSquares } from "./types"

const setSumOfSquaresAtSamplePoint = (
    sumOfSquares: undefined | SumOfSquares,
    sumsOfSquares: SumsOfSquares,
    samplePoint: SamplePoint,
): void => {
    let cursor = sumsOfSquares
    samplePoint.slice(0, indexOfFinalElement(samplePoint))
        .forEach((dynamicParameterValueIndex: Index<ParameterValue>): void => {
            cursor[ dynamicParameterValueIndex ] = cursor[ dynamicParameterValueIndex ] || []
            cursor = cursor[ dynamicParameterValueIndex ] as SumsOfSquares
        })

    cursor[ finalElement(samplePoint) ] = sumOfSquares
}

export {
    setSumOfSquaresAtSamplePoint,
}
