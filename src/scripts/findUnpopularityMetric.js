// This script is for developing the improvement to the "SoPF>3" metric. Once developed, it should become part of the analyzeComma script.

const {SUBMETRIC_TYPE, PARAMETER, USE_AS} = require("./unpopularityMetric/constants")
const {computeSubmetricCombinations} = require("./unpopularityMetric/submetricCombinations/submetricCombinations")
const {computeSumOfSquaresForSubmetricCombination} = require("./unpopularityMetric/sumOfSquares/sumOfSquaresForSubmetricCombination")

const configs = [
    {
        [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPFAR,
        [PARAMETER.K]: 0.038,
        [PARAMETER.A]: 1.994,
        [PARAMETER.A_IS_BASE_OR_EXPONENT]: USE_AS.BASE,
        [PARAMETER.W]: -2.08,
        [PARAMETER.Y]: 0.455,
    },
    {
        [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPFAR,
        [PARAMETER.WEIGHT]: 0.577,
    },
]

const submetricCombinations = computeSubmetricCombinations(configs)

let best = {sumOfSquares: Infinity}

const submetricCombinationCount = submetricCombinations.length
console.log("total submetric combinations to check:", submetricCombinationCount)
submetricCombinations.forEach((submetricCombination, index) => {
    const sumOfSquares = computeSumOfSquaresForSubmetricCombination(submetricCombination)

    if (sumOfSquares < best.sumOfSquares) {
        best = {sumOfSquares, submetricCombination}
        if (sumOfSquares === 0) {
            computeSumOfSquaresForSubmetricCombination(submetricCombination, {logUnpopularities: true})
            throw new Error("This sum-of-squares was 0. That's extremely unlikely and probably means there's a bug in the code and that to continue searching now would be a waste of time.")
        }

        console.log(JSON.stringify(best))
    }

    if (index % 10000 === 0) console.log("submetricCombinations checked so far:", index, 'out of', submetricCombinationCount, '(', 100 * index / submetricCombinationCount, '% )')
})
console.log('final best:', JSON.stringify(best))
