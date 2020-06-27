// This script is for developing the improvement to SoPF>3 metric. Once developed, it will become part of the analyzeComma script.

const {computeSumOfSquaresGivenCandidateMetricParameters} = require("./notationalCommaPopularityMetric/sumOfSquaresGivenCandidateMetricParameters")

const CUT_OFF_POINT = 80
const R = -1.37
// const k = 0.6
// const a = 0.56
// const s = 0.2
// const u = 0.1

let best = {sumOfSquares: Infinity}

for (let k = 0.55; k < 0.65; k += 0.01) {
    for (let a = 0.5; a < 0.6; a += 0.01) {
        for (let s = 0.1; s < 0.3; s += 0.01) {
            for (let u = 0.05; u < 0.15; u += 0.01) {
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



