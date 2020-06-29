const {computeLimit} = require("../../utilities/comma/limit")
const {computeMonzoFromRatio} = require("../../utilities/comma/monzoFromRatio")
const {computeWeightedSopfgtt} = require("./weightedSopfgtt")
const {computeWeightedSoupfgtt} = require("./weightedSoupfgtt")
const {computeWeightedSopifgtt} = require("./weightedSopifgtt")
const {computeWeightedSoupifgtt} = require("./weightedSoupifgtt")

const ourCandidateMetric = (ratio, parameters) => {
    const [num, den] = ratio
    const {k, a, y, s, i, l, m, x, u} = parameters

    const monzo = computeMonzoFromRatio(ratio)
    const primeLimit = computeLimit(monzo)

    if (x) {
        const soppifgttNum = i ? computeWeightedSopifgtt(num, a, l, y, m) : computeWeightedSopfgtt(num, a, l, y, m)
        const soppifgttDen = i ? computeWeightedSopifgtt(den, a, l, y, m) : computeWeightedSopfgtt(den, a, l, y, m)
        const orientedSoppifgttNum = soppifgttNum > soppifgttDen ? soppifgttNum : soppifgttDen
        const orientedSoppifgttDen = soppifgttNum > soppifgttDen ? soppifgttDen : soppifgttNum

        return orientedSoppifgttNum + k * orientedSoppifgttDen + s * primeLimit
    } else {
        const soppifgttNum = i ? computeWeightedSopifgtt(num, a, l, 1, m) : computeWeightedSopfgtt(num, a, l, 1, m)
        const soppifgttDen = i ? computeWeightedSopifgtt(den, a, l, 1, m) : computeWeightedSopfgtt(den, a, l, 1, m)
        const orientedSoppifgttNum = soppifgttNum > soppifgttDen ? soppifgttNum : soppifgttDen
        const orientedSoppifgttDen = soppifgttNum > soppifgttDen ? soppifgttDen : soppifgttNum

        const souppifgttNum = i ? computeWeightedSoupifgtt(num, a, l, 1, m) : computeWeightedSoupfgtt(monzo, a, l, 1, m)
        const souppifgttDen = i ? computeWeightedSoupifgtt(den, a, l, 1, m) : computeWeightedSoupfgtt(den, a, l, 1, m)
        const orientedSouppifgttNum = souppifgttNum > souppifgttDen ? souppifgttNum : souppifgttDen
        const orientedSouppifgttDen = souppifgttNum > souppifgttDen ? souppifgttDen : souppifgttNum

        return orientedSoppifgttNum + k * orientedSoppifgttDen + u * (orientedSouppifgttNum + k * orientedSouppifgttDen) + s * primeLimit
    }
}

module.exports = {
    ourCandidateMetric,
}
