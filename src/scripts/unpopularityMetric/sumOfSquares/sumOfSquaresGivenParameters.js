const {COMMA_POPULARITIES} = require("../popularities")
const {computeUnpopularities} = require("./unpopularities")
const {addRankToUnpopularities} = require("./rank")
const {computeSumOfSquares} = require("./sumOfSquares")
const {CUT_OFF_POINT, ZIPF_EXPONENT} = require("./constants")

const computeSumOfSquaresGivenParameters = (parameters, {logUnpopularities} = {}) => {
    const realPopularities = COMMA_POPULARITIES.slice(0, CUT_OFF_POINT)

    const unpopularities = computeUnpopularities(realPopularities, parameters)
    const rankedUnpopularities = addRankToUnpopularities(unpopularities)

    if (logUnpopularities) console.log(rankedUnpopularities)

    return computeSumOfSquares(rankedUnpopularities, realPopularities, ZIPF_EXPONENT)
}

module.exports = {
    computeSumOfSquaresGivenParameters,
}
