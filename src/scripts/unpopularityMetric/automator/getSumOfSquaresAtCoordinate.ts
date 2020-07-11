import { SumOfSquares, SumsOfSquares } from "../sumOfSquares/types"
import { Coordinate } from "./types"

const getSumOfSquaresAtCoordinate = (sumsOfSquares: SumsOfSquares, coordinate: Coordinate): SumOfSquares | undefined => {
    let cursor = sumsOfSquares
    coordinate.slice(0, coordinate.length - 1).forEach(coordinateElement => {
        if (cursor) cursor = cursor[ coordinateElement ] as SumsOfSquares
    })

    if (cursor) {
        return cursor[coordinate[coordinate.length - 1]] as SumOfSquares
    }

    return undefined
}

export {
    getSumOfSquaresAtCoordinate,
}
