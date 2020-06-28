const {computeLimit} = require("../../utilities/comma/limit")
const {computeMonzoFromRatio} = require("../../utilities/comma/monzoFromRatio")
const {computeWeightedSopfgtt} = require("./weightedSopfgtt")
const {computeWeightedSopifgtt} = require("./weightedSopifgtt")
const {computeWeightedSoupfgtt} = require("./weightedSoupfgtt")
const {computeWeightedSoupifgtt} = require("./weightedSoupifgtt")

const ourCandidateMetric = (ratio, parameters) => {
    const [num, den] = ratio
    const {k, j, a, b, s, u, i, h} = parameters

    const soppifgttNum = i ? computeWeightedSopifgtt(num, a) : computeWeightedSopfgtt(num, a)
    const soppifgttDen = i ? computeWeightedSopifgtt(den, a) : computeWeightedSopfgtt(den, a)
    const orientedSoppifgttNum = soppifgttNum > soppifgttDen ? soppifgttNum : soppifgttDen
    const orientedSoppifgttDen = soppifgttNum > soppifgttDen ? soppifgttDen : soppifgttNum

    const monzo = computeMonzoFromRatio(ratio)
    const primeLimit = computeLimit(monzo)

    const souppifgttNum = h ? computeWeightedSoupifgtt(num, b) : computeWeightedSoupfgtt(monzo, b)
    const souppifgttDen = h ? computeWeightedSoupifgtt(den, b) : computeWeightedSoupfgtt(den, b)
    const orientedSouppifgttNum = souppifgttNum > souppifgttDen ? souppifgttNum : souppifgttDen
    const orientedSouppifgttDen = souppifgttNum > souppifgttDen ? souppifgttDen : souppifgttNum

    return orientedSoppifgttNum + k * orientedSoppifgttDen + s * primeLimit + u * (orientedSouppifgttNum + j * orientedSouppifgttDen)
}

module.exports = {
    ourCandidateMetric,
}
