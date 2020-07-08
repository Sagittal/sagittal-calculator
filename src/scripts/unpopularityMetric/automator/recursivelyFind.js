const {computeSubmetricCombinations} = require("../submetricCombinations/submetricCombinations")
const {computeDynamicParameters} = require("../submetricCombinations/dynamicParameters")
const {computeNextConfigs} = require("./nextConfigs")
const {computeIndentation} = require("./indentation")
const {computeLocalMinima} = require("./localMinima")
const {deepEquals} = require("../../../utilities/deepEquals")
const {gatherSumsOfSquares} = require("./gatherSumsOfSquares")

const recursivelyFindUnpopularityMetric = (configs, options = {}) => {
    const {
        depth = 0,
        best = {sumOfSquares: Infinity},
        progressMessage = "",
        localMinimum,
        recurse = true,
        quiet = false,
    } = options

    const nextDepth = depth + 1

    const indentation = computeIndentation(depth)

    const dynamicParameters = computeDynamicParameters(configs)
    const submetricCombinations = computeSubmetricCombinations({configs, dynamicParameters})

    const sumsOfSquares = []
    let nextBest = gatherSumsOfSquares(sumsOfSquares, submetricCombinations, best, indentation, quiet)

    if (!quiet) console.log(`\n${indentation}local minima:`)
    const nextLocalMinima = computeLocalMinima(submetricCombinations, sumsOfSquares)
    nextLocalMinima.forEach((nextLocalMinimum, index) => {
        const nextConfigs = computeNextConfigs(nextLocalMinimum.coordinate, dynamicParameters, configs)
        const nextProgressMessage = progressMessage + `${index}/${(nextLocalMinima.length)}@depth${nextDepth} `
        if (!quiet) console.log(`${indentation}${nextProgressMessage}${JSON.stringify(nextLocalMinimum)}`)

        if (recurse && !deepEquals(localMinimum, nextLocalMinimum)) {
            nextBest = recursivelyFindUnpopularityMetric(nextConfigs, {
                depth: nextDepth,
                best: nextBest,
                progressMessage: nextProgressMessage,
                localMinimum: nextLocalMinimum,
                quiet,
            })
        }
    })

    return nextBest
}

module.exports = {
    recursivelyFindUnpopularityMetric,
}
