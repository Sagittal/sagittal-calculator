const {computeWeightedSopfgtt} = require("./weightedSopfgtt")
const {computeWeightedSopifgtt} = require("./weightedSopifgtt")
const {computeLimit} = require("../../utilities/comma/limit")
const {computeMonzoFromRatio} = require("../../utilities/comma/monzoFromRatio")
const {computeSoupfgtt} = require("../../utilities/comma/soupfgtt")
const {computeSoupifgtt} = require("./soupifgtt")

const ourCandidateMetric = (ratio, parameters) => {
    const [num, den] = ratio
    const {k, a, s, u} = parameters

    const sopfgttNum = computeWeightedSopfgtt(num, a)
    // const sopfgttNum = computeWeightedSopifgtt(num, a)
    const sopfgttDen = computeWeightedSopfgtt(den, a)
    // const sopfgttDen = computeWeightedSopifgtt(den, a)

    const orientedSopfgttNum = sopfgttNum > sopfgttDen ? sopfgttNum : sopfgttDen
    const orientedSopfgttDen = sopfgttNum > sopfgttDen ? sopfgttDen : sopfgttNum

    const monzo = computeMonzoFromRatio(ratio)
    const primeLimit = computeLimit(monzo)
    // const soupfgtt = computeSoupfgtt(monzo)
    const soupifgtt = computeSoupifgtt(monzo)

    return orientedSopfgttNum + k * orientedSopfgttDen + s * primeLimit + u * soupifgtt
}

module.exports = {
    ourCandidateMetric,
}
