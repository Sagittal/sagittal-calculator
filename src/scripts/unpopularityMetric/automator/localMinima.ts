import { getSumOfSquaresAtSamplePointIfLocalMinimum } from "./localMinimum"
import { computeDeepDistinct } from "../../../utilities/deepDistinct"
import { LocalMinimum } from "./types"
import { SumsOfSquares } from "../sumOfSquares/types"
import { Sample } from "./samples/types"

const computeLocalMinima = (samples: Sample[], sumsOfSquares: SumsOfSquares) => {
    const localMinima: LocalMinimum[] = []
    samples.forEach(sample => {
        const { submetrics, samplePoint } = sample
        const sumOfSquares = getSumOfSquaresAtSamplePointIfLocalMinimum(sumsOfSquares, samplePoint)
        if (sumOfSquares) {
            localMinima.push({ sumOfSquares, samplePoint, submetrics })
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
