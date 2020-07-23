import { computeDeepDistinct } from "../../../../../general"
import { Sample } from "../types"
import { getSumOfSquaresAtSamplePointIfLocalMinimum } from "./localMinimum"
import { LocalMinimum, SumsOfSquares } from "./types"

const computeLocalMinima = (samples: Sample[], sumsOfSquares: SumsOfSquares): LocalMinimum[] => {
    const localMinima: LocalMinimum[] = []
    samples.forEach(sample => {
        const { submetrics, samplePoint } = sample
        const sumOfSquares = getSumOfSquaresAtSamplePointIfLocalMinimum(sumsOfSquares, samplePoint)
        if (sumOfSquares) {
            localMinima.push({ sumOfSquares, samplePoint, submetrics })
        }
    })

    localMinima.sort((localMinimum, nextLocalMinimum) =>
        localMinimum.sumOfSquares - nextLocalMinimum.sumOfSquares)

    return computeDeepDistinct(localMinima)
}

export {
    computeLocalMinima,
}
