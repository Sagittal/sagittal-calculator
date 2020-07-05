const ratioSubmetricUnpopularity = require("./ratioSubmetricAntivotes")
const {computeLog} = require("../../../utilities/log")
const {USE_AS} = require("../constants")

const computeWeightedSubmetricAntivotes = (fiveRoughRatio, submetric = {}) => {
    const {weight = 1, weightIsBaseOrExponent = 0} = submetric

    let submetricAntivotes = 0
    if (weight !== 0) {
        submetricAntivotes = ratioSubmetricUnpopularity.computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)
    }

    const weightedSubmetricAntivotes = weightIsBaseOrExponent === USE_AS.BASE ?
        computeLog(submetricAntivotes, weight) :
        weightIsBaseOrExponent === USE_AS.EXPONENT ?
            submetricAntivotes ** weight :
            submetricAntivotes * weight

    if (isNaN(weightedSubmetricAntivotes)) throw new Error(`You got NaN! ${fiveRoughRatio} ${JSON.stringify(submetric, null, 4)} ${submetricAntivotes} ${weight} ${weightIsBaseOrExponent}`)

    return weightedSubmetricAntivotes
}

module.exports = {
    computeWeightedSubmetricAntivotes,
}
