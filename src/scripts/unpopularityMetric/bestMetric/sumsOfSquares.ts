import { Index } from "../../../general"
import { DebugTarget, saveDebugMessage } from "../debug"
import { checkSubmetricsForInvalidParameterCombinations } from "../sumOfSquares"
import { Sample } from "./scopeToSamples"
import { computeSumOfSquaresAndMaybeUpdateBestMetric } from "./sumOfSquares"
import { ComputeSumsOfSquaresAndMaybeUpdateBestMetricOptions, SumsOfSquares } from "./types"

const computeSumsOfSquaresAndMaybeUpdateBestMetric = (samples: Sample[], options: ComputeSumsOfSquaresAndMaybeUpdateBestMetricOptions = {}) => {
    const { indentation = "", onlyWinners = true } = options

    const sumsOfSquares: SumsOfSquares = []

    try {
        checkSubmetricsForInvalidParameterCombinations(samples[ 0 ].submetrics)
    } catch (e) {
        saveDebugMessage(`Not searching scope due to invalid parameter combinations: ${e.message}`, DebugTarget.ERRORS)
        return sumsOfSquares
    }

    samples.forEach((sample, index) => {
        computeSumOfSquaresAndMaybeUpdateBestMetric(sample, {
            indentation,
            sumsOfSquares,
            index: index as Index<Sample>,
            onlyWinners,
            ...options,
        })
    })

    return sumsOfSquares
}

export {
    computeSumsOfSquaresAndMaybeUpdateBestMetric,
}
