const {computeGpf} = require("../../../utilities/comma/gpf")
const {computeMonzoFromRatio} = require("../../../utilities/comma/monzoFromRatio")
const {computeWeightedPrimeContentUnpopularitySubmetric} = require("./weightedPrimeContentUnpopularitySubmetric")

const computeFiveRoughCommaUnpopularity = (fiveRoughRatio, parameters) => {
    return Object.entries(parameters).reduce(
        (totalSubmetricResults, [primeContentUnpopularitySubmetric, primeContentUnpopularitySubmetricParameters]) => { // todo: maybe here is the name place
            const {adjustments, submetricType} = primeContentUnpopularitySubmetricParameters

            if (primeContentUnpopularitySubmetric === "gpf") {
                let wgpf = 0
                if (adjustments.weight !== 0) {
                    const fiveRoughNumberMonzo = computeMonzoFromRatio(fiveRoughRatio)
                    wgpf = adjustments.weight * computeGpf(fiveRoughNumberMonzo)
                }

                return wgpf
            }

            const submetricResult = computeWeightedPrimeContentUnpopularitySubmetric(fiveRoughRatio, adjustments, submetricType)
// console.log(primeContentUnpopularitySubmetric, submetricResult)

            return totalSubmetricResults + submetricResult
        },
        0,
    )
}

module.exports = {
    computeFiveRoughCommaUnpopularity,
}
