const {computePrimeContentUnpopularity} = require("./primeContentUnpopularity")
const {primeFactorizeInteger} = require("../../utilities/comma/monzoFromRatio")
const {computeMonzoFromRatio} = require("../../utilities/comma/monzoFromRatio")

const computePrimeContentUnpopularityAccountingForRatioImbalance = (fiveRoughRatio, adjustments = {}, submetricType = {}) => {
    const {k = 1, numeratorIsNuminator = 0 } = adjustments

    if (k === 1) {
        const fiveRoughNumberMonzo = computeMonzoFromRatio(fiveRoughRatio)

        return computePrimeContentUnpopularity(fiveRoughNumberMonzo, adjustments, submetricType)
    }

    const [numerator, denominator] = fiveRoughRatio
    const fiveRoughNumeratorMonzo = primeFactorizeInteger(numerator)
    const fiveRoughDenominatorMonzo = primeFactorizeInteger(denominator)

    const numeratorPrimeContentUnpopularity = computePrimeContentUnpopularity(fiveRoughNumeratorMonzo, adjustments, submetricType)
    const denominatorPrimeContentUnpopularity = computePrimeContentUnpopularity(fiveRoughDenominatorMonzo, adjustments, submetricType)
    const numinator = numeratorIsNuminator ?
        numeratorPrimeContentUnpopularity :
        numeratorPrimeContentUnpopularity > denominatorPrimeContentUnpopularity ? // todo: a new option that says whether numinator and diminuator are based on input ratio num and dem or oriented after the fact
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
