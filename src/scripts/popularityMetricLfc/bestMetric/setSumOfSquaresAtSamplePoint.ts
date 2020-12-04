import {computeKeyPath, setAt} from "../../../general"
import {SamplePoint} from "./scopeToSamples"
import {SumOfSquares, SumsOfSquares} from "./types"

const setSumOfSquaresAtSamplePoint = (
    sumOfSquares: undefined | SumOfSquares,
    sumsOfSquares: SumsOfSquares,
    samplePoint: SamplePoint,
): void => {
    setAt(
        sumsOfSquares as Record<number, SumsOfSquares | SumOfSquares>,
        computeKeyPath(...samplePoint),
        sumOfSquares,
        {parents: []},
    )
}

export {
    setSumOfSquaresAtSamplePoint,
}
