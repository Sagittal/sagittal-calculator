import { SumOfSquares, SumsOfSquares } from "../sumOfSquares/types"
import { Coordinate } from "./types"

const setSumOfSquaresAtCoordinate = (sumOfSquares: SumOfSquares, sumsOfSquares: SumsOfSquares, coordinate: Coordinate) => {
    let cursor = sumsOfSquares
    coordinate.slice(0, coordinate.length - 1).forEach(coordinateElement => {
        cursor[ coordinateElement ] = cursor[ coordinateElement ] || []
        cursor = cursor[ coordinateElement ] as SumsOfSquares
    })

    cursor[ coordinate[ coordinate.length - 1 ] ] = sumOfSquares
}

export {
    setSumOfSquaresAtCoordinate,
}
