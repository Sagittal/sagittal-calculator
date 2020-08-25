import "colors"
import { isNumber, isUndefined, Max, Min } from "../../../general"
import { Metric } from "../bestMetric"
import { DebugTarget, saveDebugMessage } from "../debug"
import { Parameter, ParameterValue } from "../sumOfSquares"
import { applySharedUnpopularityMetricCommandSetup, load } from "./shared"

applySharedUnpopularityMetricCommandSetup({ defaultDebugTargets: [DebugTarget.ALL] })

const chunkCountResults = load("metrics") as Record<string, Metric>

const parameterExtrema = {} as Record<string, [Min<ParameterValue> | undefined, Max<ParameterValue> | undefined]> // TODO: could have an Extrema<> type which takes as a second argument whether it's open-ended or not

Object.values(Parameter).forEach(parameter => {
    if (parameter.includes("Base")) {
        return
    }

    let parameterMin: Min<ParameterValue> | undefined = undefined
    let parameterMax: Max<ParameterValue> | undefined = undefined

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

saveDebugMessage(JSON.stringify(parameterExtrema, null, 4), DebugTarget.ALL)
