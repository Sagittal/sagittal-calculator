const {COMMA_POPULARITIES} = require("./popularities")
const {computeOurPopularities} = require("./ourPopularities")
const {addRankToOurPopularities} = require("./rank")
const {computeSumOfSquares} = require("./sumOfSquares")

const computeSumOfSquaresGivenCandidateMetricParameters = parameters => {
    const realPopularities = COMMA_POPULARITIES.slice(0, parameters.cutOffPoint)

    let ourApproximatePopularities = computeOurPopularities(realPopularities, parameters)
    ourApproximatePopularities = addRankToOurPopularities(ourApproximatePopularities)

    return computeSumOfSquares(ourApproximatePopularities, realPopularities, parameters.r)
}

module.exports = {
    computeSumOfSquaresGivenCandidateMetricParameters,
}
