// This script is for developing the metric. Once developed, it will become part of the analyzeComma script.

const {computeSopfgtt} = require("../utilities/comma/sopfgtt")
const {computeMonzoFromRatio} = require("../utilities/comma/monzoFromRatio")
const {COMMA_POPULARITIES} = require("./notationalCommaPopularityMetric/popularities")

const computeSedSum = commaPopularities => {
    return commaPopularities.reduce(
        (sedSum, commaPopularity) => {
            const ourRank = ourMetric(commaPopularity.ratio)
            const rank = commaPopularity.rank
            const sed = (ourRank - rank) ** 2

            return sedSum + sed
        },
        0,
    )
}

const ourMetric = ratio => {
    return computeSopfgtt(computeMonzoFromRatio(ratio))
}

const UP_TO = 30
const popularities = COMMA_POPULARITIES.slice(0, UP_TO)

const n = popularities.length
const sedSum = computeSedSum(popularities)

const rho = 1 - ((6 * sedSum) / (n * (n ** 2 - 1)))

console.log(rho)
