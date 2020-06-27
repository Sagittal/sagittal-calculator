// This script is for developing the improvement to SoPF>3 metric. Once developed, it will become part of the analyzeComma script.

const {COMMA_POPULARITIES} = require("./notationalCommaPopularityMetric/popularities")
const {computeOurPopularities} = require("./notationalCommaPopularityMetric/ourPopularities")
const {addRankToOurPopularities} = require("./notationalCommaPopularityMetric/rank")
const {computeSumOfSquares} = require("./notationalCommaPopularityMetric/sumOfSquares")

const realPopularities = COMMA_POPULARITIES.slice(0, 80)

const computeSumOfSquaresForGivenWeightsForOurCandidateMetric = (k, a, s, u) => {
    let ourApproximatePopularities = computeOurPopularities(realPopularities, k, a, s, u)
    ourApproximatePopularities = addRankToOurPopularities(ourApproximatePopularities)

    return computeSumOfSquares(ourApproximatePopularities, realPopularities)
}

let best = {sumOfSquares: Infinity}
for (let k = 0.55; k < 0.65; k += 0.01) {
    for (let a = 0.5; a < 0.6; a += 0.01) {
        for (let s = 0.1; s < 0.3; s += 0.01) {
            for (let u = 0.05; u < 0.15; u += 0.01) {
                const sumOfSquares = computeSumOfSquaresForGivenWeightsForOurCandidateMetric(k, a, s, u)

                if (sumOfSquares < best.sumOfSquares) {
                    best = {sumOfSquares, k, a, s, u}
                }
            }
        }
    }
}

console.log(best)

// k 0.6
// a 0.56
// s 0.2
// u 0.1

