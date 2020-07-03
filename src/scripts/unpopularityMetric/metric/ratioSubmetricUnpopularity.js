const {computeSubmetricUnpopularity} = require("./submetricUnpopularity")
const {computeMonzoFromInteger} = require("../../../utilities/comma/monzoFromInteger")
const {computeMonzoFromRatio} = require("../../../utilities/comma/monzoFromRatio")

const computeRatioSubmetricUnpopularity = (fiveRoughRatio, adjustments = {}, submetricType = {}) => {
    const {k = 1, numeratorIsNuminator = 0 } = adjustments

    if (k === 1) {
        const fiveRoughNumberMonzo = computeMonzoFromRatio(fiveRoughRatio)

        return computeSubmetricUnpopularity(fiveRoughNumberMonzo, adjustments, submetricType)
    }

    const [numerator, denominator] = fiveRoughRatio
    const fiveRoughNumeratorMonzo = computeMonzoFromInteger(numerator)
    const fiveRoughDenominatorMonzo = computeMonzoFromInteger(denominator)

    const numeratorPrimeContentUnpopularity = computeSubmetricUnpopularity(fiveRoughNumeratorMonzo, adjustments, submetricType)
    const denominatorPrimeContentUnpopularity = computeSubmetricUnpopularity(fiveRoughDenominatorMonzo, adjustments, submetricType)
    const numinator = numeratorIsNuminator ?
        numeratorPrimeContentUnpopularity :
        numeratorPrimeContentUnpopularity > denominatorPrimeContentUnpopularity ?
            numeratorPrimeContentUnpopularity :
            denominatorPrimeContentUnpopularity
    const diminuator = numeratorIsNuminator ?
        denominatorPrimeContentUnpopularity :
        numeratorPrimeContentUnpopularity > denominatorPrimeContentUnpopularity ?
            denominatorPrimeContentUnpopularity :
            numeratorPrimeContentUnpopularity

    // console.log('numinator', numinator, 'k', k, 'diminuator', diminuator, fiveRoughDenominatorMonzo)
    return numinator + k * diminuator
}

module.exports = {
    computeRatioSubmetricUnpopularity,
}
