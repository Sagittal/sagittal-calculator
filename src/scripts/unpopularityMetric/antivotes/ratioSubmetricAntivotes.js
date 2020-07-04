const {computeSubmetricAntivotes} = require("./submetricAntivotes")
const {computeMonzoFromInteger} = require("../../../utilities/comma/monzoFromInteger")
const {computeMonzoFromRatio} = require("../../../utilities/comma/monzoFromRatio")
const {computeLog} = require("../../../utilities/log")

const computeRatioSubmetricAntivotes = (fiveRoughRatio, submetric = {}) => {
    const {
        k = 1,
        j = 1,
        jIsBaseOrPowerNotCoefficient = 0,
        kIsBaseOrPowerNotCoefficient = 0,
        numeratorIsNuminator = 0
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

    const weightedNuminator = jIsBaseOrPowerNotCoefficient === -1 ?
        computeLog(numinator, j) :
        jIsBaseOrPowerNotCoefficient === 1 ?
            numinator ** j :
            numinator * j

    const weightedDiminuator = kIsBaseOrPowerNotCoefficient === -1 ?
        computeLog(diminuator, k) :
        kIsBaseOrPowerNotCoefficient === 1 ?
            diminuator ** k :
            diminuator * k

    return weightedNuminator + weightedDiminuator
}

module.exports = {
    computeRatioSubmetricAntivotes,
}
