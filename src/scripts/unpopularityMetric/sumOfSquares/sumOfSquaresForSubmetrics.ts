import {COMMA_POPULARITIES} from "./popularities"
import {computeUnpopularities} from "./unpopularities"
import {addRankToUnpopularities} from "./rank"
import {computeSumOfSquares} from "./sumOfSquares"
import {checkSubmetricsForIssues} from "./check"
import {CUT_OFF_POPULARITY, ZIPF_EXPONENT} from "./constants"

const computeSumOfSquaresForSubmetrics = (submetrics, {logUnpopularities = false} = {}) => {
    checkSubmetricsForIssues(submetrics)

    const realPopularities = COMMA_POPULARITIES.slice(0, CUT_OFF_POPULARITY)

    const unpopularities = computeUnpopularities(realPopularities, submetrics)
    const rankedUnpopularities = addRankToUnpopularities(unpopularities)

    if (logUnpopularities) rankedUnpopularities.map(rankedUnpopularity => console.log(JSON.stringify(rankedUnpopularity)))

    return computeSumOfSquares(rankedUnpopularities, realPopularities, ZIPF_EXPONENT)
}

export {
    computeSumOfSquaresForSubmetrics,
}
