const ratioSubmetricUnpopularity = require("./ratioSubmetricAntivotes")
const {computeLog} = require("../../../utilities/log")

const computeWeightedSubmetricAntivotes = (fiveRoughRatio, submetric = {}) => {
    const {weight = 1, weightIsBase = false, weightIsExponent = false} = submetric

    let submetricAntivotes = 0
    if (weight !== 0) {
        submetricAntivotes = ratioSubmetricUnpopularity.computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)
    }

    const weightedSubmetricAntivotes = weightIsBase ?
        computeLog(submetricAntivotes, weight) :
        weightIsExponent ?
            submetricAntivotes ** weight :
            submetricAntivotes * weight

    if (isNaN(weightedSubmetricAntivotes)) throw new Error(`You got NaN! ${fiveRoughRatio} ${JSON.stringify(submetric, null, 4)} ${submetricAntivotes} ${weight} ${weightIsBaseOrExponent}`)

    return weightedSubmetricAntivotes
}

module.exports = {
    computeWeightedSubmetricAntivotes,
}
