import { SumOfSquares, SumsOfSquares } from "../sumOfSquares/types"
import { SamplePoint } from "./samples/types"

const setSumOfSquaresAtPoint = (sumOfSquares: SumOfSquares, sumsOfSquares: SumsOfSquares, point: SamplePoint) => {
    let cursor = sumsOfSquares
    point.slice(0, point.length - 1).forEach(coordinate => {
        cursor[ coordinate ] = cursor[ coordinate ] || []
        cursor = cursor[ coordinate ] as SumsOfSquares
    })

    cursor[ point[ point.length - 1 ] ] = sumOfSquares
}

export {
    setSumOfSquaresAtPoint,
}
