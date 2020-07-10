import {getSumOfSquaresAtCoordinateIfLocalMinimum} from "./localMinimum"
import {computeDeepDistinct} from "../../../utilities/deepDistinct"
const computeLocalMinima = (submetricCombinations, sumsOfSquares) => {
    const localMinima = []
    submetricCombinations.forEach(({submetrics, coordinate}) => {
        const sumOfSquares = getSumOfSquaresAtCoordinateIfLocalMinimum(sumsOfSquares, coordinate)
        if (sumOfSquares) {
            localMinima.push({sumOfSquares, coordinate, submetrics})
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
