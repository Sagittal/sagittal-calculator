import { SumOfSquares, SumsOfSquares } from "../sumOfSquares/types"
import { SamplePoint } from "./samples/types"

const getSumOfSquaresAtPoint = (sumsOfSquares: SumsOfSquares, point: SamplePoint): SumOfSquares | undefined => {
    let cursor = sumsOfSquares
    point.slice(0, point.length - 1).forEach(coordinate => {
        if (cursor) cursor = cursor[ coordinate ] as SumsOfSquares
    })

    if (cursor) {
        return cursor[point[point.length - 1]] as SumOfSquares
    }

    return undefined
}

export {
    getSumOfSquaresAtPoint,
}
