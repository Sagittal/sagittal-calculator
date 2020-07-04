const ratioSubmetricUnpopularity = require("./ratioSubmetricAntivotes")

const computeWeightedSubmetricAntivotes = (fiveRoughRatio, submetric = {}) => {
    const {weight = 1} = submetric

    let submetricAntivotes = 0
    if (weight !== 0) {
        submetricAntivotes = ratioSubmetricUnpopularity.computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)
        // console.log('weight', weight, 'submetricAntivotes', submetricAntivotes)
    }

    return weight * submetricAntivotes
}

module.exports = {
    computeWeightedSubmetricAntivotes,
}
