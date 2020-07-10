import {computeSubmetricCombinations} from "../submetricCombinations/submetricCombinations"
import {computeDynamicParameters} from "../submetricCombinations/dynamicParameters"
import {computeNextConfigs} from "./nextConfigs"
import {computeIndentation} from "./indentation"
import {computeLocalMinima} from "./localMinima"
import {deepEquals} from "../../../utilities/deepEquals"
import {gatherSumsOfSquares} from "./gatherSumsOfSquares"

const recursivelyFindUnpopularityMetric = (configs, options = {}) => {
    const {
        depth = 0,
        best = {sumOfSquares: Infinity},
        progressMessage = "",
        localMinimum,
        recurse = true,
        quiet = false,
    }: any = options

    const nextDepth = depth + 1

    const indentation = computeIndentation(depth)

    const dynamicParameters = computeDynamicParameters(configs)
    const submetricCombinations = computeSubmetricCombinations({configs, dynamicParameters})

    const sumsOfSquares = []
    let nextBest = gatherSumsOfSquares(sumsOfSquares, submetricCombinations, best, indentation, quiet) // todo: i meant to rename this to nextBestMetric, but also "next best" is confusing

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

export {
    recursivelyFindUnpopularityMetric,
}
