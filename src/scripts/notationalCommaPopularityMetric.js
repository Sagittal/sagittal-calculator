// This script is for developing the improvement to SoPF>3 metric. Once developed, it will become part of the analyzeComma script.

const {round} = require("../utilities/round")
const {ACCURACY_THRESHOLD} = require("../utilities/constants")
const {COMMA_POPULARITIES} = require("./notationalCommaPopularityMetric/popularities")
const {computeOurPopularities} = require("./notationalCommaPopularityMetric/ourPopularities")
const {addRankToOurPopularities} = require("./notationalCommaPopularityMetric/rank")
const {computeSumOfSquares} = require("./notationalCommaPopularityMetric/sumOfSquares")

// const k = 0.68
// const a = 1.13
const realPopularities = COMMA_POPULARITIES

const doThing = (a, k) => {
    let ourApproximatePopularities = computeOurPopularities(realPopularities, k, a)
    ourApproximatePopularities = addRankToOurPopularities(ourApproximatePopularities)

    const sumOfSquares = computeSumOfSquares(ourApproximatePopularities, realPopularities)

    // console.log(`${round(sumOfSquares, ACCURACY_THRESHOLD)} k=${k} a=${a}`)
    return sumOfSquares
}

let best = { sumOfSquares: Infinity }
for (let k = 0.5; k < 0.7; k += 0.03) {
    for (let a = 0.8; a < 1.1; a += 0.007) {
        // console.log(a, k)
        const sumOfSquares = doThing(a, k)

        if (sumOfSquares < best.sumOfSquares) {
            best = { sumOfSquares, a, k }
        }
    }
}
console.log(best)
