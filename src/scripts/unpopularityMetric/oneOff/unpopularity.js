const {computeUnpopularity} = require("../metric/unpopularity")
const {computeParametersFromCombinedAdjustments} = require("../parameters/parametersFromCombinedAdjustments")
const {SUBMETRIC_NAME, ADJUSTMENT} = require("../parameters/constants")
const {presentRatio} = require("../../../utilities/comma/present/ratio")

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
const fiveRoughRatio = [11, 7]

const parameters = computeParametersFromCombinedAdjustments(combinedAdjustments)
const unpopularity = computeUnpopularity(fiveRoughRatio, parameters)

console.log(`${presentRatio(fiveRoughRatio)}\n${JSON.stringify(combinedAdjustments)}\n${unpopularity}`)
