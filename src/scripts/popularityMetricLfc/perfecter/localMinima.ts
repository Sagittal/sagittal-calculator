import { computeDeepDistinct, KeyPath, sort } from "../../../general"
import { Sample, SumsOfSquares } from "../bestMetric"
import { getSumOfSquaresAtSamplePointIfLocalMin } from "./localMin"
import { LocalMin } from "./types"

const computeLocalMinima = (samples: Sample[], sumsOfSquares: SumsOfSquares, localMin?: LocalMin): LocalMin[] => {
    const localMinima: LocalMin[] = []
    samples.forEach((sample: Sample): void => {
        const { submetrics, samplePoint } = sample
        const sumOfSquares = getSumOfSquaresAtSamplePointIfLocalMin(sumsOfSquares, samplePoint)
        if (sumOfSquares && (!localMin || localMin.sumOfSquares - sumOfSquares > 0.000001)) {
            localMinima.push({ sumOfSquares, samplePoint, submetrics })
        }
    })

    sort(localMinima, { by: "sumOfSquares" as KeyPath })

    return computeDeepDistinct(localMinima)
}

export {
    computeLocalMinima,
}
