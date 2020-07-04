const {computeSumOfSquaresGivenCombinedAdjustments} = require("../sumOfSquares/sumOfSquaresGivenCombinedAdjustments")
const {SUBMETRIC_NAME, ADJUSTMENT} = require("../parameters/constants")

const combinedAdjustments = {
    [SUBMETRIC_NAME.SOAPFAR]: {
        [ADJUSTMENT.K]: 0,
        [ADJUSTMENT.A]: 1.994,
        [ADJUSTMENT.A_IS_BASE_NOT_POWER]: 1,
        [ADJUSTMENT.Y]: 0.455,
        [ADJUSTMENT.W]: -2.08,
    },
    [SUBMETRIC_NAME.COAPFAR]: {
        [ADJUSTMENT.WEIGHT]: 0.577,
    },
}

const sumOfSquares = computeSumOfSquaresGivenCombinedAdjustments(
    combinedAdjustments,
    {logUnpopularities: true},
)

console.log(JSON.stringify({sumOfSquares, ...combinedAdjustments}))
