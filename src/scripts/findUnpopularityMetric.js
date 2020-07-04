// This script is for developing the improvement to the "SoPF>3" metric. Once developed, it should become part of the analyzeComma script.

const {SUBMETRIC_TYPE, PARAMETER} = require("./unpopularityMetric/submetricCombinations/constants")
const {computeSubmetricCombinations} = require("./unpopularityMetric/submetricCombinations/submetricCombinations")
const {computeSumOfSquaresForSubmetricCombination} = require("./unpopularityMetric/sumOfSquares/sumOfSquaresForSubmetricCombination")

const configs = [
    {
        // todo: new parameters.
        //  k could be either a power, a base, or a coefficient too,
        //  and since that's three different things, it might need to cycle through -1, 0, and 1
        //  also have a "submetric power or base"
        //  also have a "use the submetric power or base as a base"
        //  shouldn’t you be able to weight the numinator too? with "j" I guess?
        //  in cases when you ONLY want the numinator that's the only way you could do it
        [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPFAR,
        [PARAMETER.K]: 0.038,
        [PARAMETER.A]: 1.994,
        [PARAMETER.A_IS_BASE_NOT_POWER]: 1,
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
