const {computeWeightedSopfgtt} = require("./weightedSopfgtt")

const ourCandidateMetric = ([num, den], k, a) => {
    const sopfgttNum = computeWeightedSopfgtt(num, a)
    const sopfgttDen = computeWeightedSopfgtt(den, a)

    const orientedSopfgttNum = sopfgttNum > sopfgttDen ? sopfgttNum : sopfgttDen
    const orientedSopfgttDen = sopfgttNum > sopfgttDen ? sopfgttDen : sopfgttNum

    return orientedSopfgttNum + k * orientedSopfgttDen
}

module.exports = {
    ourCandidateMetric,
}
