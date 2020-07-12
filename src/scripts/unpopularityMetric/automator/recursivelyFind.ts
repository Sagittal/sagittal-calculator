import { computeSamples } from "./samples/samples"
import { computeDynamicParameters } from "./samples/dynamicParameters"
import { computeNextSampleConfigs } from "./nextSampleConfigs"
import { computeIndentation } from "./indentation"
import { computeLocalMinima } from "./localMinima"
import { deepEquals } from "../../../utilities/deepEquals"
import { gatherSumsOfSquares } from "./gatherSumsOfSquares"
import { SumOfSquares, SumsOfSquares } from "../sumOfSquares/types"
import { SampleConfig, Submetric } from "../types"
import { Combination } from "../../../utilities/types"
import { RecursivelyFindUnpopularityMetricOptions } from "./types"

const recursivelyFindUnpopularityMetric = (sampleConfig: SampleConfig, options: RecursivelyFindUnpopularityMetricOptions = {}) => {
    const {
        depth = 0,
        bestMetric: previousBestMetric = {
            sumOfSquares: Infinity as SumOfSquares,
            submetrics: [] as unknown as Combination<Submetric>,
        },
        progressMessage = "",
        localMinimum,
        recurse = true,
        debug = false,
    }: RecursivelyFindUnpopularityMetricOptions = options

    const nextDepth = depth + 1

    const indentation = computeIndentation(depth)

    const dynamicParameters = computeDynamicParameters(sampleConfig)
    const samples = computeSamples({ submetricSampleConfigs: sampleConfig, dynamicParameters })

    const sumsOfSquares: SumsOfSquares = []
    let bestMetric = gatherSumsOfSquares(sumsOfSquares, samples, previousBestMetric, indentation, debug)

    if (debug) console.log(`\n${indentation}local minima:`)
    const nextLocalMinima = computeLocalMinima(samples, sumsOfSquares)
    nextLocalMinima.forEach((nextLocalMinimum, index) => {
        const nextSampleConfigs = computeNextSampleConfigs(nextLocalMinimum.point, dynamicParameters, sampleConfig)
        const nextProgressMessage = progressMessage + `${index}/${(nextLocalMinima.length)}@depth${nextDepth} `
        if (debug) console.log(`${indentation}${nextProgressMessage}${JSON.stringify(nextLocalMinimum)}`)

        if (recurse && !deepEquals(localMinimum, nextLocalMinimum)) {
            bestMetric = recursivelyFindUnpopularityMetric(nextSampleConfigs, {
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
