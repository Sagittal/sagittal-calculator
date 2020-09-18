import { setAt } from "../../../general"
import { SamplePoint } from "./scopeToSamples"
import { SumOfSquares, SumsOfSquares } from "./types"

const setSumOfSquaresAtSamplePoint = (
    sumOfSquares: undefined | SumOfSquares,
    sumsOfSquares: SumsOfSquares,
    samplePoint: SamplePoint,
): void => {
    setAt(
        sumsOfSquares as Record<number, SumsOfSquares | SumOfSquares>,
        samplePoint,
        sumOfSquares,
        { parents: true },
    )
}

export {
    setSumOfSquaresAtSamplePoint,
}
