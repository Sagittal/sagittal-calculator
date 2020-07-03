const {computePrimeContentUnpopularity} = require("./primeContentUnpopularity")
const {computeMonzoFromInteger} = require("../../../utilities/comma/monzoFromInteger")
const {computeMonzoFromRatio} = require("../../../utilities/comma/monzoFromRatio")

const computePrimeContentUnpopularityAccountingForRatioImbalance = (fiveRoughRatio, adjustments = {}, submetricType = {}) => {
    const {k = 1, numeratorIsNuminator = 0 } = adjustments

    if (k === 1) {
        const fiveRoughNumberMonzo = computeMonzoFromRatio(fiveRoughRatio)

        return computePrimeContentUnpopularity(fiveRoughNumberMonzo, adjustments, submetricType)
    }

    const [numerator, denominator] = fiveRoughRatio
    const fiveRoughNumeratorMonzo = computeMonzoFromInteger(numerator)
    const fiveRoughDenominatorMonzo = computeMonzoFromInteger(denominator)

    const numeratorPrimeContentUnpopularity = computePrimeContentUnpopularity(fiveRoughNumeratorMonzo, adjustments, submetricType)
    const denominatorPrimeContentUnpopularity = computePrimeContentUnpopularity(fiveRoughDenominatorMonzo, adjustments, submetricType)
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
    computePrimeContentUnpopularityAccountingForRatioImbalance,
}
