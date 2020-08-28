import "colors"
import { Extrema, Filename, IO, isNumber, isUndefined, Max, Maybe, Min } from "../../../general"
import { Metric } from "../bestMetric"
import { DebugTarget, saveDebugMessage } from "../debug"
import { Parameter, ParameterValue } from "../sumOfSquares"
import { applySharedUnpopularityMetricCommandSetup, load } from "./shared"

applySharedUnpopularityMetricCommandSetup({ defaultDebugTargets: [DebugTarget.ALL] })

const chunkCountResults = load("metrics" as Filename) as Record<string, Metric>

const parameterExtrema = {} as Record<string, Extrema<ParameterValue, "open">>

Object.values(Parameter).forEach(parameter => {
    if (parameter.includes("Base")) {
        return
    }

    let parameterMin: Maybe<Min<ParameterValue>> = undefined
    let parameterMax: Maybe<Max<ParameterValue>> = undefined

    Object.values(chunkCountResults).forEach(chunkCountResult => {
        chunkCountResult.submetrics.forEach(submetric => {
            Object.entries(submetric).forEach(([parameterName, parameterValue]) => {
                if (parameterName === parameter && isNumber(parameterValue)) {
                    if (isUndefined(parameterMin) || parameterValue < parameterMin) {
                        parameterMin = parameterValue as Min<ParameterValue>
                    }
                    if (isUndefined(parameterMax) || parameterValue > parameterMax) {
                        parameterMax = parameterValue as Max<ParameterValue>
                    }
                }
            })
        })
    })

    if (!isUndefined(parameterMin) || !isUndefined(parameterMax)) {
        parameterExtrema[ parameter ] = [parameterMin, parameterMax]
    }
})

saveDebugMessage(JSON.stringify(parameterExtrema, undefined, 4) as IO, DebugTarget.ALL)
