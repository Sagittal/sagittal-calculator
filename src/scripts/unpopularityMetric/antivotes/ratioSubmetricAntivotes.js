const {computeSubmetricAntivotes} = require("./submetricAntivotes")
const {computeMonzoFromInteger} = require("../../../utilities/comma/monzoFromInteger")
const {computeMonzoFromRatio} = require("../../../utilities/comma/monzoFromRatio")
const {computeLog} = require("../../../utilities/log")
const {USE_AS, NUMERIC_BOOLEAN} = require("../constants")

const computeRatioSubmetricAntivotes = (fiveRoughRatio, submetric = {}) => {
    const {
        k = 1,
        j = 1,
        jIsBaseOrExponent = USE_AS.COEFFICIENT,
        kIsBaseOrExponent = USE_AS.COEFFICIENT,
        numeratorIsNuminator = NUMERIC_BOOLEAN.FALSE,
    } = submetric

    if (k === j) {
        const fiveRoughNumberMonzo = computeMonzoFromRatio(fiveRoughRatio)

        return computeSubmetricAntivotes(fiveRoughNumberMonzo, submetric)
    }

    const [numerator, denominator] = fiveRoughRatio
    const fiveRoughNumeratorMonzo = computeMonzoFromInteger(numerator)
    const fiveRoughDenominatorMonzo = computeMonzoFromInteger(denominator)

    const numeratorPrimeContentAntivotes = computeSubmetricAntivotes(fiveRoughNumeratorMonzo, submetric)
    const denominatorPrimeContentAntivotes = computeSubmetricAntivotes(fiveRoughDenominatorMonzo, submetric)
    const numinator = numeratorIsNuminator === NUMERIC_BOOLEAN.TRUE ?
        numeratorPrimeContentAntivotes :
        numeratorPrimeContentAntivotes > denominatorPrimeContentAntivotes ?
            numeratorPrimeContentAntivotes :
            denominatorPrimeContentAntivotes
    const diminuator = numeratorIsNuminator === NUMERIC_BOOLEAN.TRUE ?
        denominatorPrimeContentAntivotes :
        numeratorPrimeContentAntivotes > denominatorPrimeContentAntivotes ?
            denominatorPrimeContentAntivotes :
            numeratorPrimeContentAntivotes

    const weightedNuminator = jIsBaseOrExponent === USE_AS.BASE ?
        computeLog(numinator, j) :
        jIsBaseOrExponent === USE_AS.EXPONENT ?
            numinator ** j :
            numinator * j

    const weightedDiminuator = kIsBaseOrExponent === USE_AS.BASE ?
        computeLog(diminuator, k) :
        kIsBaseOrExponent === USE_AS.EXPONENT ?
            diminuator ** k :
            diminuator * k

    return weightedNuminator + weightedDiminuator
}

module.exports = {
    computeRatioSubmetricAntivotes,
}
