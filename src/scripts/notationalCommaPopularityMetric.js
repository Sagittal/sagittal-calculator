// This script is for developing the improvement to SoPF>3 metric. Once developed, it will become part of the analyzeComma script.

const {round} = require("../utilities/round")
const {ACCURACY_THRESHOLD} = require("../utilities/constants")
const {COMMA_POPULARITIES} = require("./notationalCommaPopularityMetric/popularities")
const {computeOurPopularities} = require("./notationalCommaPopularityMetric/ourPopularities")
const {addRankToOurPopularities} = require("./notationalCommaPopularityMetric/rank")
const {computeSumOfSquares} = require("./notationalCommaPopularityMetric/sumOfSquares")

const k = 1.13
const a = 0.68
const realPopularities = COMMA_POPULARITIES

let ourApproximatePopularities = computeOurPopularities(realPopularities, k, a)
ourApproximatePopularities = addRankToOurPopularities(ourApproximatePopularities)

const sumOfSquares = computeSumOfSquares(ourApproximatePopularities, realPopularities)

console.log(`${round(sumOfSquares, ACCURACY_THRESHOLD)} k=${k} a=${a}`)
