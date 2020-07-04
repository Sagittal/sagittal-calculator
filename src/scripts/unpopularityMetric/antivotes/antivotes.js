const {computeWeightedSubmetricAntivotes} = require("./weightedSubmetricAntivotes")
const {SUBMETRIC_TYPE, PARAMETER} = require("../submetricCombinations/constants")

const computeAntivotes = (fiveRoughRatio, submetricCombination, {logSubmetricAntivotes = false} = {}) => {
    return submetricCombination.reduce(
        (totalAntivotes, submetric) => {
            const weightedSubmetricAntivotes = computeWeightedSubmetricAntivotes(fiveRoughRatio, submetric)

            if (logSubmetricAntivotes) console.log(`${submetric[PARAMETER.SUBMETRIC_TYPE] || SUBMETRIC_TYPE.SOAPFAR}: ${weightedSubmetricAntivotes}`)

            return totalAntivotes + weightedSubmetricAntivotes
        },
        0,
    )
}

module.exports = {
    computeAntivotes,
}
