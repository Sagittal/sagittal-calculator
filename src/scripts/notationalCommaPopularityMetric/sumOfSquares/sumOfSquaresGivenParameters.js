const {COMMA_POPULARITIES} = require("./popularities")
const {computeOurPopularities} = require("./ourPopularities")
const {addRankToOurPopularities} = require("./rank")
const {computeSumOfSquares} = require("./sumOfSquares")
const {CUT_OFF_POINT, ZIPF_EXPONENT} = require("./constants")

const computeSumOfSquaresGivenParameters = (parameters, bob) => {
    const realPopularities = COMMA_POPULARITIES.slice(0, CUT_OFF_POINT)

    let ourApproximatePopularities = computeOurPopularities(realPopularities, parameters)
    ourApproximatePopularities = addRankToOurPopularities(ourApproximatePopularities)

    if (bob) console.log(ourApproximatePopularities)

    return computeSumOfSquares(ourApproximatePopularities, realPopularities, ZIPF_EXPONENT)
}

module.exports = {
    computeSumOfSquaresGivenParameters,
}
