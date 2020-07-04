const {COMMA_POPULARITIES} = require("./popularities")
const {computeUnpopularities} = require("./unpopularities")
const {addRankToUnpopularities} = require("./rank")
const {computeSumOfSquares} = require("./sumOfSquares")
const {checkSubmetricCombinationForIssues} = require("./check")
const {CUT_OFF_POPULARITY, ZIPF_EXPONENT} = require("./constants")

const computeSumOfSquaresForSubmetricCombination = (submetricCombination, {logUnpopularities} = {}) => {
    checkSubmetricCombinationForIssues(submetricCombination)

    const realPopularities = COMMA_POPULARITIES.slice(0, CUT_OFF_POPULARITY)

    const unpopularities = computeUnpopularities(realPopularities, submetricCombination)
    const rankedUnpopularities = addRankToUnpopularities(unpopularities)

    if (logUnpopularities) console.log(rankedUnpopularities)

    return computeSumOfSquares(rankedUnpopularities, realPopularities, ZIPF_EXPONENT)
}

module.exports = {
    computeSumOfSquaresForSubmetricCombination,
}
