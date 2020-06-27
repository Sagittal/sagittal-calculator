const {computeWeightedSopfgtt} = require("./weightedSopfgtt")
const {computeLimit} = require("../../utilities/comma/limit")
const {computeMonzoFromRatio} = require("../../utilities/comma/monzoFromRatio")
const {computeSoupfgtt} = require("../../utilities/comma/soupfgtt")
// const {computeSopfgtt} = require("../../utilities/comma/sopfgtt")

const ourCandidateMetric = (ratio, k, a, s, u) => {
    const [num, den] = ratio

    const sopfgttNum = computeWeightedSopfgtt(num, a)
    const sopfgttDen = computeWeightedSopfgtt(den, a)

    const orientedSopfgttNum = sopfgttNum > sopfgttDen ? sopfgttNum : sopfgttDen
    const orientedSopfgttDen = sopfgttNum > sopfgttDen ? sopfgttDen : sopfgttNum

    const monzo = computeMonzoFromRatio(ratio)
    const primeLimit = computeLimit(monzo)
    const soupfgtt = computeSoupfgtt(monzo)

    return orientedSopfgttNum + k * orientedSopfgttDen + l * primeLimit + u * soupfgtt

    // return computeSopfgtt(monzo)
}

// console.log(ourCandidateMetric([35, 1], 0.6, 0.56, 0.2, 0.1))
// console.log(ourCandidateMetric([7, 5], 0.6, 0.56, 0.2, 0.1))


module.exports = {
    ourCandidateMetric,
}
