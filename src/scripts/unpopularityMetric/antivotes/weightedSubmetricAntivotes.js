const ratioSubmetricUnpopularity = require("./ratioSubmetricAntivotes")
const {computeLog} = require("../../../utilities/log")
const {USE_AS} = require("../constants")

const computeWeightedSubmetricAntivotes = (fiveRoughRatio, submetric = {}) => {
    const {weight = 1, weightIsBaseOrPower = 0} = submetric

    let submetricAntivotes = 0
    if (weight !== 0) {
        submetricAntivotes = ratioSubmetricUnpopularity.computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)
    }

    return weightIsBaseOrPower === USE_AS.BASE ?
        computeLog(submetricAntivotes, weight) :
        weightIsBaseOrPower === USE_AS.POWER ?
            submetricAntivotes ** weight :
            submetricAntivotes * weight
}

module.exports = {
    computeWeightedSubmetricAntivotes,
}
