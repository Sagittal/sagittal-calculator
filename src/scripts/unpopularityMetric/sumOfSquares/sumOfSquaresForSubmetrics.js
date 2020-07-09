const {COMMA_POPULARITIES} = require("./popularities")
const {computeUnpopularities} = require("./unpopularities")
const {addRankToUnpopularities} = require("./rank")
const {computeSumOfSquares} = require("./sumOfSquares")
const {checkSubmetricsForIssues} = require("./check")
const {CUT_OFF_POPULARITY, ZIPF_EXPONENT} = require("./constants")

const computeSumOfSquaresForSubmetrics = (submetrics, {logUnpopularities = false} = {}) => {
    checkSubmetricsForIssues(submetrics)

    const realPopularities = COMMA_POPULARITIES.slice(0, CUT_OFF_POPULARITY)

    const unpopularities = computeUnpopularities(realPopularities, submetrics)
    const rankedUnpopularities = addRankToUnpopularities(unpopularities)

    if (logUnpopularities) rankedUnpopularities.map(rankedUnpopularity => console.log(JSON.stringify(rankedUnpopularity)))

    return computeSumOfSquares(rankedUnpopularities, realPopularities, ZIPF_EXPONENT)
}

module.exports = {
    computeSumOfSquaresForSubmetrics,
}
