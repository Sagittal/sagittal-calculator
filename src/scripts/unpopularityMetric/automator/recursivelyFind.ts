import { computeSamples } from "./samples/samples"
import { computeDynamicParameters } from "./samples/dynamicParameters"
import { computeNextConfigs } from "./nextConfigs"
import { computeIndentation } from "./indentation"
import { computeLocalMinima } from "./localMinima"
import { deepEquals } from "../../../utilities/deepEquals"
import { gatherSumsOfSquares } from "./gatherSumsOfSquares"
import { SumsOfSquares } from "../sumOfSquares/types"
import { SubmetricConfig } from "../types"
import { Combination } from "../../../utilities/types"

const recursivelyFindUnpopularityMetric = (submetricConfigs: Combination<SubmetricConfig>, options = {}) => {
    const {
        depth = 0,
        bestMetric: previousBestMetric = { sumOfSquares: Infinity },
        progressMessage = "",
        localMinimum,
        recurse = true,
        debug = false,
    }: any = options

    const nextDepth = depth + 1

    const indentation = computeIndentation(depth)

    const dynamicParameters = computeDynamicParameters(submetricConfigs)
    const samples = computeSamples({ submetricConfigs, dynamicParameters })

    const sumsOfSquares: SumsOfSquares = []
    let bestMetric = gatherSumsOfSquares(sumsOfSquares, samples, previousBestMetric, indentation, debug)

    if (debug) console.log(`\n${indentation}local minima:`)
    const nextLocalMinima = computeLocalMinima(samples, sumsOfSquares)
    nextLocalMinima.forEach((nextLocalMinimum, index) => {
        const nextConfigs = computeNextConfigs(nextLocalMinimum.point, dynamicParameters, submetricConfigs)
        const nextProgressMessage = progressMessage + `${index}/${(nextLocalMinima.length)}@depth${nextDepth} `
        if (debug) console.log(`${indentation}${nextProgressMessage}${JSON.stringify(nextLocalMinimum)}`)

        if (recurse && !deepEquals(localMinimum, nextLocalMinimum)) {
            bestMetric = recursivelyFindUnpopularityMetric(nextConfigs, {
                depth: nextDepth,
                bestMetric,
                progressMessage: nextProgressMessage,
                localMinimum: nextLocalMinimum,
                debug,
            })
        }
    })

    return bestMetric
}

export {
    recursivelyFindUnpopularityMetric,
}
