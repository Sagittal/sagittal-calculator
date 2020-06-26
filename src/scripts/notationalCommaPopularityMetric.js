// This script is for developing the metric. Once developed, it will become part of the analyzeComma script.

const {computeSopfgtt} = require("../utilities/comma/sopfgtt")
const {computeMonzoFromRatio} = require("../utilities/comma/monzoFromRatio")
const {COMMA_POPULARITIES} = require("./notationalCommaPopularityMetric/popularities")

const computeSed = (ourRanks, commaPopularities) => {
    return commaPopularities.reduce(
        (sed, commaPopularity, index) => {
            const ourRank = ourRanks[index].rank
            const rank = commaPopularity.rank
            const squaredDistance = (ourRank ** -1.37 - rank ** -1.37) ** 2

            return sed + squaredDistance
        },
        0,
    )
}

const K = 0.9
const ourMetric = ratio => {
    // return computeSopfgtt(computeMonzoFromRatio(ratio))
    // return computeSopfgtt(computeMonzoFromRatio(ratio)) + K * Math.abs(computeSopfgtt(computeMonzoFromRatio([ratio[0], 1])) - computeSopfgtt(computeMonzoFromRatio(1, [ratio[1]])))
    return computeSopfgtt(computeMonzoFromRatio([ratio[0], 1])) + K * computeSopfgtt(computeMonzoFromRatio([ratio[1], 1]))
}

const computeOurValues = popularities => {
    return popularities.map((popularity, index) => {
        return { index, popularity: ourMetric(popularity.ratio) }
    })
}

const computeOurRanks = ourValues => {
    // console.log('ourValues', ourValues)
    const sortedValues = ourValues.sort((a, b) => {
        return a.popularity - b.popularity
    })
    // console.log('sortedValues', sortedValues)

    const rankedValues = sortedValues.map((value, index) => {
        return {
            ...value,
            rank: index + 1, // no zero-offset
        }
    })
    // console.log('rankedValues', rankedValues)

    let returnedToOriginalSortValues = rankedValues.sort((a, b) => {
        return a.index - b.index
    })
    // console.log('returnedToOriginalSortValues', returnedToOriginalSortValues)

    return returnedToOriginalSortValues
}

const UP_TO = 6
const popularities = COMMA_POPULARITIES//.slice(0, UP_TO)

const n = popularities.length
// const sed = computeSed(popularities)
const ourValues = computeOurValues(popularities)
const ourRanks = computeOurRanks(ourValues)
const sed = computeSed(ourRanks, popularities)

const rho = 1 - ((6 * sed) / (n * (n ** 2 - 1)))

console.log(rho, "k =", K)

console.log(ourMetric([7,5]))

/*
let maxRho = 0
let k = 1
let tries = 0
let dir = 1
while (tries < 1000) {
    tries++

    const ourValues = computeOurValues(popularities)
    const ourRanks = computeOurRanks(ourValues)
    const sed = computeSed(ourRanks, popularities)

    const rho = 1 - ((6 * sed) / (n * (n ** 2 - 1)))

    if (rho > maxRho) {
        maxRho = rho
    } else {
        dir = dir * -1
    }

    k = k + (dir * k * 2 ** -tries)
}
console.log(maxRho, k)
 */
