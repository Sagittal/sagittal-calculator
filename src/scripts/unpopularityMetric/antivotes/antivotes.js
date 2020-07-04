const {computeGpf} = require("../../../utilities/comma/gpf")
const {computeMonzoFromRatio} = require("../../../utilities/comma/monzoFromRatio")
const {computeWeightedSubmetricAntivotes} = require("./weightedSubmetricAntivotes")
const {SUBMETRIC_TYPE, PARAMETER} = require("../submetricCombinations/constants")

const computeAntivotes = (fiveRoughRatio, submetricCombination) => {
    return submetricCombination.reduce(
        (totalAntivotes, submetric) => {
            // todo: handle gpf and gpif like any other submetric
            if (submetric[PARAMETER.SUBMETRIC_TYPE] === SUBMETRIC_TYPE.GPF) {
                const weight = submetric[PARAMETER.WEIGHT]
                let weightedGpf = 0
                if (weight !== 0) {
                    const fiveRoughNumberMonzo = computeMonzoFromRatio(fiveRoughRatio)
                    weightedGpf = weight * computeGpf(fiveRoughNumberMonzo)
                }

                return weightedGpf
            }

            const weightedSubmetricAntivotes = computeWeightedSubmetricAntivotes(fiveRoughRatio, submetric)

            return totalAntivotes + weightedSubmetricAntivotes
        },
        0,
    )
}

module.exports = {
    computeAntivotes,
}
