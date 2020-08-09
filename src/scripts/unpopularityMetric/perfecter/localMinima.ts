import { computeDeepDistinct } from "../../../general"
import { Sample, SumsOfSquares } from "../bestMetric"
import { getSumOfSquaresAtSamplePointIfLocalMinimum } from "./localMinimum"
import { LocalMinimum } from "./types"

const computeLocalMinima = (samples: Sample[], sumsOfSquares: SumsOfSquares, localMinimum?: LocalMinimum): LocalMinimum[] => {
    const localMinima: LocalMinimum[] = []
    samples.forEach(sample => {
        const { submetrics, samplePoint } = sample
        const sumOfSquares = getSumOfSquaresAtSamplePointIfLocalMinimum(sumsOfSquares, samplePoint)
        if (sumOfSquares && (!localMinimum || localMinimum.sumOfSquares - sumOfSquares > 0.000001)) {
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
