import { computeSumOfSquaresForSubmetrics } from "../sumOfSquares/sumOfSquaresForSubmetrics"
import { setSumOfSquaresAtSamplePoint } from "./setSumOfSquaresAtSamplePoint"
import { SumsOfSquares } from "../sumOfSquares/types"
import { Metric } from "./types"
import { Sample } from "./samples/types"

const gatherSumsOfSquares = (sumsOfSquares: SumsOfSquares, sample: Sample[], previousBestMetric: Metric, indentation: string, debug: boolean) => {
    let bestMetric = previousBestMetric

    sample.forEach(sample => {
        const { submetrics, samplePoint } = sample

        const sumOfSquares = computeSumOfSquaresForSubmetrics(submetrics)

        setSumOfSquaresAtSamplePoint(sumOfSquares, sumsOfSquares, samplePoint)

        if (sumOfSquares < bestMetric.sumOfSquares) {
            bestMetric = { sumOfSquares, submetrics }
            if (sumOfSquares === 0) {
                computeSumOfSquaresForSubmetrics(submetrics, { debug })
                throw new Error("This sum-of-squares was 0. That's extremely unlikely and probably means there's a bug in the code and that to continue searching now would be a waste of time.")
            }

            if (debug) console.log(`${indentation}new best metric: ${JSON.stringify(bestMetric)}`[ "green" ])
        }
    })

    return bestMetric
}

export {
    gatherSumsOfSquares,
}
