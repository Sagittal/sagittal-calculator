import { computeSamples } from "./samples/samples"
import { computeDynamicParameters } from "./samples/dynamicParameters"
import { computeNextSampleConfigs } from "./nextSampleConfigs"
import { computeIndentation } from "./indentation"
import { computeLocalMinima } from "./localMinima"
import { deepEquals } from "../../../../utilities/deepEquals"
import { computePossiblyUpdatedBestMetricWhilePopulatingSumsOfSquares } from "./sumsOfSquares"
import { SumOfSquares, SumsOfSquares } from "../../sumOfSquares/types"
import { SampleConfig, Submetric } from "../../types"
import { Combination } from "../../../../utilities/types"
import { Metric, RecursivelyFindUnpopularityMetricOptions } from "./types"

const recursivelyFindUnpopularityMetric = (sampleConfig: SampleConfig, options: RecursivelyFindUnpopularityMetricOptions = {}): Metric => {
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
    let bestMetric = computePossiblyUpdatedBestMetricWhilePopulatingSumsOfSquares(sumsOfSquares, samples, previousBestMetric, indentation, debug)

    if (debug) console.log(`\n${indentation}local minima:`)
    const nextLocalMinima = computeLocalMinima(samples, sumsOfSquares)
    for (const nextLocalMinimum of nextLocalMinima) {
        let index = nextLocalMinima.indexOf(nextLocalMinimum)
        const nextSampleConfigs = computeNextSampleConfigs(nextLocalMinimum.samplePoint, dynamicParameters, sampleConfig)
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
    }

    return bestMetric
}

export {
    recursivelyFindUnpopularityMetric,
}
