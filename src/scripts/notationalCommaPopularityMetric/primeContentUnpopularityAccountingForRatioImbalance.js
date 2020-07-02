const {computePrimeContentUnpopularity} = require("./primeContentUnpopularity")
const {primeFactorizeInteger} = require("../../utilities/comma/monzoFromRatio")
const {computeMonzoFromRatio} = require("../../utilities/comma/monzoFromRatio")

const computePrimeContentUnpopularityAccountingForRatioImbalance = (fiveRoughRatio, adjustments = {}, submetricType = {}) => {
    const { k = 1 } = adjustments

    if (k === 1) {
        const fiveRoughMonzo = computeMonzoFromRatio(fiveRoughRatio)

        return computePrimeContentUnpopularity(fiveRoughMonzo, adjustments, submetricType)
    }

    const [numerator, denominator] = fiveRoughRatio
    const fiveRoughNumeratorMonzo = primeFactorizeInteger(numerator)
    const fiveRoughDenominatorMonzo = primeFactorizeInteger(denominator)

    const numeratorPrimeContentUnpopularity = computePrimeContentUnpopularity(fiveRoughNumeratorMonzo, adjustments, submetricType)
    const denominatorPrimeContentUnpopularity = computePrimeContentUnpopularity(fiveRoughDenominatorMonzo, adjustments, submetricType)
    const numinator = numeratorPrimeContentUnpopularity > denominatorPrimeContentUnpopularity ?
        numeratorPrimeContentUnpopularity :
        denominatorPrimeContentUnpopularity
    const diminuator = numeratorPrimeContentUnpopularity > denominatorPrimeContentUnpopularity ?
        denominatorPrimeContentUnpopularity :
        numeratorPrimeContentUnpopularity

    // console.log('numinator', numinator, 'k', k, 'diminuator', diminuator)
    return numinator + k * diminuator
}

module.exports = {
    computePrimeContentUnpopularityAccountingForRatioImbalance,
}
