const {computeSubmetricAntivotes} = require("./submetricAntivotes")
const {computeMonzoFromInteger} = require("../../../utilities/comma/monzoFromInteger")
const {computeMonzoFromRatio} = require("../../../utilities/comma/monzoFromRatio")

const computeRatioSubmetricAntivotes = (fiveRoughRatio, submetric = {}) => {
    const {k = 1, j = 1, numeratorIsNuminator = 0} = submetric

    if (k === j) {
        const fiveRoughNumberMonzo = computeMonzoFromRatio(fiveRoughRatio)

        return computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)
    }

    const [numerator, denominator] = fiveRoughRatio
    const fiveRoughNumeratorMonzo = computeMonzoFromInteger(numerator)
    const fiveRoughDenominatorMonzo = computeMonzoFromInteger(denominator)

    const numeratorPrimeContentAntivotes = computeSubmetricAntivotes(fiveRoughNumeratorMonzo, submetric)
    const denominatorPrimeContentAntivotes = computeSubmetricAntivotes(fiveRoughDenominatorMonzo, submetric)
    const numinator = numeratorIsNuminator ?
        numeratorPrimeContentAntivotes :
        numeratorPrimeContentAntivotes > denominatorPrimeContentAntivotes ?
            numeratorPrimeContentAntivotes :
            denominatorPrimeContentAntivotes
    const diminuator = numeratorIsNuminator ?
        denominatorPrimeContentAntivotes :
        numeratorPrimeContentAntivotes > denominatorPrimeContentAntivotes ?
            denominatorPrimeContentAntivotes :
            numeratorPrimeContentAntivotes

    // console.log('j', j, 'numinator', numinator, 'k', k, 'diminuator', diminuator, fiveRoughDenominatorMonzo)
    return j * numinator + k * diminuator
}

module.exports = {
    computeRatioSubmetricAntivotes,
}
