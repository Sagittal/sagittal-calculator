// This script is for developing the improvement to SoPF>3 metric. Once developed, it will become part of the analyzeComma script.

const {COMMA_POPULARITIES} = require("./notationalCommaPopularityMetric/popularities")
const {computeOurPopularities} = require("./notationalCommaPopularityMetric/ourPopularities")
const {addRankToOurPopularities} = require("./notationalCommaPopularityMetric/rank")
const {computeSumOfSquares} = require("./notationalCommaPopularityMetric/sumOfSquares")

const realPopularities = COMMA_POPULARITIES.slice(0, 80)

const computeSumOfSquaresForGivenWeightsForOurCandidateMetric = (k, a, l, u) => {
    let ourApproximatePopularities = computeOurPopularities(realPopularities, k, a, l, u)
    ourApproximatePopularities = addRankToOurPopularities(ourApproximatePopularities)

    return computeSumOfSquares(ourApproximatePopularities, realPopularities)
}

const k = 0
const a = 0
const l = 0 // todo: make it s
const u = 0

let best = {sumOfSquares: Infinity}
// for (let k = 0.5; k < 0.65; k += 0.01) {
//     for (let a = 0.49; a < 0.51; a += 0.01) {
//         for (let l = 0.1; l < 0.3; l += 0.01) {
//             for (let u = 0; u < 0.15; u += 0.01) {
                const sumOfSquares = computeSumOfSquaresForGivenWeightsForOurCandidateMetric(k, a, l, u)

                if (sumOfSquares < best.sumOfSquares) {
                    best = {sumOfSquares, k, a, l, u}
                }
//             }
//         }
//     }
// }
console.log(best)

// k 0.6
// a 0.56
// l 0.2
// u 0.1

