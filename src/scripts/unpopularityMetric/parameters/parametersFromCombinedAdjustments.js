const {SUBMETRIC_TYPE} = require("./constants")

// todo: really need to sort out parameters/adjustments/tocheck/submetric/(s) names around these parts.
//  maybe elsewhere parameters needs to be submetricsParameters (vs submetricParameters)
//  I may want to make an effort to shorten some of these names
//  - in parametersFromCombinedAdjustments, the plural here really confuses me... this is single combined up bundle of adjustments... "to check" doesn't help...
//  - in computeCombinedSubmetricAdjustmentsSpec, okay so an adjustment is like a or a = 0.5; an adjustments is { a, k }, an adjustmentsToCheck is [{a,k}, {a,k}]

const computeParametersFromCombinedAdjustments = combinedAdjustments => {
    return Object.entries(combinedAdjustments).reduce(
        (parameters, [submetricName, submetricAdjustments]) => {
            return {
                ...parameters,
                [submetricName]: {
                    adjustments: submetricAdjustments,
                    submetricType: SUBMETRIC_TYPE[submetricName],
                }
            }
        },
        {},
    )
}

module.exports = {
    computeParametersFromCombinedAdjustments,
}
