import { computeSamples } from "../scopeToSamples/samples"
import { computeDynamicParameters } from "../scopeToSamples/dynamicParameters"
import { computeNextScopes } from "./nextScopes"
import { computeIndentation } from "./indentation"
import { computeLocalMinima } from "./localMinima"
import { deepEquals } from "../../../../../utilities/deepEquals"
import { computePossiblyUpdatedBestMetricWhilePopulatingSumsOfSquares } from "./sumsOfSquares"
import { SumOfSquares, SumsOfSquares } from "../../../sumOfSquares/types"
import { Scope, Submetric } from "../../../types"
import { Combination } from "../../../../../utilities/types"
import { Metric, ComputeBestMetricOptions } from "./types"

const computeBestMetric = (scope: Scope, options: ComputeBestMetricOptions = {}): Metric => {
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
    }: ComputeBestMetricOptions = options

    const nextDepth = depth + 1

    const indentation = computeIndentation(depth)

    const dynamicParameters = computeDynamicParameters(scope)
    const samples = computeSamples({ submetricScopes: scope, dynamicParameters })

    const sumsOfSquares: SumsOfSquares = []
    let bestMetric = computePossiblyUpdatedBestMetricWhilePopulatingSumsOfSquares(sumsOfSquares, samples, previousBestMetric, indentation, debug)

    if (debug) console.log(`\n${indentation}local minima:`)
    const nextLocalMinima = computeLocalMinima(samples, sumsOfSquares)
    for (const nextLocalMinimum of nextLocalMinima) {
        let index = nextLocalMinima.indexOf(nextLocalMinimum)
        const nextScopes = computeNextScopes(nextLocalMinimum.samplePoint, dynamicParameters, scope)
        const nextProgressMessage = progressMessage + `${index}/${(nextLocalMinima.length)}@depth${nextDepth} `
        if (debug) console.log(`${indentation}${nextProgressMessage}${JSON.stringify(nextLocalMinimum)}`)

        if (recurse && !deepEquals(localMinimum, nextLocalMinimum)) {
            bestMetric = computeBestMetric(nextScopes, {
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
    computeBestMetric,
}
