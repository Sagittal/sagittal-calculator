// This script is for developing the improvement to the "SoPF>3" metric. Once developed, it should become part of the analyzeComma script.

const {SUBMETRIC_TYPE, PARAMETER, USE_AS} = require("./unpopularityMetric/constants")
const {computeSubmetricCombinations} = require("./unpopularityMetric/submetricCombinations/submetricCombinations")
const {computeSumOfSquaresForSubmetrics} = require("./unpopularityMetric/sumOfSquares/sumOfSquaresForSubmetrics")
// todo: eventually we will want to collapse the interface between this top-level script and the automator to a single file
const {setSumOfSquaresAtCoordinate} = require("./unpopularityMetric/automator/setSumOfSquaresAtCoordinate")
const {checkIfLocalMinimum} = require("./unpopularityMetric/automator/localMinimum")

const configs = [
    {
        [PARAMETER.K]: {center: 0.038, range: 0.1, count: 2},
        [PARAMETER.A]: {center: 1.994, range: 0.1, count: 2},
        [PARAMETER.A_IS_BASE_OR_EXPONENT]: USE_AS.BASE,
        [PARAMETER.Y]: {center: 0.455, range: 0.1, count: 2},
        [PARAMETER.W]: {center: -2.08, range: 0.1, count: 2},
    },
    {
        [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPFAR,
        [PARAMETER.WEIGHT]: {center: 0.577, range: 0.1, count: 2},
    },
]

const submetricCombinations = computeSubmetricCombinations(configs)

const sumsOfSquares = []
const submetricCombinationCount = submetricCombinations.length
console.log("total submetric combinations to check:", submetricCombinationCount)
submetricCombinations.forEach(({submetrics, coordinate}, index) => {
    const sumOfSquares = computeSumOfSquaresForSubmetrics(submetrics)

    setSumOfSquaresAtCoordinate(sumOfSquares, sumsOfSquares, coordinate)

    if (sumOfSquares === 0) {
        computeSumOfSquaresForSubmetrics(submetrics, {logUnpopularities: true})
        throw new Error("This sum-of-squares was 0. That's extremely unlikely and probably means there's a bug in the code and that to continue searching now would be a waste of time.")
    }

    if (index % 10000 === 0) console.log("submetric combinations checked so far:", index, "out of", submetricCombinationCount, "(", 100 * index / submetricCombinationCount, "% )")
})

const MAXIMUM_WORTHWHILE_MINIMUM = 0.02
const localMinima = []
submetricCombinations.forEach(({submetrics, coordinate}) => {
    const localMinimum = checkIfLocalMinimum(sumsOfSquares, coordinate)

    if (localMinimum && localMinimum < MAXIMUM_WORTHWHILE_MINIMUM) {
        localMinima.push({localMinimum, submetrics})
    }
})
console.log("localMinima: (count:", localMinima.length, ")")
localMinima.forEach(localMinimum => console.log(JSON.stringify(localMinimum)))
