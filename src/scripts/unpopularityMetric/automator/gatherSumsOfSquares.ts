import { computeSumOfSquaresForSubmetrics } from "../sumOfSquares/sumOfSquaresForSubmetrics"
import { setSumOfSquaresAtPoint } from "./setSumOfSquaresAtPoint"
import { SumsOfSquares } from "../sumOfSquares/types"
import { SubmetricCombination } from "../submetricCombinations/types"
import { Metric } from "./types"

const gatherSumsOfSquares = (sumsOfSquares: SumsOfSquares, submetricCombinations: SubmetricCombination[], previousBestMetric: Metric, indentation: string, quiet: boolean) => {
    let bestMetric = previousBestMetric

    submetricCombinations.forEach(({ submetrics, point }) => {
        const sumOfSquares = computeSumOfSquaresForSubmetrics(submetrics)

        setSumOfSquaresAtPoint(sumOfSquares, sumsOfSquares, point)

        if (sumOfSquares < bestMetric.sumOfSquares) {
            bestMetric = { sumOfSquares, submetrics }
            if (sumOfSquares === 0) {
                computeSumOfSquaresForSubmetrics(submetrics, { logUnpopularities: true })
                throw new Error("This sum-of-squares was 0. That's extremely unlikely and probably means there's a bug in the code and that to continue searching now would be a waste of time.")
            }

            if (!quiet) console.log(`${indentation}new best metric: ${JSON.stringify(bestMetric)}`[ "green" ])
        }
    })

    return bestMetric
}

export {
    gatherSumsOfSquares,
}
