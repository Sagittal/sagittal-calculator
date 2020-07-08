const {computeSubmetricAntivotes} = require("./submetricAntivotes")
const {computeMonzoFromInteger} = require("../../../utilities/comma/monzoFromInteger")
const {computeMonzoFromRatio} = require("../../../utilities/comma/monzoFromRatio")
const {computeLog} = require("../../../utilities/log")

const computeRatioSubmetricAntivotes = (fiveRoughRatio, submetric = {}) => {
    const {
        k = 1,
        j = 1,
        numeratorIsNuminator = true,
        jIsBase = false,
        jIsExponent = false,
        kIsBase = false,
        kIsExponent = false,
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
    const numinator = numeratorIsNuminator === true ?
        numeratorPrimeContentAntivotes :
        numeratorPrimeContentAntivotes > denominatorPrimeContentAntivotes ?
            numeratorPrimeContentAntivotes :
            denominatorPrimeContentAntivotes
    const diminuator = numeratorIsNuminator === true ?
        denominatorPrimeContentAntivotes :
        numeratorPrimeContentAntivotes > denominatorPrimeContentAntivotes ?
            denominatorPrimeContentAntivotes :
            numeratorPrimeContentAntivotes

    const weightedNuminator = jIsBase ?
        computeLog(numinator, j) :
        jIsExponent ?
            numinator ** j :
            numinator * j

    const weightedDiminuator = kIsBase ?
        computeLog(diminuator, k) :
        kIsExponent ?
            diminuator ** k :
            diminuator * k

    if (isNaN(weightedNuminator) || isNaN(weightedDiminuator)) throw new Error(`You got NaN! in ratioSubmetricAntivotes ${fiveRoughRatio} ${JSON.stringify(submetric, null, 4)} ${weightedNuminator} ${weightedDiminuator} ${diminuator} ${k}`)

    return weightedNuminator + weightedDiminuator
}

module.exports = {
    computeRatioSubmetricAntivotes,
}
