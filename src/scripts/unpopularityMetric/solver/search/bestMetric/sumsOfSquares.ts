import { debug } from "../../../debug"
import { computeSumOfSquaresForSubmetrics } from "../../../sumOfSquares"
import { Sample } from "../types"
import { setSumOfSquaresAtSamplePoint } from "./setSumOfSquaresAtSamplePoint"
import { Metric, SumsOfSquares } from "./types"

const computePossiblyUpdatedBestMetricWhilePopulatingSumsOfSquares = (sumsOfSquares: SumsOfSquares, samples: Sample[], previousBestMetric: Metric, indentation: string) => {
    let bestMetric = previousBestMetric

    samples.forEach(sample => {
        const { submetrics, samplePoint } = sample

        const sumOfSquares = computeSumOfSquaresForSubmetrics(submetrics)

        setSumOfSquaresAtSamplePoint(sumOfSquares, sumsOfSquares, samplePoint)

        if (sumOfSquares < bestMetric.sumOfSquares) {
            bestMetric = { sumOfSquares, submetrics }
            if (sumOfSquares === 0) {
                computeSumOfSquaresForSubmetrics(submetrics)
                throw new Error("This sum-of-squares was 0. That's extremely unlikely and probably means there's a bug in the code and that to continue searching now would be a waste of time.")
            }

            if (debug.all) {
                console.log(`${indentation}new best metric: ${JSON.stringify(bestMetric)}`.green)
            }
        }
    })

    return bestMetric
}

export {
    computePossiblyUpdatedBestMetricWhilePopulatingSumsOfSquares,
}
