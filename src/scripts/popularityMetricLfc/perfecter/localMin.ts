import {computeKeyPath, dig, isUndefined, Maybe, Obj} from "../../../general"
import {SamplePoint, SumOfSquares, SumsOfSquares} from "../bestMetric"
import {computeAdjacentSamplePoints} from "./adjacentSamplePoints"

const getSumOfSquaresAtSamplePointIfLocalMin = (
    sumsOfSquares: SumsOfSquares,
    samplePoint: SamplePoint,
): Maybe<SumOfSquares> => {
    const adjacentSamplePoints = computeAdjacentSamplePoints(samplePoint)
    const sumOfSquares = dig(sumsOfSquares as Obj, computeKeyPath(...samplePoint)) as Maybe<SumOfSquares>

    const isLocalMin = adjacentSamplePoints.every((adjacentSamplePoint: SamplePoint): boolean => {
        const adjacentSumOfSquares =
            dig(sumsOfSquares as Obj, computeKeyPath(...adjacentSamplePoint)) as Maybe<SumOfSquares>

        return isUndefined(adjacentSumOfSquares) ||
            (
                !isUndefined(sumOfSquares) ?
                    adjacentSumOfSquares > sumOfSquares :
                    false
            )
    })

    if (isLocalMin) {
        return sumOfSquares
    }

    return undefined
}

export {
    getSumOfSquaresAtSamplePointIfLocalMin,
}
