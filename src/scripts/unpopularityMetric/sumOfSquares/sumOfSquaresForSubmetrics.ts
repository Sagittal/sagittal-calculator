import { Combination, Sum } from "../../../general"
import { debug } from "../debug"
import { Submetric } from "../types"
import { checkSubmetricsForInvalidParameterValueCombinations } from "./checkParameterValues"
import { CUT_OFF_POPULARITY, ZIPF_EXPONENT } from "./constants"
import { COMMA_POPULARITIES } from "./popularities"
import { addRankToUnpopularities } from "./rank"
import { computeSumOfSquares } from "./sumOfSquares"
import { Popularity } from "./types"
import { computeUnpopularities } from "./unpopularities"

const computeSumOfSquaresForSubmetrics = (submetrics: Combination<Submetric>): Sum<"SquaredWeightedRankDifferences"> => {
    checkSubmetricsForInvalidParameterValueCombinations(submetrics)

    const realPopularities: Popularity[] = COMMA_POPULARITIES.slice(0, CUT_OFF_POPULARITY)

    const unpopularities = computeUnpopularities(realPopularities, submetrics)
    const rankedUnpopularities = addRankToUnpopularities(unpopularities)

    if (debug.all || debug.rankedUnpopularities) {
        rankedUnpopularities.map(rankedUnpopularity => console.log(JSON.stringify(rankedUnpopularity)))
    }

    const sumOfSquares = computeSumOfSquares(rankedUnpopularities, realPopularities, ZIPF_EXPONENT)

    if (debug.all || debug.sumOfSquares) console.log(`sum-of-squares ${sumOfSquares}`)

    return sumOfSquares
}

export {
    computeSumOfSquaresForSubmetrics,
}
