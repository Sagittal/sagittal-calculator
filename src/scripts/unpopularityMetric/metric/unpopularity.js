const {computeGpf} = require("../../../utilities/comma/gpf")
const {computeMonzoFromRatio} = require("../../../utilities/comma/monzoFromRatio")
const {computeWeightedSubmetricUnpopularity} = require("./weightedSubmetricUnpopularity")
const {SUBMETRIC_NAME, ADJUSTMENT} = require("../parameters/constants")

const computeUnpopularity = (fiveRoughRatio, parameters) => {
    return Object.entries(parameters).reduce(
        (totalUnpopularity, [submetricName, submetricParameters]) => {
            const {adjustments, submetricType} = submetricParameters

            // todo: maybe i should handle this inside with all the other ones, so it could also take prime index, and w, a, etc. adjustments could make sense too
            //  - the below comment will need to be fixed (pulled from parameters from combined adjustments)
            //     [SUBMETRIC_NAME.GPF]: {
            //         adjustments: {[ADJUSTMENT.WEIGHT]: 0},
            //         submetricType: SUBMETRIC_TYPE.GPF,
            //     },
            if (submetricName === SUBMETRIC_NAME.GPF) {
                let weightedGpf = 0
                if (adjustments[ADJUSTMENT.WEIGHT] !== 0) {
                    const fiveRoughNumberMonzo = computeMonzoFromRatio(fiveRoughRatio)
                    weightedGpf = adjustments[ADJUSTMENT.WEIGHT] * computeGpf(fiveRoughNumberMonzo)
                }

                return weightedGpf
            }

            const weightedSubmetricUnpopularity = computeWeightedSubmetricUnpopularity(fiveRoughRatio, adjustments, submetricType)

            return totalUnpopularity + weightedSubmetricUnpopularity
        },
        0,
    )
}

module.exports = {
    computeUnpopularity,
}
