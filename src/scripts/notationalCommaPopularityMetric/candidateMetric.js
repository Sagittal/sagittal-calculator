const {computeLimit} = require("../../utilities/comma/limit")
const {computeMonzoFromRatio} = require("../../utilities/comma/monzoFromRatio")
const {computeWeightedSopfgtt} = require("./weightedSopfgtt")
const {computeWeightedSopifgtt} = require("./weightedSopifgtt")
const {computeWeightedSoupfgtt} = require("./weightedSoupfgtt")
const {computeWeightedSoupifgtt} = require("./weightedSoupifgtt")

const ourCandidateMetric = (ratio, parameters) => {
    const [num, den] = ratio
    const {k, j, a, b, s, u, i, h, l, m} = parameters

    const soppifgttNum = i ? computeWeightedSopifgtt(num, a, l) : computeWeightedSopfgtt(num, a, l)
    const soppifgttDen = i ? computeWeightedSopifgtt(den, a, l) : computeWeightedSopfgtt(den, a, l)
    const orientedSoppifgttNum = soppifgttNum > soppifgttDen ? soppifgttNum : soppifgttDen
    const orientedSoppifgttDen = soppifgttNum > soppifgttDen ? soppifgttDen : soppifgttNum

    const monzo = computeMonzoFromRatio(ratio)
    const primeLimit = computeLimit(monzo)

    const souppifgttNum = h ? computeWeightedSoupifgtt(num, b, m) : computeWeightedSoupfgtt(monzo, b, m)
    const souppifgttDen = h ? computeWeightedSoupifgtt(den, b, m) : computeWeightedSoupfgtt(den, b, m)
    const orientedSouppifgttNum = souppifgttNum > souppifgttDen ? souppifgttNum : souppifgttDen
    const orientedSouppifgttDen = souppifgttNum > souppifgttDen ? souppifgttDen : souppifgttNum

    return orientedSoppifgttNum + k * orientedSoppifgttDen + s * primeLimit + u * (orientedSouppifgttNum + j * orientedSouppifgttDen)
}

module.exports = {
    ourCandidateMetric,
}
