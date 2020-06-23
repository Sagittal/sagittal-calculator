const {computePlusOrMinusRange} = require("../../utilities/plusOrMinusRange")

const computeTermRange = (prime, {maximumSopfgtt = Infinity, maximumCopfgtt = Infinity} = {}) => {
    if (maximumSopfgtt === Infinity && maximumCopfgtt === Infinity) {
        throw new Error("The range must be limited somehow.")
    }

    const maximumPrimeCount = Math.floor(maximumSopfgtt / prime)

    return computePlusOrMinusRange(Math.min(maximumPrimeCount, maximumCopfgtt))
}

module.exports = {
    computeTermRange,
}
