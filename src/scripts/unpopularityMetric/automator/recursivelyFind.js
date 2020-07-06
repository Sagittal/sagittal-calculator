const {MAXIMUM_WORTHWHILE_MINIMUM} = require("./constants")
const {computeSubmetricCombinations} = require("../submetricCombinations/submetricCombinations")
const {computeDynamicParameters} = require("../submetricCombinations/dynamicParameters")
const {computeSumOfSquaresForSubmetrics} = require("../sumOfSquares/sumOfSquaresForSubmetrics")
const {setSumOfSquaresAtCoordinate} = require("./setSumOfSquaresAtCoordinate")
const {checkIfLocalMinimum} = require("./localMinimum")
const {computeNextConfigs} = require("./nextConfigs")
const {computeIndentation} = require("./indentation")

const recursivelyFindUnpopularityMetric = (configs, depth = 0, best = {sumOfSquares: Infinity}, progessMessage = "0/1@depth0") => {
    const indentation = computeIndentation(depth)

    const dynamicParameters = computeDynamicParameters(configs)
    const submetricCombinations = computeSubmetricCombinations({configs, dynamicParameters})

    const sumsOfSquares = []
    submetricCombinations.forEach(({submetrics, coordinate}, index) => {
        const sumOfSquares = computeSumOfSquaresForSubmetrics(submetrics)

        setSumOfSquaresAtCoordinate(sumOfSquares, sumsOfSquares, coordinate)

        if (sumOfSquares < best.sumOfSquares) {
            best = {sumOfSquares, submetrics}
            if (sumOfSquares === 0) {
                computeSumOfSquaresForSubmetrics(submetrics, {logUnpopularities: true})
                throw new Error("This sum-of-squares was 0. That's extremely unlikely and probably means there's a bug in the code and that to continue searching now would be a waste of time.")
            }

            console.log(`${indentation}new best: ${JSON.stringify(best)}`.green)
        }
    })

    // if (depth > MAXIMUM_DEPTH) return best

    const localMinima = []
    submetricCombinations.forEach(({submetrics, coordinate}) => {
        const sumOfSquares = checkIfLocalMinimum(sumsOfSquares, coordinate) // todo: clean up names around here

        if (sumOfSquares && sumOfSquares < MAXIMUM_WORTHWHILE_MINIMUM) {
            localMinima.push({sumOfSquares, coordinate, submetrics})
        }
    })
    const localMinimaCount = localMinima.length
    localMinima.sort((localMinimum, nextLocalMinimum) => {
        return localMinimum.sumOfSquares - nextLocalMinimum.sumOfSquares
    })

    localMinima.forEach((localMinimum, index) => {
        const nextConfigs = computeNextConfigs(localMinimum.coordinate, dynamicParameters, configs)
        const newProgressMessage = progessMessage + ` ${index}/${localMinimaCount}@depth${depth + 1}`
        console.log(`\n${indentation}${newProgressMessage}\n${indentation}${JSON.stringify(localMinimum)}`)
        best = recursivelyFindUnpopularityMetric(nextConfigs, depth + 1, best, newProgressMessage)
    })

    return best
}

module.exports = {
    recursivelyFindUnpopularityMetric,
}
