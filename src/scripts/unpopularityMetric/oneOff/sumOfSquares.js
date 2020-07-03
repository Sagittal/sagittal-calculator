const {computeSumOfSquaresGivenCombinedAdjustments} = require("../sumOfSquares/sumOfSquaresGivenCombinedAdjustments")
const {SUBMETRIC_NAME, ADJUSTMENT} = require("../parameters/constants")

const combinedAdjustments = {
    [SUBMETRIC_NAME.SOAPFAR]: {
        [ADJUSTMENT.WEIGHT]: 1,
        [ADJUSTMENT.W]: -1,
    },
}

const sumOfSquares = computeSumOfSquaresGivenCombinedAdjustments(
    combinedAdjustments,
    {logUnpopularities: true},
)

console.log(JSON.stringify({sumOfSquares, ...combinedAdjustments}))
