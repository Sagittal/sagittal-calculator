// This script is for developing the improvement to the "SoPF>3" metric. Once developed, it should become part of the analyzeComma script.

const {SUBMETRIC_TYPE, PARAMETER, USE_AS} = require("./unpopularityMetric/constants")
const {computeSubmetricCombinations} = require("./unpopularityMetric/submetricCombinations/submetricCombinations")
const {computeSumOfSquaresForSubmetrics} = require("./unpopularityMetric/sumOfSquares/sumOfSquaresForSubmetrics")

const configs = [
    {
        [PARAMETER.K]: {center: 2, range: 2, count: 11},
        [PARAMETER.K_IS_BASE_OR_EXPONENT]: USE_AS.BASE,
        [PARAMETER.A]: {center: 2.5, range: 2, count: 11},
        [PARAMETER.A_IS_BASE_OR_EXPONENT]: USE_AS.BASE,
        [PARAMETER.W]: {center: -0.5, range: 1, count: 11},
        [PARAMETER.Y]: {center: 1, range: 2, count: 11},
        [PARAMETER.T]: {center: 0, range: 4, count: 11},
    },
]

const submetricCombinations = computeSubmetricCombinations(configs)

let best = {sumOfSquares: Infinity}

const submetricCombinationCount = submetricCombinations.length
console.log("total submetric combinations to check:", submetricCombinationCount)
submetricCombinations.forEach(({submetrics}, index) => {
    const sumOfSquares = computeSumOfSquaresForSubmetrics(submetrics)

    if (sumOfSquares < best.sumOfSquares) {
        best = {sumOfSquares, submetrics}
        if (sumOfSquares === 0) {
            computeSumOfSquaresForSubmetrics(submetrics, {logUnpopularities: true})
            throw new Error("This sum-of-squares was 0. That's extremely unlikely and probably means there's a bug in the code and that to continue searching now would be a waste of time.")
        }

        console.log(JSON.stringify(best))
    }

    if (index % 10000 === 0) console.log("submetric combinations checked so far:", index, "out of", submetricCombinationCount, "(", 100 * index / submetricCombinationCount, "% )")
})
console.log("final best:", JSON.stringify(best))
