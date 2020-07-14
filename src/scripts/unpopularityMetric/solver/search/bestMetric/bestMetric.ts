import { Combination, deepEquals } from "../../../../../general"
import { debug } from "../../../debug"
import { SumOfSquares } from "../../../sumOfSquares"
import { Submetric } from "../../../types"
import { Scope } from "../../types"
import { computeDynamicParameters, computeSamples } from "../scopeToSamples"
import { computeIndentation } from "./indentation"
import { computeLocalMinima } from "./localMinima"
import { computeNextScopes } from "./nextScopes"
import { computePossiblyUpdatedBestMetricWhilePopulatingSumsOfSquares } from "./sumsOfSquares"
import { ComputeBestMetricOptions, Metric, SumsOfSquares } from "./types"

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
    }: ComputeBestMetricOptions = options

    const nextDepth = depth + 1

    const indentation = computeIndentation(depth)

    const dynamicParameters = computeDynamicParameters(scope)
    const samples = computeSamples({ submetricScopes: scope, dynamicParameters })

    const sumsOfSquares: SumsOfSquares = []
    let bestMetric = computePossiblyUpdatedBestMetricWhilePopulatingSumsOfSquares(sumsOfSquares, samples, previousBestMetric, indentation)

    if (debug.all) {
        console.log(`\n${indentation}local minima:`)
    }
    const nextLocalMinima = computeLocalMinima(samples, sumsOfSquares)
    for (const nextLocalMinimum of nextLocalMinima) {
        const index = nextLocalMinima.indexOf(nextLocalMinimum)
        const nextScopes = computeNextScopes(nextLocalMinimum.samplePoint, dynamicParameters, scope)
        const nextProgressMessage = progressMessage + `${index}/${(nextLocalMinima.length)}@depth${nextDepth} `
        if (debug.all) {
            console.log(`${indentation}${nextProgressMessage}${JSON.stringify(nextLocalMinimum)}`)
        }

        if (recurse && !deepEquals(localMinimum, nextLocalMinimum)) {
            bestMetric = computeBestMetric(nextScopes, {
                depth: nextDepth,
                bestMetric,
                progressMessage: nextProgressMessage,
                localMinimum: nextLocalMinimum,
            })
        }
    }

    return bestMetric
}

export {
    computeBestMetric,
}
