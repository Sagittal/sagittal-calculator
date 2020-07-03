const ratioSubmetricUnpopularity = require("./ratioSubmetricUnpopularity")
const {SUBMETRIC_NAME} = require("../parameters/constants")

const computeWeightedSubmetricUnpopularity = (fiveRoughRatio, adjustments = {}, submetricType = {}) => {
    const { weight = submetricType.name === SUBMETRIC_NAME.SOAPFAR ? 1 : 0 } = adjustments

    let primeContentUnpopularitySubmetric = 0
    if (weight !== 0) {
        primeContentUnpopularitySubmetric = ratioSubmetricUnpopularity
            .computeRatioSubmetricUnpopularity(
                fiveRoughRatio,
                adjustments,
                submetricType,
            )
        // console.log('weight', weight, 'primeContentUnpopularitySubmetric', primeContentUnpopularitySubmetric)
    }

    return weight * primeContentUnpopularitySubmetric
}

module.exports = {
    computeWeightedSubmetricUnpopularity,
}
