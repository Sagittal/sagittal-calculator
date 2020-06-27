// This script is for developing the improvement to SoPF>3 metric. Once developed, it will become part of the analyzeComma script.

const {computeSumOfSquaresGivenCandidateMetricParameters} = require("./notationalCommaPopularityMetric/sumOfSquaresGivenCandidateMetricParameters")

const CUT_OFF_POINT = 80
const R = -1.37
// best.k = 0.6
// best.a = 0.56
// best.s = 0.2
// best.u = 0.1
// best.sumOfSquares = 0.001101743627332945

let best = {sumOfSquares: Infinity}

for (let k = 0.59; k < 0.7; k += 0.01) {
    for (let a = 1.1; a < 1.2; a += 0.01) {
        for (let s = 0.24; s < 0.27; s += 0.01) {
            for (let u = 0.1; u < 0.2; u += 0.01) {
                const parameters = {k, a, s, u, r: R, cutOffPoint: CUT_OFF_POINT}
                const sumOfSquares = computeSumOfSquaresGivenCandidateMetricParameters(parameters)

                if (sumOfSquares < best.sumOfSquares) {
                    best = {sumOfSquares, k, a, s, u}
                }
            }
        }
    }
}

console.log(best)



