import "colors"
import { isNumber, isUndefined } from "../../../general"
import { Metric } from "../bestMetric"
import { clearDebugLogFiles, debugSettings, DebugTarget, saveDebugMessage, setDebugTargets } from "../debug"
import { Parameter, ParameterValue } from "../sumOfSquares"

if (!debugSettings.noWrite) {
    clearDebugLogFiles()
}

setDebugTargets(DebugTarget.ALL)

const chunkCountResults = {} as unknown as Record<string, Metric> // paste things in from 1.txt, 2.txt, etc.

const parameterExtremes = {} as Record<string, [ParameterValue | undefined, ParameterValue | undefined]>

Object.values(Parameter).forEach(parameter => {
    if (parameter.includes("Base")) {
        return
    }

    let parameterMin: ParameterValue | undefined = undefined
    let parameterMax: ParameterValue | undefined = undefined

    Object.values(chunkCountResults).forEach(chunkCountResult => {
        chunkCountResult.submetrics.forEach(submetric => {
            Object.entries(submetric).forEach(([parameterName, parameterValue]) => {
                if (parameterName === parameter && isNumber(parameterValue)) {
                    if (isUndefined(parameterMin) || parameterValue < parameterMin) {
                        parameterMin = parameterValue
                    }
                    if (isUndefined(parameterMax) || parameterValue > parameterMax) {
                        parameterMax = parameterValue
                    }
                }
            })
        })
    })

    if (!isUndefined(parameterMin) || !isUndefined(parameterMax)) {
        parameterExtremes[ parameter ] = [parameterMin, parameterMax]
    }
})

saveDebugMessage(JSON.stringify(parameterExtremes, null, 4), DebugTarget.ALL)
