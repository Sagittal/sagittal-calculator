const {computeParametersFromCombinedAdjustments} = require("../parameters/parametersFromCombinedAdjustments")
const {computeSumOfSquaresGivenParameters} = require("./sumOfSquaresGivenParameters")

const computeSumOfSquaresGivenCombinedAdjustments = (combinedAdjustments, options) => {
    const parameters = computeParametersFromCombinedAdjustments(combinedAdjustments)

    return computeSumOfSquaresGivenParameters(parameters, options)
}

module.exports = {
    computeSumOfSquaresGivenCombinedAdjustments,
}
