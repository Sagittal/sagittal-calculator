import { getSumOfSquaresAtCoordinateIfLocalMinimum } from "./localMinimum"
import { computeDeepDistinct } from "../../../utilities/deepDistinct"
import { LocalMinimum } from "./types"
import { SubmetricCombination } from "../submetricCombinations/types"
import { SumsOfSquares } from "../sumOfSquares/types"

const computeLocalMinima = (submetricCombinations: SubmetricCombination[], sumsOfSquares: SumsOfSquares) => {
    const localMinima: LocalMinimum[] = []
    submetricCombinations.forEach(({ submetrics, coordinate }) => {
        const sumOfSquares = getSumOfSquaresAtCoordinateIfLocalMinimum(sumsOfSquares, coordinate)
        if (sumOfSquares) {
            localMinima.push({ sumOfSquares, coordinate, submetrics })
        }
    })

    localMinima.sort((localMinimum, nextLocalMinimum) => {
        return localMinimum.sumOfSquares - nextLocalMinimum.sumOfSquares
    })

    return computeDeepDistinct(localMinima)
}

export {
    computeLocalMinima,
}
