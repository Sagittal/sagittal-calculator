// This script is for developing the improvement to the "SoPF>3" metric. Once developed, it should become part of the analyzeComma script.

const {computeSumOfSquaresGivenParameters} = require("./unpopularityMetric/sumOfSquares/sumOfSquaresGivenParameters")
const {computeSumOfSquaresGivenCombinedAdjustments} = require("./unpopularityMetric/sumOfSquares/sumOfSquaresGivenCombinedAdjustments")
const {computeAdjustmentsToCheck} = require("./unpopularityMetric/parameters/adjustmentsToCheck")
const {computeCombinedSubmetricAdjustments} = require("./unpopularityMetric/parameters/combinedSubmetricAdjustments")
const {LOCKED_AT_ONE, SUBMETRIC_NAME, ADJUSTMENT} = require("./unpopularityMetric/parameters/constants")

const combinedAdjustmentsToCheck = computeCombinedSubmetricAdjustments({
    [SUBMETRIC_NAME.SOAPFAR]: computeAdjustmentsToCheck({
        // todo: new adjustments. k could be either a power, a base, or a coefficient too, and since that's three different things, it might need to cycle through -1, 0, and 1
        //  also have a "submetric power or base"
        //  also have a "use the submetric power or base as a base"
        //  shouldn’t you be able to weight the numinator too? with "j" I guess? in cases when you ONLY want the numinator that's the only way you could do it
        [ADJUSTMENT.WEIGHT]: LOCKED_AT_ONE,
        [ADJUSTMENT.K]: {center:0.213895488, count: 1},
        [ADJUSTMENT.A]: {center:2, count: 1},
        [ADJUSTMENT.A_IS_BASE_NOT_POWER]: LOCKED_AT_ONE,
        [ADJUSTMENT.W]: {center:-2.048657352, count: 1},
        [ADJUSTMENT.Y]: {center:0.642099097, count: 1},
    }),
})

let best = {sumOfSquares: Infinity}

const totalToCheck = combinedAdjustmentsToCheck.length
console.log("total combined adjustments to check:", totalToCheck)
combinedAdjustmentsToCheck.forEach((combinedAdjustments, index) => {
    const sumOfSquares = computeSumOfSquaresGivenCombinedAdjustments(combinedAdjustments)

    if (sumOfSquares < best.sumOfSquares) {
        best = {sumOfSquares, ...combinedAdjustments}
        if (sumOfSquares === 0) {
            computeSumOfSquaresGivenParameters(parameters, {logUnpopularities: true})
            throw new Error("This sum of squares was 0. That's extremely unlikely and probably means there's a bug in the code and that to continue searching now would be a waste of time.")
        }

        console.log(JSON.stringify(best))
    }

    if (index % 10000 === 0) console.log("combined adjustments checked so far:", index, 'out of', totalToCheck, '(', 100 * index / totalToCheck, '% )')
})
console.log('final best:', JSON.stringify(best))